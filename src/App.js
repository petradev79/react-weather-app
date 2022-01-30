import { useEffect, useState } from 'react';
import { fetchWeather } from './components/api/featcWeather';
import GetLocationForm from './components/GetLocationForm';
import CurrentWeather from './components/CurrentWeather';
import HoursWeather from './components/HoursWeather';
import DaysWeather from './components/DaysWeather';
import AstroWeather from './components/AstroWeather';
import clouds from './assets/cloudy.jpg';
import './App.css';

const App = () => {
  const [locationData, setLocationData] = useState({});

  const getLocationHandler = async location => {
    const data = await fetchWeather(location);
    setLocationData(data);
  };

  useEffect(() => {
    getLocationHandler('Niš');
  }, []);

  return (
    <div className='main'>
      <img src={clouds} alt='Clouds' className='bg-img' />
      <div className='container'>
        <GetLocationForm onGetLocation={getLocationHandler} />
        {locationData.current && <CurrentWeather locationData={locationData} />}
        {locationData.current && <AstroWeather locationData={locationData} />}
        <div>
          {locationData.current && <HoursWeather locationData={locationData} />}
          {locationData.current && <DaysWeather locationData={locationData} />}
        </div>
        {console.log(locationData)}
      </div>
    </div>
  );
};

export default App;
