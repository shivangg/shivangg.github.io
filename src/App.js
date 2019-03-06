import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import FourierSketch from './components/FourierSketch';
import P5Wrapper from './components/P5Wrapper';

class App extends Component {
  render() {
    return <P5Wrapper sketch={FourierSketch} />;
  }
}

export default App;
