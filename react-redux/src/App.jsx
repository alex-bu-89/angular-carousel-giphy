import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import Carousel from './components/Carousel';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return <Carousel />;
  }
}

export default hot(module)(App);
