import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { colors } from "../utils/colors";
import { fontSizes, spacingSizes } from "../utils/sizes";

const minutesToMillis = (min) => min * 1000 * 60;

export const Countdown = ({ minutes = 20, isPaused }) => {
  return (
    <View>
      <Text style={styles.text}>Timer here</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  text: {
    fontSize: fontSizes.xl,
    fontWeight: "bold",
    color: colors.white,
    padding: spacingSizes.lg,
    backgroundColor: "rgba(141, 141, 154, 0.4)",
  },
});
