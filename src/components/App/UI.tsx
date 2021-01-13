import React from 'react';
import CalendarForm from '../CalendarForm';
import Slider from '../Slider';

interface Props {
  onSubmit: (date: string) => void;
  date: string;
  images: string[];
  isLoading: boolean;
  errorMessage: string;
  imageDate: string;
}

const UI: React.FC<Props> = ({
  onSubmit,
  date,
  images,
  isLoading,
  errorMessage,
  imageDate,
}) => {
  let highlight = true;
  const imageDateArray = imageDate.split('-');
  const searchDateArray = date.split('-');
  if (
    searchDateArray.length < 3 ||
    searchDateArray.length !== imageDateArray.length
  ) {
    highlight = false;
  }
  if (searchDateArray[1] !== imageDateArray[1]) {
    highlight = false;
  }
  if (searchDateArray[2] !== imageDateArray[2]) {
    highlight = false;
  }

  return (
    <div className='container margin-auto pt-3'>
      <h1 className='h1 text-center'>
        <span className='d-inline-block'>🌎🎂</span> B
        <span
          className={`fst-italic ${highlight ? 'fw-bolder text-success' : ''}`}>
          earth
        </span>
        day <span className='d-inline-block'>🎂🌎</span>
      </h1>
      <div className='container'>
        {isLoading ? (
          <div className='pt-3 container text-center'>
            <div className='mx-auto spinner-border text-dark' role='status'>
              <span className='visually-hidden'>Loading...</span>
            </div>
          </div>
        ) : (
          <div className='container my-3'>
            <CalendarForm date={date} onSubmit={onSubmit} />
            <div className='container my-3'>
              {errorMessage ? (
                <div className='alert alert-danger' role='alert'>
                  <p>{errorMessage}</p>
                </div>
              ) : (
                <Slider images={images} />
              )}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default UI;
