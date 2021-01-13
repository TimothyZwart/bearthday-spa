import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { NASA_AVAILABLE_URL } from '../../constants';
import { getNasaImages } from '../../Nasa/getNasaImages';
import binarySearchForClosestDate from '../../utils/binarySearchForClosestDate';
import getSearchDate from '../../utils/getSearchDate';
import UI from './UI';

function App() {
  const [date, setDate] = useState('');
  const [images, setImages] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [availableDates, setAvaliableDates] = useState<string[]>([]);
  const [erroMessage, setErrorMessage] = useState<string>('');
  const [imageDate, setImageDate] = useState('');

  /**
   * On successful form submition update date
   */
  const onSubmitHandler = (date: string) => {
    if (date === '') {
      setErrorMessage('No Date provided');
      return;
    }
    const MaximumValid = new Date(Date.now());
    MaximumValid.setUTCDate(MaximumValid.getUTCDate() - 1);
    if (MaximumValid < new Date(date)) {
      setErrorMessage(`Date must occur before today's date`);
      return;
    }
    setImageDate('');
    setDate(date);
  };
  /**
   * Gets available dates in a sorted order
   */
  useEffect(() => {
    const getAvaliableDates = async () => {
      setIsLoading(true);
      const availableDates: string[] = [];
      const { data } = await axios.get(NASA_AVAILABLE_URL);
      data.forEach((element: any) => {
        availableDates.push(element.date);
      });
      availableDates.sort((a, b) => {
        const date1 = new Date(a);
        const date2 = new Date(b);
        return date1.getTime() - date2.getTime();
      });
      setIsLoading(false);
      setAvaliableDates(availableDates);
    };
    getAvaliableDates();
  }, []);

  /**
   * Takes Care of looking for the images using date
   */
  useEffect(() => {
    const getImages = async (date: string) => {
      setIsLoading(true);
      const searchDate = getSearchDate(Date.now(), date);
      let dateUsed = binarySearchForClosestDate(availableDates, searchDate);
      if (dateUsed == null) {
        setErrorMessage(
          'Could Not find available Image date Matching or Greater'
        );
        setImages([]);
        setIsLoading(false);
        return;
      }
      const images = await getNasaImages(dateUsed);
      setImageDate(dateUsed);
      setErrorMessage('');
      setImages(images);
      setIsLoading(false);
    };
    if (date !== '') {
      getImages(date);
    }
  }, [date, availableDates]);

  return (
    <UI
      isLoading={isLoading}
      onSubmit={onSubmitHandler}
      errorMessage={erroMessage}
      images={images}
      date={date}
      imageDate={imageDate}></UI>
  );
}

export default App;
