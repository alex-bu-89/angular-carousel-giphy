import { Component } from 'react';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    console.log('------>', this);
  }

  render() {
    return 'hello world';
  }
}

const mapStateToProps = state => ({
  gifs: state.giphyapi.gifs,
});

export default connect(mapStateToProps)(App);
