class CarouselController {

  "ngInject";
  constructor() {
  }

  $onInit() {
    this.ANIMATION_TIME = 600;
    this.CAROUSEL_WIDTH = 500;
    this.NUMBER_OF_SLIDES = this.images.length;
    let slide = angular.element(document.querySelector('#slide'))
    console.log(angular.element());
  }
}

export default CarouselController;
