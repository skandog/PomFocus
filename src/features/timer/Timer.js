import React, { useState } from "react";
import { View, StyleSheet, Text, Vibration, Platform } from "react-native";
import { ProgressBar } from "react-native-paper";

import { colors } from "../../utils/colors";
import { spacingSizes } from "../../utils/sizes";
import { Countdown } from "../../components/Countdown";
import { Button } from "../../components/Button";
import { Timing } from "./Timing";

const DEFAULT_TIME = 0.05;

export const Timer = ({ focusSubject, onTimerEnd, onCancel }) => {
  const [minutes, setMinutes] = useState(DEFAULT_TIME);
  const [isStarted, setIsStarted] = useState(false);
  const [progress, setProgress] = useState(1);

  const onProgress = (progress) => {
    setProgress(progress);
  };

  const vibrate = () => {
    if (Platform.OS === "ios") {
      const interval = setInterval(() => {
        Vibration.vibrate();
        1000;
      });

      setTimeout(() => {
        clearInterval(interval), 2000;
      });
    } else {
      Vibration.vibrate(2000);
    }
  };

  const changeTime = (mins) => {
    setMinutes(mins);
    setProgress(1);
    setIsStarted(false);
  };

  const onEnd = () => {
    setProgress(1);
    setIsStarted(false);
    setMinutes(DEFAULT_TIME);
    vibrate();
    onTimerEnd();
  };

  return (
    <View style={styles.container}>
      <View style={styles.countdown}>
        <Countdown
          minutes={minutes}
          isPaused={!isStarted}
          onProgress={onProgress}
          onEnd={onEnd}
        />
      </View>
      <View style={styles.focusContainer}>
        <Text style={styles.title}>Current focus:</Text>
        <Text style={styles.task}>{focusSubject}</Text>
      </View>
      <View style={styles.progressContainer}>
        <ProgressBar
          progress={progress}
          color={colors.third}
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
      <View style={styles.clearSubject}>
        <Button
          title="Cancel"
          size={50}
          style={{ width: 75 }}
          onPress={() => onCancel()}
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
  },
  buttonContainerTiming: {
    flex: 0.3,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },
  clearSubject: {
    paddingBottom: 25,
    paddingRight: 25,
    alignItems: "flex-end",
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
