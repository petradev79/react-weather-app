import { formatDate } from './date/formatDate';
import './CurrentWeather.css';

const CurrentWeather = ({ locationData }) => {
  const current = {
    temp: Math.round(locationData.current.temp_c),
    name: locationData.location.name,
    date: formatDate(),
    text: locationData.current.condition.text,
    icon: locationData.current.condition.icon,
  };

  return (
    <div className='current'>
      <div className='current__temp'>
        {current.temp}
        <span>°</span>
      </div>
      <div className='current__wrapper'>
        <div className='current__description'>
          <p className='current__name'>{current.name}</p>
          <p className='current__date'>
            {`${current.date.hour}:${current.date.min} - ${current.date.weekday}, ${current.date.date} ${current.date.month}`}
          </p>
        </div>
        <div className='current__weather'>
          <div className='current__img'>
            <img src={current.icon} alt='weather icon' />
          </div>
          <p>{current.text}</p>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
