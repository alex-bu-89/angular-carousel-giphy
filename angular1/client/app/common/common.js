import angular from 'angular';
import Carousel from './carousel/carousel';

let commonModule = angular.module('app.common', [
  Carousel
])

.name;

export default commonModule;
