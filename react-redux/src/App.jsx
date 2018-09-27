import React, { Component } from 'react';
import { hot } from 'react-hot-loader';
import { connect } from 'react-redux';
import { get } from 'lodash';
import Carousel from './components/Carousel/Carousel';
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
    return (
      <Carousel>
        {gifs.map((item, index) => {
          const id = `child${index}`;

          if (!get(item, 'images.fixed_width.url')) {
            console.error('images.fixed_width.url not found in ', item);
          }

          return <img key={id} src={item.images.fixed_width.url} alt='slider' />;
        })}
      </Carousel>
    );
  }
}

export default hot(module)(
  connect(
    mapStateToProps,
    mapDispatchToProps,
  )(App),
);
