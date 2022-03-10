import React from 'react';
import { StyleSheet } from 'react-native';

import useWeather, { WeatherData } from '../hooks/useWeather';
import { Text, View } from './Themed';

const styles = StyleSheet.create({
  getStartedContainer: {
    alignItems: 'center',
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
    textAlign: 'center',
  },
  helpContainer: {
    marginTop: 15,
    marginHorizontal: 20,
    alignItems: 'center',
  },
  helpLink: {
    paddingVertical: 15,
  },
  helpLinkText: {
    textAlign: 'center',
  },
});

type WeatherDisplayProps = {
  weatherData: WeatherData;
};

const WeatherDisplay = ({weatherData}: WeatherDisplayProps) => {
  return <View>
    <Text style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
      {weatherData.current_condition[0].weatherDesc[0].value}
    </Text>
    <Text style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
      Temp: {weatherData.current_condition[0].temp_F}°F (Feels like {weatherData.current_condition[0].FeelsLikeF}°F)
    </Text>
    <Text style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
      Wind: {weatherData.current_condition[0].windspeedMiles} mph {weatherData.current_condition[0].winddir16Point}
    </Text>
    <Text style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
      Humidity: {weatherData.current_condition[0].humidity}%
    </Text>
    <Text style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
      Visibility: {weatherData.current_condition[0].visibility} miles
    </Text>
  </View>;
}

const WeatherInfo = function() {
  const region = "";
  const { weather, loading } = useWeather({region});

  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text
          style={styles.getStartedText}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)">
          Here is the weather info for: {region === "" ? "Your Location" : region}
        </Text>

        {loading && <Text>Loading...</Text>}

        {weather && <WeatherDisplay weatherData={weather} />}
      </View>
    </View>
  );
}

export default WeatherInfo;