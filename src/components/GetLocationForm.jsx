import { useState } from 'react';
import './GetLocationForm.css';

const GetLocationForm = ({ onGetLocation }) => {
  const [location, setLocation] = useState('');

  const getLocation = e => {
    e.preventDefault();
    onGetLocation(location);
    setLocation('');
  };

  return (
    <form onSubmit={getLocation} className='form'>
      <input
        type='text'
        placeholder='Choose location'
        value={location}
        onChange={e => setLocation(e.target.value)}
      />
      <button type='submit'>
        <i className='fas fa-search'></i>
      </button>
    </form>
  );
};

export default GetLocationForm;
