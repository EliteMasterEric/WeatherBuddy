import * as React from "react";
import { useAppDispatch, useAppSelector } from "../state/Hooks";
import { RefreshStatus, setRefresh } from "../state/slices/StatusSlice";

enum WeatherType {
  Cloudy = "Cloudy",
  Fog = "Fog",
  HeavyRain = "HeavyRain",
  HeavyShowers = "HeavyShowers",
  HeavySnow = "HeavySnow",
  HeavySnowShowers = "HeavySnowShowers",
  LightRain = "LightRain",
  LightShowers = "LightShowers",
  LightSleet = "LightSleet",
  LightSleetShowers = "LightSleetShowers",
  LightSnow = "LightSnow",
  LightSnowShowers = "LightSnowShowers",
  PartlyCloudy = "PartlyCloudy",
  Sunny = "Sunny",
  ThunderyHeavyRain = "ThunderyHeavyRain",
  ThunderyShowers = "ThunderyShowers",
  ThunderySnowShowers = "ThunderySnowShowers",
  VeryCloudy = "VeryCloudy",
}

export const weatherTypeCodeMap: { [key: string]: WeatherType } = {
  113: WeatherType.Sunny,
  116: WeatherType.PartlyCloudy,
  119: WeatherType.Cloudy,
  122: WeatherType.VeryCloudy,
  143: WeatherType.Fog,
  176: WeatherType.LightShowers,
  179: WeatherType.LightSleetShowers,
  182: WeatherType.LightSleet,
  185: WeatherType.LightSleet,
  200: WeatherType.ThunderyShowers,
  227: WeatherType.LightSnow,
  230: WeatherType.HeavySnow,
  248: WeatherType.Fog,
  260: WeatherType.Fog,
  263: WeatherType.LightShowers,
  266: WeatherType.LightRain,
  281: WeatherType.LightSleet,
  284: WeatherType.LightSleet,
  293: WeatherType.LightRain,
  296: WeatherType.LightRain,
  299: WeatherType.HeavyShowers,
  302: WeatherType.HeavyRain,
  305: WeatherType.HeavyShowers,
  308: WeatherType.HeavyRain,
  311: WeatherType.LightSleet,
  314: WeatherType.LightSleet,
  317: WeatherType.LightSleet,
  320: WeatherType.LightSnow,
  323: WeatherType.LightSnowShowers,
  326: WeatherType.LightSnowShowers,
  329: WeatherType.HeavySnow,
  332: WeatherType.HeavySnow,
  335: WeatherType.HeavySnowShowers,
  338: WeatherType.HeavySnow,
  350: WeatherType.LightSleet,
  353: WeatherType.LightShowers,
  356: WeatherType.HeavyShowers,
  359: WeatherType.HeavyRain,
  362: WeatherType.LightSleetShowers,
  365: WeatherType.LightSleetShowers,
  368: WeatherType.LightSnowShowers,
  371: WeatherType.HeavySnowShowers,
  374: WeatherType.LightSleetShowers,
  377: WeatherType.LightSleet,
  386: WeatherType.ThunderyShowers,
  389: WeatherType.ThunderyHeavyRain,
  392: WeatherType.ThunderySnowShowers,
  395: WeatherType.HeavySnowShowers,
};

export const weatherTypeEmojiMap: { [key: string]: string } = {
  Unknown: "✨",
  Cloudy: "☁️",
  Fog: "🌫",
  HeavyRain: "🌧",
  HeavyShowers: "🌧",
  HeavySnow: "❄️",
  HeavySnowShowers: "❄️",
  LightRain: "🌦",
  LightShowers: "🌦",
  LightSleet: "🌧",
  LightSleetShowers: "🌧",
  LightSnow: "🌨",
  LightSnowShowers: "🌨",
  PartlyCloudy: "⛅️",
  Sunny: "☀️",
  ThunderyHeavyRain: "🌩",
  ThunderyShowers: "⛈",
  ThunderySnowShowers: "⛈",
  VeryCloudy: "☁️",
};

export const getWeatherEmoji = (weatherCode: number): string => { 
  const weatherType = weatherTypeCodeMap[weatherCode];
  return weatherTypeEmojiMap[weatherType];
}

type WeatherDataValue = [
  {
    value: string;
  }
];

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

const WEATHER_URL_BASE = "http://wttr.in/";
const WEATHER_URL_PARAMS = "?format=j1";

const useWeather = ({ region }: WeatherProps): WeatherState => {
  const [weather, setWeather] = React.useState<WeatherData | null>(null);

  const refreshStatus = useAppSelector(state => state.status.refresh);
  const dispatch = useAppDispatch();

  React.useEffect(() => {
    const fetchWeather = async () => {
      const response = await fetch(
        `${WEATHER_URL_BASE}${region}${WEATHER_URL_PARAMS}`
      );
      const data: WeatherData = await response.json();
      setWeather(data);
      dispatch(setRefresh(RefreshStatus.Idle));
    };

    if (refreshStatus == RefreshStatus.Trigger) {
      setWeather(null);
      dispatch(setRefresh(RefreshStatus.Loading));
    }

    if (weather == null) fetchWeather();
  });

  return {
    loading: weather === null,
    weather,
  };
};

export default useWeather;
