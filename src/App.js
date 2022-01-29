import { useEffect, useState } from 'react';
import GetLocationForm from './components/GetLocationForm';
import { fetchWeather } from './components/api/featcWeather';
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
      <GetLocationForm onGetLocation={getLocationHandler} />
      <h1>{locationData.name}</h1>
      {locationData.name && <h1>{locationData.main.temp}</h1>}
      {locationData.name && <h1>{locationData.weather[0].description}</h1>}
      {locationData.name && (
        <h1>
          {locationData.main.temp_min} / {locationData.main.temp_max}
        </h1>
      )}
      {locationData.name && (
        <img
          src={`http://openweathermap.org/img/wn/${locationData.weather[0].icon}@2x.png`}
          alt='weather icon'
        />
      )}
      {console.log(locationData)}
    </div>
  );
};

export default App;
