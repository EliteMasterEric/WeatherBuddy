import * as React from "react";
import { StyleSheet } from "react-native";
import OptionsInfo from "../components/OptionsInfo";

import { Text, View } from "../components/Themed";

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

const OptionsScreen = function () {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Options</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <OptionsInfo />
    </View>
  );
};

export default OptionsScreen;
