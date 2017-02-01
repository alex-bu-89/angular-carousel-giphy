class CarouselController {

  "ngInject";
  constructor() {
    this.currentImg = {
      index: null,
      image: null
    };
  }

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
  setCurrentImage(index) {
    if (!index in this.images) {
      throw new Error('Can not set current image, index not exist in image array');
    }

    this.currentImg.index = index;
    this.currentImg.image = this.images[index];

  }

  nextSlide() {

  }

  previousSlide() {

  }

  init() {
    this.numberOfSlides = this.images.length;
    this.setCurrentImage(0);
    console.log(this.images);
  }
}

export default CarouselController;
