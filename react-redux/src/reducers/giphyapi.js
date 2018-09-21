import { LOAD_GIFS_REQUEST } from '../actions/giphyapi';

const initState = {
  gifs: [],
};

export default function giphyapi(state = initState, action) {
  switch (action.type) {
    case LOAD_GIFS_REQUEST:
      console.log('------>');
      return {
        gifs: action.data,
      };
    default:
      return state;
  }
}
