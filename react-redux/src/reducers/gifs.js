import { LOAD_GIFS } from '../actions/gifs';

const initState = {
  gifs: [],
};

export default function giphyapi(state = initState, action) {
  switch (action.type) {
    case LOAD_GIFS:
      return {
        gifs: [{ foo: 'bar' }],
      };
    default:
      return state;
  }
}
