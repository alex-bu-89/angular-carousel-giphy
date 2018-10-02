import './App.scss';

import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { get } from 'lodash';
import Carousel from './components/Carousel/Carousel';
import { loadGifsRequest } from './actions/giphyapi';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { loadGifs } = this.props;
    loadGifs();
  }

  renderCarouselItems() {
    const { gifs } = this.props;

    return gifs.map((item, index) => {
      const id = `child${index}`;

      if (!get(item, 'images.fixed_width.url')) {
        throw new Error(`images.fixed_width.url not found in ${item}`);
      }

      return (
        <div className="ab-carousel--card" key={id}>
          <img src={item.images.fixed_width.url} alt='slider' />
        </div>
      );
    });
  }

  render() {
    return (
      <div className='container d-flex h-100'>
        <div className='row justify-content-center align-self-center w-100'>
          <Carousel>
            { this.renderCarouselItems() }
          </Carousel>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  loadGifs: () => {
    dispatch(loadGifsRequest());
  },
});

const mapStateToProps = state => ({
  gifs: state.giphyapi.gifs,
});

export default hot(module)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App),
);
