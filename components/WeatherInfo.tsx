import React from "react";
import { StyleSheet } from "react-native";

import useWeather, { getWeatherEmoji, WeatherData } from "../hooks/useWeather";
import { useAppTemperatureUnit } from "../state/Hooks";
import { TemperatureUnit } from "../state/slices/OptionsSlice";
import { Text, View } from "./Themed";

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: "center",
    marginHorizontal: 50,
  },
  homeScreenFilename: {
    marginVertical: 7,
  },
  codeHighlightContainer: {
    borderRadius: 3,
    paddingHorizontal: 4,
  },
  getStartedText: {
    fontSize: 17,
    lineHeight: 24,
    textAlign: "center",
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: "center",
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: "center",
  },
});

type WeatherDisplayProps = {
  weatherData: WeatherData;
};

const WeatherDisplay = ({ weatherData }: WeatherDisplayProps) => {
  const temperatureUnit: TemperatureUnit = useAppTemperatureUnit();

  let tempString = "UNKNOWN";

  switch (temperatureUnit) {
    case TemperatureUnit.Celsius:
      tempString = `${weatherData.current_condition[0].temp_C}°C (Feels like ${weatherData.current_condition[0].FeelsLikeC}°C)`;
      break;
    case TemperatureUnit.Fahrenheit:
      tempString = `${weatherData.current_condition[0].temp_F}°F (Feels like ${weatherData.current_condition[0].FeelsLikeF}°F)`;
      break;
  }

  const weatherEmoji: string = getWeatherEmoji(
    weatherData.current_condition[0].weatherCode
  );

  return (
    <View>
      <Text
        style={styles.getStartedText}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        Condition: {weatherEmoji}{" "}
        {weatherData.current_condition[0].weatherDesc[0].value}
      </Text>
      <Text
        style={styles.getStartedText}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        Temp: {tempString}
      </Text>
      <Text
        style={styles.getStartedText}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        Wind: {weatherData.current_condition[0].windspeedMiles} mph{" "}
        {weatherData.current_condition[0].winddir16Point}
      </Text>
      <Text
        style={styles.getStartedText}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        Humidity: {weatherData.current_condition[0].humidity}%
      </Text>
      <Text
        style={styles.getStartedText}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        Visibility: {weatherData.current_condition[0].visibility} miles
      </Text>
    </View>
  );
};

type RegionDisplayProps = {
  region: string;
  weatherData: WeatherData | null;
};

const RegionDisplay = ({ region, weatherData }: RegionDisplayProps) => {
  const weatherDataRegion =
    weatherData == null
      ? region === ""
        ? "Your Location"
        : region
      : `${weatherData.nearest_area[0].areaName[0].value}, ${weatherData.nearest_area[0].region[0].value}`;

  return (
    <>
      <Text
        style={styles.getStartedText}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        Here is the weather info for:
      </Text>
      <Text
        style={styles.getStartedText}
        lightColor="rgba(0,0,0,0.8)"
        darkColor="rgba(255,255,255,0.8)"
      >
        {weatherDataRegion}
      </Text>
    </>
  );
};

const WeatherInfo = function () {
  const region = "";
  const { weather, loading } = useWeather({ region });

  return (
    <View>
      <View style={styles.getStartedContainer}>
        <RegionDisplay region={region} weatherData={weather} />

        {loading && <Text>Loading...</Text>}

        {weather && <WeatherDisplay weatherData={weather} />}
      </View>
    </View>
  );
};

export default WeatherInfo;
