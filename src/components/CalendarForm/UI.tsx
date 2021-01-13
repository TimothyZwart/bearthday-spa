import React from 'react';

interface Props {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  date: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  max?: string;
  min?: string;
}

const UI: React.FC<Props> = ({ onSubmit, date, onChange, max, min }) => {
  return (
    <form onSubmit={onSubmit}>
      <div className='form-group'>
        <label htmlFor='birthday'>Birthday</label>
        <input
          className='form-control'
          value={date}
          onChange={onChange}
          max={max}
          min={min}
          type='date'
          name='birthday'
        />
        <small className='form-text text-muted'>
          Enter Your birthday so we can find matching images. If the word earth
          in Bearthday is bolded and in green it is an exact match of an image
          from the passed year.
        </small>
      </div>
      <div className='form-group pt-2'>
        <button className='btn btn-primary' type='submit'>
          Get BearthDay Image
        </button>
      </div>
    </form>
  );
};

export default UI;
