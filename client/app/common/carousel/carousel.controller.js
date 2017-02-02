/**
 * Simple carousel component
 */
class CarouselController {

  "ngInject";
  constructor() {
    this.currentImg = {
      index: null,
      image: null
    };
    this.height = 0
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

  init() {
    this.numberOfSlides = this.images.length;
    this.setSlide(0);
    console.log(this.images);
  }
}

export default CarouselController;
