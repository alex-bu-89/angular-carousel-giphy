import React, { Component } from 'react';

class Carousel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { items } = this.props;

    return (
      <section>
        {
          items.forEach((item, index) => {
            const id = `index${index}`;
            console.log('------------', JSON.stringify(item.images.fixed_width.url, null, 4));
            if (item && item.images && item.images.fixed_width && item.images.fixed_width.url) {
              return (<img key={id} src={item.images.fixed_width.url} alt="slider" />);
            }

            return 'No images';
          })
        }
      </section>
    );
  }
}

export default Carousel;
