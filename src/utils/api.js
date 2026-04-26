import { API_KEY, BASE_URL } from './constants';

const handleResponse = async (response) => {
  if (!response.ok) {
    if (response.status === 401) {
      throw new Error('Invalid API Key. Please check your OpenWeatherMap API key.');
    }
    if (response.status === 404) {
      throw new Error('City not found. Please check the spelling.');
    }
    throw new Error('An error occurred while fetching weather data.');
  }
  return response.json();
};

export const fetchCurrentWeather = async (city) => {
  const response = await fetch(`${BASE_URL}/weather?q=${city}&appid=${API_KEY}&units=metric`);
  return handleResponse(response);
};

export const fetchForecast = async (city) => {
  const response = await fetch(`${BASE_URL}/forecast?q=${city}&appid=${API_KEY}&units=metric`);
  return handleResponse(response);
};
