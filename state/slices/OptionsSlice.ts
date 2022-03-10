import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ColorSchemeName } from "react-native";

export enum TemperatureUnit {
  Celsius = "Celsius",
  Fahrenheit = "Fahrenheit",
}

export interface OptionsState {
  temperatureUnit: TemperatureUnit;
  colorScheme: ColorSchemeName;
}

const initialState: OptionsState = {
  temperatureUnit: TemperatureUnit.Fahrenheit,
  colorScheme: 'dark',
};

export const optionsSlice = createSlice({
  name: "options",
  initialState,
  reducers: {
    setTemperatureUnit: (state, action: PayloadAction<TemperatureUnit>) => {
      state.temperatureUnit = action.payload;
    },
    setColorScheme: (state, action: PayloadAction<ColorSchemeName>) => {
      state.colorScheme = action.payload;
    },
  },
});

export const { setTemperatureUnit, setColorScheme } = optionsSlice.actions;

export default optionsSlice.reducer;
