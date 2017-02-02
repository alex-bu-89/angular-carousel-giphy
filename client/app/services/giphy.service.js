const API_URL = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC&tag=american+psycho';

/**
 * Giphy service allow access to GifyAPI
 */
class GiphyService {

  /*@ngInject*/
  constructor($http, $q) {
    this.$http = $http;
    this.$q = $q;
    this.promises = [];
  }

  /**
   * Get random gif from gify API
   * @return {Promise}
   */
  getRandomGify(){
    return this.$http({
      method: 'GET',
      url: API_URL
    })
    .then((responce) => {
      return responce.data;
    })
    .catch((err) => {
      throw new Error('GetRandomGify error', err);
    })
  }

  /**
   * Get several random gifs from gify API
   * @param {Number} num - number of gifs
   * @return {Promise}
   */
  getGifs(num = 5){

    // empty array on start
    this.promises = [];
    
    for(let i = 0; i < num; i++) {
      this.promises.push(this.getRandomGify());
    }

    return this.$q.all(this.promises)
    .then((responses) => {
      return responses.map((response) => {
        return response = response.data;
      })
    })
    .catch((err) => {
      throw new Error('getGifs error', err);
    });
  }

}

export default GiphyService;
