import * as React from 'react';

type WeatherDataValue = [{
  value: string;
}];

type WeatherDataCurrentCondition = {
  cloudcover: number;
  FeelsLikeC: number;
  FeelsLikeF: number;
  humidity: number;
  LocalObsDateTime: string;
  observation_time: string;
  precipInches: number;
  precipMM: number;
  pressure: number;
  pressureInches: number;
  temp_C: number;
  temp_F: number;
  uvIndex: number;
  visibility: number;
  visibilityMiles: number;
  weatherCode: number;
  weatherDesc: WeatherDataValue;
  weatherIconUrl: WeatherDataValue;
  winddir16Point: string;
  winddirDegree: number;
  windspeedKmph: number;
  windspeedMiles: number;
};

type WeatherDataNearestArea = {
  areaName: WeatherDataValue;
  country: WeatherDataValue;
  latitude: number;
  longitude: number;
  population: number;
  region: WeatherDataValue;
  weatherUrl: WeatherDataValue;
};

type WeatherDataRequest = {
  query: string;
  type: string;
};

type WeatherDataAstronomy = {
  moonrise: string;
  moonset: string;
  sunrise: string;
  sunset: string;
  moon_phase: string;
  moon_illumination: number;
};

type WeatherDataHourly = {
  DewPointC: number;
  DewPointF: number;
  FeelsLikeC: number;
  FeelsLikeF: number;
  HeatIndexC: number;
  HeatIndexF: number;
  WindChillC: number;
  WindChillF: number;
  WindGustKmph: number;
  WindGustMiles: number;
  chanceoffog: number;
  chanceoffrost: number;
  chanceofhightemp: number;
  chanceofovercast: number;
  chanceofrain: number;
  chanceofremdry: number;
  chanceofsnow: number;
  chanceofsunshine: number;
  chanceofthunder: number;
  chanceofwindy: number;
  cloudcover: number;
  humidity: number;
  precipInches: number;
  precipMM: number;
  pressure: number;
  pressureInches: number;
  tempC: number;
  tempF: number;
  time: number;
  uvIndex: number;
  visibility: number;
  visibilityMiles: number;
  weatherCode: number;
  winddir16Point: string;
  winddirDegree: number;
  windspeedKmph: number;
  windspeedMiles: number;
  weatherDesc: WeatherDataValue;
  weatherIconUrl: WeatherDataValue;
};

type WeatherDataWeather = {
  astronomy: WeatherDataAstronomy[];
  avgtempC: number;
  avgtempF: number;
  date: string;
  hourly: WeatherDataHourly[];
  maxtempC: number;
  maxtempF: number;
  mintempC: number;
  mintempF: number;
  sunHour: number;
  totalSnow_cm: number;
  uvIndex: number;
};

export type WeatherData = {
  current_condition: WeatherDataCurrentCondition[];
  nearest_area: WeatherDataNearestArea[];
  request: WeatherDataRequest[];
  weather: WeatherDataWeather[];
};

type WeatherProps = {
  region: string;
};

type WeatherState = {
  loading: boolean;
  weather: WeatherData | null;
};

const WEATHER_URL_BASE = 'http://wttr.in/';
const WEATHER_URL_PARAMS = '?format=j1';

const useWeather = ({region}:WeatherProps):WeatherState => {
  const [weather, setWeather] = React.useState<WeatherData | null>(null);

  React.useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(`${WEATHER_URL_BASE}${region}${WEATHER_URL_PARAMS}`);
      const data:WeatherData = await response.json();
      setWeather(data);
    };

    fetchWeather();
  });

  return {
    loading: weather === null,
    weather,
  };
};

export default useWeather;
