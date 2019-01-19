import React, { Component } from 'react';
import './Carousel.scss';

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

  loadControlButtons() {
    return (
      <div className='ab-carousel--controlls'>
        <span className='ab-carousel--controlls__left' />
        <span className='ab-carousel--controlls__right' />
      </div>
    );
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
            {
              children.map((child, index) => {
                const id = `child${index}`;

                return <div className='ab-carousel--card' key={id}>{child}</div>;
              })
            }
          </div>
          { this.loadControlButtons() }
        </div>
      </section>
    );
  }
}

export default Carousel;
