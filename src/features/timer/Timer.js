import Reactm, { useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { ProgressBar } from "react-native-paper";
import { useKeepAwake } from "expo-keep-awake";

import { colors } from "../../utils/colors";
import { spacingSizes } from "../../utils/sizes";
import { Countdown } from "../../components/Countdown";
import { Button } from "../../components/Button";
import { Timing } from "./Timing";

export const Timer = ({ focusSubject }) => {
  const [minutes, setMinutes] = useState(20);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);

  useKeepAwake();

  const changeTime = (mins) => {
    setMinutes(mins);
    setProgress(1);
    setIsStarted(false);
  };

  const onProgress = (progress) => {
    setProgress(progress);
  };
  console.log(minutes);

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={onProgress}
        />
      </View>
      <View style={styles.focusContainer}>
        <Text style={styles.title}>Current focus:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <View style={styles.progressContainer}>
        <ProgressBar
          progress={progress}
          color={colors.secondary}
          style={styles.progress}
        />
      </View>
      <View style={styles.buttonContainerTiming}>
        <Timing onChangeTime={changeTime} mins={20} />
        <Timing onChangeTime={changeTime} mins={25} />
        <Timing onChangeTime={changeTime} mins={30} />
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
  buttonContainerTiming: {
    flex: 0.3,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
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
  progress: {
    height: 20,
  },
  progressContainer: {
    paddingTop: spacingSizes.md,
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
