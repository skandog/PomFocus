import React, { useState } from "react";
import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import { Focus } from "./src/features/focus/Focus";

export default function App() {
  const [focusSubject, setFocusSubject] = useState(null);
  console.log("focusSubject", focusSubject);
  return (
    <View style={styles.container}>
      <Focus addSubject={setFocusSubject} />
      <Text style={{ color: "#ffd", border: "1 solid #fff" }}>
        {focusSubject}
      </Text>

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
