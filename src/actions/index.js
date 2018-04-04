import axios from 'axios';


const API_KEY = "429ca790bed8ce1654b733ee12747b2d";
const ROOT_URL = `https://api.openweathermap.org/data/2.5/forecast?appid=${API_KEY}`;
export const FETCH_WEATHER = 'FETCH_WEATHER';

export const fetchWeather = (term) => {
  const url = `${ROOT_URL}&q=${term},us`;
  const request = axios.get(url);
  return {
    type: FETCH_WEATHER,
    payload: request
  };
};
