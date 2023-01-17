import Reactm, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";

import { colors } from "../../utils/colors";
import { spacingSizes } from "../../utils/sizes";
import { Countdown } from "../../components/Countdown";
import { Button } from "../../components/Button";

export const Timer = ({ focusSubject }) => {
  const [isStarted, setIsStarted] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown isPaused={!isStarted} />
      </View>
      <View style={styles.focusContainer}>
        <Text style={styles.title}>Current focus:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <Button
          title={!isStarted ? "Start" : "Pause"}
          size={100}
          onPress={() => {
            setIsStarted(!isStarted);
          }}
          textStyle={{}}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  buttonContainer: {
    flex: 0.3,
    padding: spacingSizes.md,
    justifyContent: "center",
    alignItems: "center",
    // marginTop: spacingSizes.md,
  },
  container: {
    flex: 1,
  },
  countdown: {
    flex: 0.5,
    alignItems: "center",
    justifyContent: "center",
  },
  focusContainer: {
    paddingTop: spacingSizes.xxxl,
  },
  task: {
    color: colors.white,
    textAlign: "center",
    fontWeight: "bold",
  },
  title: {
    color: colors.white,
    textAlign: "center",
  },
});
