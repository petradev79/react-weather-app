import axios from 'axios';

const API_KEY = 'db62d3e074c8a5ebe26f9df125f2185a';
const BASE_URL = 'https://api.openweathermap.org/data/2.5/weather';

export const fetchWeather = async query => {
  const { data } = await axios.get(BASE_URL, {
    params: {
      q: query,
      units: 'metric',
      APPID: API_KEY,
    },
  });

  return data;
};
