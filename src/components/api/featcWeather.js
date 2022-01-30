import axios from 'axios';

const API_KEY = '3d733b11c0ee4d39ae8180218211106';
const BASE_URL = 'http://api.weatherapi.com/v1/';

export const fetchWeather = async query => {
  const { data } = await axios.get(
    `${BASE_URL}forecast.json?key=${API_KEY}&q=${query}&days=3`
  );

  return data;
};
