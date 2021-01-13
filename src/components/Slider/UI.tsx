import React from 'react';

interface Props {
  images: string[];
  next: () => void;
  prev: () => void;
  currentSlide: number;
}
const UI: React.FC<Props> = ({ images, next, prev, currentSlide }) => {
  if (images.length === 0) {
    return null;
  }
  return (
    <div className='container'>
      <h3>{`Image ${currentSlide + 1} of ${images.length}`}</h3>
      <div className='carousel slide'>
        <div className='carousel-inner'>
          {images.map((image, index) => {
            return (
              <div
                className={`carousel-item ${
                  index === currentSlide ? 'active' : ''
                }`}
                key={index}>
                <img src={image} className='d-block w-100' alt='the earth' />
              </div>
            );
          })}
        </div>
        <button className={'btn carousel-control-prev'} onClick={prev}>
          <span
            className='carousel-control-prev-icon'
            aria-hidden='true'></span>
          <span className='visually-hidden'>Previous</span>
        </button>
        <button className={'btn  carousel-control-next'} onClick={next}>
          <span
            className='carousel-control-next-icon'
            aria-hidden='true'></span>
          <span className='visually-hidden'>Next</span>
        </button>
      </div>
    </div>
  );
};

export default UI;
