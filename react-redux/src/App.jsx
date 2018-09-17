import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import Carousel from './components/Carousel';
import { loadGifs } from './actions/giphyapi';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    this.props.dispatch(loadGifs());
  }

  render() {
    return <Carousel />;
  }
}

const mapStateToProps = state => ({
  gifs: state.giphyapi.gifs,
});

export default hot(module)(connect(mapStateToProps)(App));
