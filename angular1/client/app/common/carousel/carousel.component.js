import template from './carousel.html';
import controller from './carousel.controller';
import './carousel.sass';

let carouselComponent = {
  restrict: 'E',
  bindings: {
    images: '='
  },
  template,
  controller
};

export default carouselComponent;
