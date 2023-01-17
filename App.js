import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Focus } from "./src/features/focus/Focus";

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);

  return (
    <View style={styles.container}>
      <Focus />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#141",
    paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
    // alignItems: "center",
    // justifyContent: "center",
  },
});
