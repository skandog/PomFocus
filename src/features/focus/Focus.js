import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

export const Focus = () => {
  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What you working on?</Text>
        <View style={styles.inputContainer}>
          <TextInput />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  title: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 26,
  },
  titleContainer: {
    flex: 0.5,
    padding: 18,
    justifyContent: "center",
  },
  inputContainer: {
    paddingTop: 20,
  },
});

// flexDirection: "column",
// justifyContent: "center",
// alignItems: "center",
// backgroundColor: "#454545",
