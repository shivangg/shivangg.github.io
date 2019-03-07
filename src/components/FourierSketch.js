import customFont from './p5component/realDev/assets/CourierPrimeBoldItalic.ttf';

class Complex {
  constructor(a, b) {
    this.re = a;
    this.im = b;
  }

  add(c) {
    this.re += c.re;
    this.im += c.im;
  }

  mult(c) {
    const re = this.re * c.re - this.im * c.im;
    const im = this.re * c.im + this.im * c.re;
    return new Complex(re, im);
  }
}

const p5Seed = sketch => {
  let worldTime = 0;
  let patternPath = [];
  let fourierX;
  let data = [];
  let font;
  const green = '#00eb00';
  const blue = '#3163ff';
  const sublimeTextCobalt2ThemeColor = '#1d354d';
  // const yellow = '#fbe200';

  sketch.preload = () => {
    font = sketch.loadFont(customFont);
  };

  const fillData = fonts => {
    function findCorrectedValuesFromScreenSize() {
      let referenceSize = -300;
      let fontSize = 200;
      if (window.innerWidth < 800) {
        referenceSize = 40;
        fontSize = 60;
      }
      return [referenceSize, fontSize];
    }

    let [referenceSize, fontSize] = findCorrectedValuesFromScreenSize();
    const drawing = fonts.textToPoints('shivangg', referenceSize, 0, fontSize, {
      sampleFactor: 2,
      simplifyThreshold: 0
    });
    data = {
      drawing: drawing
    };
    console.log('font loaded');
    console.log('window.innerWidth', window.innerWidth);
  };

  const normalizeDataPoints = (x, y) => {
    const normalizedX = x;
    // (window.innerWidth * (x - initialX + 200)) / recordedScreenWidth;
    const normalizedY = y;
    // (window.innerWidth * (y - initialY - 60)) / recordedScreenWidth;

    return [normalizedX, normalizedY];
  };

  sketch.setup = () => {
    sketch.createCanvas(window.innerWidth, window.innerHeight / 2);
    // sketch.translate(0, 100);
    fillData(font);
    console.log('starting setup...');
    const complexNumbers = [];
    // const { x: fisrtX, y: firstY } = data.drawing[0];
    // console.log('first x, y', fisrtX, firstY);

    let minX = 10000000;

    for (const { x, y } of data.drawing) {
      if (x < minX) {
        minX = x;
      }
      const xyInComplexPlaneWithCorrectedOrigins = new Complex(
        ...normalizeDataPoints(x, y)
      );
      complexNumbers.push(xyInComplexPlaneWithCorrectedOrigins);
    }
    console.log('minX: ', minX);
    fourierX = dft(complexNumbers);
    fourierX.sort((a, b) => b.amplitude - a.amplitude);

    // (function pauseOnMouseHover() {
    //   let k = document.getElementById('p5Container');
    //   k.addEventListener('mouseenter', () => {
    //     sketch.frameRate(2);
    //   });
    //   k.addEventListener('touchstart', () => sketch.frameRate(0));
    //   k.addEventListener('mouseleave', () => sketch.frameRate(50));
    //   k.addEventListener('touchend', () => sketch.frameRate(50));
    // })();

    console.log('Setup finished!');
  };

  let circleUptoWhichRender = 0;

  sketch.draw = () => {
    const dt = (2 * Math.PI) / fourierX.length;
    sketch.background(sublimeTextCobalt2ThemeColor);

    if (fourierX.length > circleUptoWhichRender) {
      // console.log(fourierX);
      const endInit = epicycles(
        window.innerWidth / 2 - 200,
        window.innerHeight / 2 - 200,
        0,
        fourierX,
        true,
        circleUptoWhichRender
      );
      circleUptoWhichRender += 1;
      if (endInit) {
        circleUptoWhichRender = fourierX.length + 1;
      }
    } else {
      const distanceBetween = (prevX, prevY, currentX, currentY) => {
        // console.log((prevX - currentX) ** 2 + (prevY - currentY) ** 2);
        return (prevX - currentX) ** 2 + (prevY - currentY) ** 2;
      };

      // console.log('patternPath:', patternPath);
      const isComplete = worldTime + 20 * dt < 2 * Math.PI;

      if (isComplete) {
        const patternPathVector = epicycles(
          window.innerWidth / 2 - 200,
          window.innerHeight / 2 - 200,
          0,
          fourierX
        );
        patternPath.push(patternPathVector);

        worldTime += dt * 10;
      } else {
        // sketch.frameRate(1);
        sketch.noLoop();
      }

      (function drawPattern() {
        let prevPointX = patternPath[0].x;
        let prevPointY = patternPath[0].y;
        sketch.stroke(green);
        sketch.beginShape(sketch.LINES);
        sketch.noFill();
        // console.log(patternPath.length);
        for (const { x, y } of patternPath) {
          if (distanceBetween(prevPointX, prevPointY, x, y) < 100) {
            sketch.stroke(green);
            sketch.vertex(x, y);
            // sketch.vertex(x, y);
          } else {
            // sketch.stroke(51, 0);
            (function endLastLetterAndStartNew() {
              sketch.endShape(sketch.CLOSE);
              sketch.stroke(green);
              sketch.beginShape(sketch.LINES);
              sketch.noFill();
            })();

            // console.log("distance to large!! Don't draw");
            // console.log(distanceBetween(prevPointX, prevPointY, x, y));
            // console.log('x, y', x, y);
            // console.log('prevX, preY', prevPointX, prevPointY);
          }
          prevPointX = x;
          prevPointY = y;
        }
        sketch.endShape();
      })();
    }

    // logging fps
    // let fps = sketch.frameRate();
    // document.getElementById('info').innerText = fps.toFixed(2);
    // console.log(fps.toFixed(2));
  };

  // const renderFourierCircles = () => {};

  const dft = pathAsComplexNumberPoints => {
    console.log('dft computing...');
    let N = pathAsComplexNumberPoints.length;
    let X = [];
    for (let k = 0; k < N; k++) {
      let sum = new Complex(0, 0);
      for (let n = 0; n < N; n++) {
        const phi = (2 * Math.PI * k * n) / N;
        const c = new Complex(Math.cos(phi), Math.sin(-phi));
        sum.add(pathAsComplexNumberPoints[n].mult(c));
      }
      sum.re /= N;
      sum.im /= N;

      const freq = k;
      const amplitude = (sum.re ** 2 + sum.im ** 2) ** 0.5;
      const phase = Math.atan2(sum.im, sum.re);

      X[k] = {
        re: sum.re,
        im: sum.im,
        freq,
        amplitude,
        phase
      };
    }
    console.log('dft computed!', X.length);
    return X;
  };

  const epicycles = (
    x,
    y,
    rotation,
    fourier,
    init = false,
    circleUptoWhichRender = false
  ) => {
    for (let i = 0; i < fourier.length; i++) {
      let prevx = x;
      let prevy = y;
      let freq = fourier[i].freq;
      let radius = fourier[i].amplitude;
      let phase = fourier[i].phase;
      x += radius * Math.cos(freq * worldTime + phase + rotation);
      y += radius * Math.sin(freq * worldTime + phase + rotation);

      // for better mobile performance at the cost of accuracy.
      if (radius < window.innerWidth * 0.003) {
        if (init) {
          return true;
        }
        continue;
      }
      if (init) {
        sketch.frameRate(10 + (5 * circleUptoWhichRender) / 10);
      } else {
        sketch.frameRate(60);
      }
      // sketch.redraw();

      drawCircles(sketch, prevx, prevy, radius);

      drawRadiusLine(sketch, prevx, prevy, x, y, blue);

      if (circleUptoWhichRender === i) {
        // console.log(circleUptoWhichRender, fourierX.length);
        return false;
      }
    }
    // console.log('Sent from epicycle', x, y);
    return sketch.createVector(x, y);
  };
};

const drawCircles = (sketch, prevx, prevy, radius) => {
  sketch.stroke('#2ef');
  sketch.noFill();
  sketch.ellipse(prevx, prevy, radius * 2);
};

const drawRadiusLine = (sketch, prevx, prevy, x, y, color) => {
  sketch.stroke(color);
  sketch.line(prevx, prevy, x, y);
};

export default p5Seed;
