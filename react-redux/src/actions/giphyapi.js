export const LOAD_GIFS = 'LOAD_GIFS_REQUEST';

export function loadGifsRequest() {
  return (dispatch) => {
    dispatch({
      type: LOAD_GIFS,
    });
  };
}
