import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';

function Slider() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100" 
          src="https://source.unsplash.com/700x1040/?silver-rings"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>India's Best Rings</h3>
          <p>Indulge in the sparkle of our exclusive gemstones and jewels.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/700x1040/?gold-ring"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Enhance your beauty with our exquisite jewellery collection.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://source.unsplash.com/700x1040/?rings"
          alt="Third slide"/>

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
          "Discover timeless elegance with every gemstone at our jewellery store."
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

// render(<Slider />);
export default Slider;