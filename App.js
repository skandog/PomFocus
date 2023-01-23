import React, { useState, useEffect } from "react";
// import { StatusBar } from "expo-status-bar";
import {
  StyleSheet,
  View,
  Platform,
  StatusBar,
  SafeAreaView,
  ImageBackground,
} from "react-native";
import AsyncStorage from "@react-native-async-storage/async-storage";

import { Focus } from "./src/features/focus/Focus";
import { colors } from "./src/utils/colors";
import { Timer } from "./src/features/timer/Timer";
import { FocusHistory } from "./src/features/focus/FocusHistory";
import { useKeyboardVisible } from "./src/hooks/useKeyboardVisible";

const STATUSES = {
  COMPLETE: 1,
  CANCELLED: 2,
};

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  const [focusHistory, setFocusHistory] = useState([]);

  const addFocusHistoryWithStatus = (subject, status) => {
    setFocusHistory([
      ...focusHistory,
      { key: String(focusHistory.length + 1), subject, status },
    ]);
  };

  const onClear = () => {
    setFocusHistory([]);
  };

  const saveFocusHistory = async () => {
    try {
      await AsyncStorage.setItem("focusHistory", JSON.stringify(focusHistory));
    } catch (e) {
      console.log("e :>> ", e);
    }
  };

  const loadFocusHistory = async () => {
    try {
      const history = await AsyncStorage.getItem("focusHistory");

      if (history && JSON.parse(history).length) {
        setFocusHistory(JSON.parse(history));
      }
    } catch (e) {
      console.log("e :>> ", e);
    }
  };

  useEffect(() => {
    loadFocusHistory();
  }, []);

  useEffect(() => {
    saveFocusHistory();
  }, [focusHistory]);


  return (
    <ImageBackground
      style={styles.background}
      resizeMethod="auto"
      resizeMode="cover"
      source={require("./assets/saturate_space_background.jpg")}
    >
      <View style={styles.container}>
        {focusSubject ? (
          <Timer
            focusSubject={focusSubject}
            onTimerEnd={() => {
              addFocusHistoryWithStatus(focusSubject, STATUSES.COMPLETE);
              setFocusSubject(null);
            }}
            onCancel={() => {
              addFocusHistoryWithStatus(focusSubject, STATUSES.CANCELLED);
              setFocusSubject(null);
            }}
          />
        ) : (
          <View style={styles.focusContainer}>
            <Focus addSubject={setFocusSubject} />

            <FocusHistory
              // focusHistory={
              //   useKeyboardVisible() && focusHistory.length > 3
              //     ? focusHistory.slice(0, 4)
              //     : focusHistory
              // }
              focusHistory={focusHistory}
              onClear={onClear}
            />
          </View>
        )}
      </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    height: "100%",
    justifyContent: "flex-end",
    alignItems: "stretch",
  },
  container: {
    display: "flex",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    flex: 1,
  },
  focusContainer: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "flex-start",
  },
});
