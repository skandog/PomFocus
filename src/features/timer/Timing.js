import React from "react";
import { View, StyleSheet } from "react-native";
import { Button } from "../../components/Button";

export const Timing = ({ onChangeTime, mins }) => {
  const changeMins = () => {
    onChangeTime(mins);
  };

  return (
    <View style={styles.timingButton}>
      <Button
        size={60}
        title={mins}
        onPress={() => {
          onChangeTime(mins);
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  timingButton: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});
