import template from './home.html';
import controller from './home.controller';
import './home.sass';

let homeComponent = {
  restrict: 'E',
  bindings: {
    // images: '=' // bind images from resolver
  },
  template,
  controller
};

export default homeComponent;
