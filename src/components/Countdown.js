import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";

import { colors } from "../utils/colors";
import { fontSizes, spacingSizes } from "../utils/sizes";

const minutesToMillis = (min) => min * 1000 * 60;

export const Countdown = ({ minutes = 20, isPaused }) => {
  const [millis, setMillis] = useState(minutesToMillis(minutes));

  const minute = Math.floor(millis / 1000 / 60) % 60;
  const second = Math.floor(millis / 1000) % 60;
  return (
    <View>
      <Text style={styles.text}>
        {minute}:{second}
      </Text>
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
