import axios from 'axios';
import { NASA_IMAGE_REPOSITORY_URL } from '../constants';

export interface NasaImage {
  identifier: string;
  caption: string;
  image: string;
  version: string;
  date: string;
}

export const getNasaImages = async (date: string) => {
  const images = [];
  try {
    const [year, month, day] = date.split('-');
    const { data } = await axios.get(
      `https://epic.gsfc.nasa.gov/api/natural/date/${date}`
    );
    for (let obj of data) {
      const { image } = obj;
      const imageUrl = `${NASA_IMAGE_REPOSITORY_URL}natural/${year}/${month}/${day}/png/${image}.png`;
      images.push(imageUrl);
    }
  } catch (_) {}
  return images;
};
