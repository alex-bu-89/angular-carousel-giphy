import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import Carousel from './components/Carousel';
import { loadGifsRequest } from './actions/giphyapi';

const mapDispatchToProps = dispatch => ({
  loadGifs: () => {
    dispatch(loadGifsRequest());
  },
});

const mapStateToProps = state => ({
  gifs: state.giphyapi.gifs,
});

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { loadGifs } = this.props;
    loadGifs();
  }

  render() {
    const { gifs } = this.props;
    return <Carousel images={gifs} />;
  }
}

export default hot(module)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App),
);
