import * as React from "react";
import { StyleSheet, ScrollView, RefreshControl } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { Text, View } from "../components/Themed";
import WeatherInfo from "../components/WeatherInfo";
import { useAppDispatch, useAppSelector } from "../state/Hooks";
import { RefreshStatus, setRefresh } from "../state/slices/StatusSlice";
import { RootTabScreenProps } from "../types";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});

const WeatherScreen = function ({
  navigation,
}: RootTabScreenProps<"CurrentWeather">) {
  
  const refreshStatus = useAppSelector(state => state.status.refresh);
  const dispatch = useAppDispatch();
  
  const onRefresh = React.useCallback(() => {
    dispatch(setRefresh(RefreshStatus.Trigger));
  }, []);

  console.log(refreshStatus);

  return (
    <ScrollView contentContainerStyle={styles.container}
      refreshControl={
        <RefreshControl
          refreshing={refreshStatus != RefreshStatus.Idle}
          onRefresh={onRefresh}/>
      }
      >
      <Text style={styles.title}>Current Weather</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <WeatherInfo />
    </ScrollView>
  );
};

export default WeatherScreen;
