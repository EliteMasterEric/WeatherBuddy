import React from 'react';
import { ColorSchemeName } from 'react-native';
import {
  Provider,
  TypedUseSelectorHook,
  useDispatch,
  useSelector,
} from "react-redux";
import { TemperatureUnit } from './slices/OptionsSlice';
import { RootState, AppDispatch, store } from "./Store";

export const useAppDispatch = () => useDispatch<AppDispatch>();
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useAppColorScheme:() => ColorSchemeName = () => useAppSelector(
  (state) => state.options.colorScheme
);

export const useAppTemperatureUnit:() => TemperatureUnit = () => useAppSelector(
  (state) => state.options.temperatureUnit
);


type StoreProviderProps = {
  children: React.ReactNode;
};
export const StoreProvider = ({ children }: StoreProviderProps) => {
  return <Provider store={store}>{children}</Provider>;
};
