const MAX_SLIDES = 10;

/**
 * Simple carousel component
 */
/* @ngInject */
class CarouselController {

  constructor(GiphyService) {
    this.GiphyService = GiphyService
    this.currentImg = {
      index: null,
      image: null
    };
    this.height = 0
    this.maxSlides = MAX_SLIDES;
    console.log(GiphyService);
  }

  /**
   * Run component when gifs had come
   */
  $onInit() {
    if (this.images.length === 0) {
      throw new Error('Carousel does not have images');
    }

    this.init();
  }

  /**
   * Set current image
   * @param {Integer} index
   */
  setSlide(index) {
    if (!index in this.images) {
      throw new Error('Can not set current image, index not exist in image array');
    }
    this.currentImg.index = index;
    this.currentImg.image = this.images[index];
  }
  /**
   * Change to next slide
   */
  nextSlide() {
    let oldIndex = this.currentImg.index + 1;
    if(this.images[oldIndex] == undefined) {
      oldIndex = 0;
    }
    this.setSlide(oldIndex);

  }

  /**
   * Change to previous slide
   */
  previousSlide() {
    let oldIndex = this.currentImg.index - 1;
    if(this.images[oldIndex] == undefined) {
      oldIndex = this.images.length - 1;
    }
    this.setSlide(oldIndex);
  }

  /**
   * Is slide active
   * @param {Integer} index
   */
  isActive(index) {
    if(this.currentImg.index === index) {
      return true;
    } else {
      return false
    }
  }

  /**
   *
   */
  loadImages() {
    if (this.numberOfSlides > MAX_SLIDES || this.numberOfSlides === undefined) {
      this.numberOfSlides = MAX_SLIDES
    }

    console.log('loading ' + this.numberOfSlides + ' gifs');
    this.GiphyService.getGifs(this.numberOfSlides).then((images) => {
      this.images = images;
      this.init();
    })
  }

  init() {
    this.numberOfSlides = this.images.length;
    this.setSlide(0);
    console.log(this.images);
  }
}

export default CarouselController;
