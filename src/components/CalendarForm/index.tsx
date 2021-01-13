import React, { useEffect, useState } from 'react';
import UI from './UI';

interface Props {
  onSubmit: (date: string) => void;
  date?: string;
}
const CalendarForm: React.FC<Props> = ({ onSubmit, date }) => {
  const [inputDate, setInputDate] = useState('');
  const getMaxDate = () => {
    const today = new Date();
    today.setDate(today.getDate() - 1);
    const day = today.getDate();
    const month = today.getMonth() + 1;
    const yyyy = today.getFullYear();
    let dd = day.toString();
    let mm = month.toString();
    if (day < 10) {
      dd = '0' + dd;
    }
    if (month < 10) {
      mm = '0' + mm;
    }
    return `${yyyy}-${mm}-${dd}`;
  };
  getMaxDate();
  useEffect(() => {
    if (date) {
      setInputDate(date);
    }
  }, [date]);
  const onSubmitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(inputDate);
  };

  const onChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputDate(e.target.value);
  };
  return (
    <UI
      onChange={onChangeHandler}
      date={inputDate}
      onSubmit={onSubmitHandler}
      max={getMaxDate()}></UI>
  );
};

export default CalendarForm;
