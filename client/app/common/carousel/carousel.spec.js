import HeroModule from './carousel'
import HeroController from './carousel.controller';
import HeroComponent from './carousel.component';
import HeroTemplate from './carousel.html';
//
// describe('Hero', () => {
//   let $rootScope, makeController;
//
//   beforeEach(window.module(HeroModule));
//   beforeEach(inject((_$rootScope_) => {
//     $rootScope = _$rootScope_;
//     makeController = () => {
//       return new HeroController();
//     };
//   }));
//
//   describe('Module', () => {
//     // top-level specs: i.e., routes, injection, naming
//   });
//
//   describe('Controller', () => {
//     // controller specs
//     it('has a name property [REMOVE]', () => { // erase if removing this.name from the controller
//       let controller = makeController();
//       expect(controller).to.have.property('name');
//     });
//   });
//
//   describe('Template', () => {
//     // template specs
//     // tip: use regex to ensure correct bindings are used e.g., {{  }}
//     it('has name in template [REMOVE]', () => {
//       expect(HeroTemplate).to.match(/{{\s?\$ctrl\.name\s?}}/g);
//     });
//   });
//
//   describe('Component', () => {
//       // component/directive specs
//       let component = HeroComponent;
//
//       it('includes the intended template',() => {
//         expect(component.template).to.equal(HeroTemplate);
//       });
//
//       it('invokes the right controller', () => {
//         expect(component.controller).to.equal(HeroController);
//       });
//   });
// });