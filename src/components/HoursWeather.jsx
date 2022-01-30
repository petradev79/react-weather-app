import './HoursWeather.css';

const generateHour = hour => {
  const time = hour.time.split(' ')[1];
  const temp = Math.round(hour.temp_c);
  const icon = hour.condition.icon;
  return { time, temp, icon };
};

const HoursWeather = ({ locationData }) => {
  const hours = [
    ...locationData.forecast.forecastday[0].hour.filter(
      h => h.time.split(' ')[1] > locationData.location.localtime.split(' ')[1]
    ),
    ...locationData.forecast.forecastday[1].hour,
    ...locationData.forecast.forecastday[2].hour,
  ].map(generateHour);

  return (
    <div className='hours'>
      {hours.map((hour, i) => (
        <div className='hour' key={hour.time + i}>
          <div className='hour__time'>{hour.time}</div>
          <img className='hour__img' src={hour.icon} alt='weather icon' />
          <div className='hour__temp'>{hour.temp}°</div>
        </div>
      ))}
    </div>
  );
};

export default HoursWeather;
