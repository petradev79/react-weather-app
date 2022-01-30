import './AstroWeather.css';

const AstroWeather = ({ locationData }) => {
  const astro = {
    sunrise: locationData.forecast.forecastday[0].astro.sunrise,
    sunset: locationData.forecast.forecastday[0].astro.sunset,
    moonrise: locationData.forecast.forecastday[0].astro.moonrise,
    moonset: locationData.forecast.forecastday[0].astro.moonset,
    cloudy: `${locationData.current.cloud}%`,
    humidity: `${locationData.current.humidity}%`,
    wind: `${locationData.current.wind_kph}km/h`,
  };

  return (
    <div className='astro'>
      <h3 className='astro__title'>Weather Details</h3>
      {Object.entries(astro).map(([item, value]) => (
        <div className='astro__group' key={item}>
          <h5 className='astro__text'>{item}</h5>
          <div>{value}</div>
        </div>
      ))}
    </div>
  );
};

export default AstroWeather;
