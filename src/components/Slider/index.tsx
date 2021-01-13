import React, { useState } from 'react';
import UI from './UI';

interface Props {
  images: string[];
}
const Slider: React.FC<Props> = ({ images }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  if (images.length === 0) {
    return null;
  }

  const next = () => {
    setCurrentSlide((cur) =>
      cur === images.length - 1 ? 0 : currentSlide + 1
    );
  };
  const prev = () => {
    setCurrentSlide((cur) =>
      cur === 0 ? images.length - 1 : currentSlide - 1
    );
  };
  return (
    <UI images={images} currentSlide={currentSlide} next={next} prev={prev} />
  );
};

export default Slider;
