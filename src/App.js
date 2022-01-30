import { useEffect, useState } from 'react';
import { fetchWeather } from './api/featcWeather';
import GetLocationForm from './components/GetLocationForm';
import CurrentWeather from './components/CurrentWeather';
import HoursWeather from './components/HoursWeather';
import DaysWeather from './components/DaysWeather';
import AstroWeather from './components/AstroWeather';
import clouds from './assets/cloudy.jpg';
import './App.css';

const App = () => {
  const [locationData, setLocationData] = useState(null);
  const [error, setError] = useState('');

  const getLocationHandler = async location => {
    try {
      const data = await fetchWeather(location);
      setLocationData(data);
      setError(null);
    } catch (err) {
      setError(err);
    }
  };

  useEffect(() => {
    getLocationHandler('Niš');
  }, []);

  return (
    <div className='main'>
      <img src={clouds} alt='Clouds' className='bg-img' />
      <div className='container'>
        <GetLocationForm onGetLocation={getLocationHandler} />
        {error && (
          <p className='error-message'>
            Sorry, something went wrong! Maybe you misspelled the city. Please
            try again 😢
          </p>
        )}
        {locationData && (
          <>
            <CurrentWeather locationData={locationData} />
            <AstroWeather locationData={locationData} />
            <div>
              <HoursWeather locationData={locationData} />
              <DaysWeather locationData={locationData} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default App;
