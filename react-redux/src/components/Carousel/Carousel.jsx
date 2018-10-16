import './Carousel.scss';
import React, { Component } from 'react';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /**
   * Get default styles for slides
   */
  getSlidesStyles() {
    const { children } = this.props;

    return {
      width: `${100 * children.length}%`,
      // transform: `translateX(${-1 * index * (100 / children.length)}%)`,
    };
  }

  /**
   * Render component
   */
  render() {
    const { children } = this.props;
    const styles = this.getSlidesStyles();

    return (
      <section className='ab-carousel'>
        <div className='ab-carousel--wrapper'>
          <div style={styles} className='ab-carousel--inner'>
            {children}
          </div>
        </div>
      </section>
    );
  }
}

export default Carousel;
