import { formatDate } from '../date/formatDate';
import './DaysWeather.css';

const generateDay = day => {
  const date = formatDate(day.date_epoch);
  const icon = day.day.condition.icon;
  const maxTemp = Math.round(day.day.maxtemp_c);
  const minTemp = Math.round(day.day.mintemp_c);
  return { date, icon, maxTemp, minTemp };
};

const DaysWeather = ({ locationData }) => {
  const days = locationData.forecast.forecastday
    .map(generateDay)
    .filter((_, i) => i > 0);

  return (
    <div>
      {days.map(day => (
        <div className='day' key={day.date.date}>
          <div className='day__date'>
            {day.date.shortWeekday}, {day.date.date}. {day.date.month}
          </div>
          <img className='day__img' src={day.icon} alt='weather icon' />
          <div className='day__temp'>
            {day.maxTemp}° <span>/ {day.minTemp}°</span>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DaysWeather;
