import React from 'react';
import { StyleSheet } from 'react-native';
import { Picker } from '@react-native-picker/picker'
import { Text, View } from './Themed';
import { useAppDispatch, useAppSelector } from "../state/Hooks";
import WeatherInfo from "./WeatherInfo";
import { setColorScheme, setTemperatureUnit } from '../state/slices/OptionsSlice';

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
  picker: {
    // fontFamily: '"Segoe UI", Roboto, Helvetica, Arial, sans-serif',
    width: 150,
    height: 50,
    backgroundColor: '#ddd',
    borderRadius: 5,
  }
});

const OptionsInfo = function() {
  const currentOptions = useAppSelector((state) => state.options);
  const dispatch = useAppDispatch();

  return (
    <View>
      <View style={styles.getStartedContainer}>
        <Text style={styles.getStartedText}>
          Temperature Unit
        </Text>
        <Picker
          selectedValue={currentOptions.temperatureUnit}
          style={styles.picker}
          onValueChange={(itemValue, _itemIndex) => {
            dispatch(setTemperatureUnit(itemValue));
          }}
        >
          <Picker.Item label="Fahrenheit" value="Fahrenheit" />
          <Picker.Item label="Celsius" value="Celsius" />
        </Picker>
        <Text style={styles.getStartedText}>
          App Theme
        </Text>
        <Picker
          selectedValue={currentOptions.colorScheme}
          style={styles.picker}
          onValueChange={(itemValue, _itemIndex) => {
            dispatch(setColorScheme(itemValue));
          }}
        >
          <Picker.Item label="Dark" value="dark" />
          <Picker.Item label="Light" value="light" />
        </Picker>
      </View>
    </View>
  );
}

export default OptionsInfo;