import { Component } from 'react';
import { connect } from 'react-redux';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('------>');
  }

  render() {
    return 'hello carousel';
  }
}

const mapStateToProps = state => ({
  gifs: state.giphyapi.gifs,
});

export default connect(mapStateToProps)(Carousel);
