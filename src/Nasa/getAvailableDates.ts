import axios from 'axios';
import { NASA_AVAILABLE_URL } from '../constants';

export interface NasaDate {
  date: string;
}

export const getAvailableDates = async () => {
  try {
    const availableDates: string[] = [];
    const { data } = await axios.get(NASA_AVAILABLE_URL);
    data.forEach((element: NasaDate) => {
      availableDates.push(element.date);
    });
    availableDates.sort((a, b) => {
      const date1 = new Date(a);
      const date2 = new Date(b);
      return date1.getTime() - date2.getTime();
    });
    return availableDates;
  } catch (_) {
    return [];
  }
};
