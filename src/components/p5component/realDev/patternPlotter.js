const s = k => {
  let pathObject = {
    drawing: []
  };

  k.setup = () => {
    k.createCanvas(k.windowWidth, k.windowHeight / 2);
    k.background(10);
  };

  k.draw = () => {
    if (k.mouseIsPressed && k.mouseY < k.windowHeight / 2) {
      k.stroke(255);
      // console.log(k.mouseX, k.mouseY);
      const newPoint = {
        x: k.mouseX,
        y: k.mouseY
      };
      pathObject.drawing.push(newPoint);
      let block = document.getElementById('theData');
      block.innerText = JSON.stringify(pathObject);
    }
  };
};

const canvasPlaygroundForP5 = new p5(s, 'p5Container');
