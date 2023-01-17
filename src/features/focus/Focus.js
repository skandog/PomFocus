import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";
import { Button } from "../../components/Button";

export const Focus = ({ addSubject }) => {
  const [tempItem, setTempItem] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.titleContainer}>
        <Text style={styles.title}>What you working on?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            onChange={({ nativeEvent }) => {
              console.log(nativeEvent);

              setTempItem(nativeEvent.text);
            }}
            // onChange={({ nativeEvent }) => {
            //   console.log(nativeEvent);
            // }}
          />
          <Button
            title={"+"}
            size={50}
            onPress={() => {
              addSubject(tempItem);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  inputContainer: {
    paddingTop: 20,
    flexDirection: "row",
    // justifyContent: "center",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    marginRight: 16,
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
});

// flexDirection: "column",
// justifyContent: "center",
// alignItems: "center",
// backgroundColor: "#454545",
