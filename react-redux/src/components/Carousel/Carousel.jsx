import './Carousel.scss';

import React, { Component } from 'react';
import { get } from 'lodash';


class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  renderItems() {
    const { items } = this.props;

    return items.map((item, index) => {
      const id = `index${index}`;

      if (!get(item, 'images.fixed_width.url')) {
        console.error('images.fixed_width.url not found in ', item);
      }

      return <img key={id} src={item.images.fixed_width.url} alt='slider' />;
    });
  }

  render() {
    return (
      <section className='ab-carousel'>
        { this.renderItems() }
      </section>
    );
  }
}

export default Carousel;
