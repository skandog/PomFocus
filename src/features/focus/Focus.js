import React, { useState } from "react";
import { Text, View, StyleSheet, Alert, ImageBackground } from "react-native";
import { TextInput } from "react-native-paper";

import { Button } from "../../components/Button";
import { fontSizes, spacingSizes } from "../../utils/sizes";
import { colors } from "../../utils/colors";

export const Focus = ({ addSubject }) => {
  const [subject, setSubject] = useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.innerContainer}>
        <Text style={styles.title}>What you working on?</Text>
        <View style={styles.inputContainer}>
          <TextInput
            style={styles.textInput}
            onChange={({ nativeEvent }) => {
              // console.log(nativeEvent);

              setSubject(nativeEvent.text);
            }}
            onSubmitEditing={() => {
              addSubject(subject);
            }}
          />
          <Button
            title={"+"}
            size={50}
            onPress={() => {
              if (!subject) {
                Alert.alert(
                  "Error",
                  "Please enter an activity you would like to focus on"
                );
                return;
              }
              addSubject(subject);
            }}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 0.5,
    width: "90%",
    alignItems: "center",
    // backgroundColor: "white",
  },
  innerContainer: {
    flex: 1,
    // padding: spacingSizes.md,
    justifyContent: "center",
  },
  inputContainer: {
    paddingTop: spacingSizes.md,
    width: "100%",
    flexDirection: "row",
    alignItems: "center",
  },
  textInput: {
    flex: 1,
    marginRight: spacingSizes.md,
  },
  title: {
    color: colors.white,
    fontWeight: "bold",
    fontSize: fontSizes.lg,
    justifyContent: "center",
  },
});
