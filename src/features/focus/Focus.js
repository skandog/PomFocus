import React, { useState } from "react";
import { Text, View, StyleSheet } from "react-native";
import { TextInput } from "react-native-paper";

import { Button } from "../../components/Button";
import { fontSizes, spacingSizes } from "../../utils/sizes";
import { colors } from "../../utils/colors";

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
            onSubmitEditing={() => {
              addSubject(tempItem);
            }}
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
    paddingTop: spacingSizes.md,
    flexDirection: "row",
    // justifyContent: "center",
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
  },
  titleContainer: {
    flex: 0.5,
    padding: spacingSizes.md,
    justifyContent: "center",
  },
});
