import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  { image: "https://res.cloudinary.com/self-taken/image/upload/f_auto,q_auto/v1/Left%20card/rpjkr6enp232lhv4qbf1" },
  { image: "https://res.cloudinary.com/self-taken/image/upload/f_auto,q_auto/v1/Left%20card/smhotq0gizbhewyjegcu" },
  { image: "https://res.cloudinary.com/self-taken/image/upload/f_auto,q_auto/v1/Left%20card/tpryqdfcxijhpfa8fqf6" },
  { image: "https://res.cloudinary.com/self-taken/image/upload/f_auto,q_auto/v1/Left%20card/bkso0jgd2aq8ejnlh9uo" },
  { image: "https://res.cloudinary.com/self-taken/image/upload/f_auto,q_auto/v1/Left%20card/iwc3mciq8a00gtksxl0q" },
  { image: "https://res.cloudinary.com/self-taken/image/upload/f_auto,q_auto/v1/Left%20card/nqwnozwolix6gaohm2os" },
];

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
};

const Screen = () => {
  return (
    <div>
      <div style={{ width: '80%', margin: '0 auto', overflow: 'hidden' }}>
        <Slider {...settings}>
          {images.map((image, index) => (
            <div key={index}>
              <img src={image.image} alt={`carousel-item-${index}`} style={{ width: '100%', height: 'auto' }} />
            </div>
          ))}
        </Slider>
      </div>
      <div style={{ padding: '5px', marginTop: '50px' }}></div>
    </div>
  );
}

export default Screen;
