import React from "react";
import { Text, TouchableOpacity, StyleSheet, View } from "react-native";

import { colors } from "../utils/colors";

export const Button = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity
      style={[styles(size).radius, style]}
      onPress={props.onPress}
    >
      <View style={[styles(size).innerRadius, style]}>
        <Text style={[styles(size).text, textStyle]}>{props.title}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = (size) =>
  StyleSheet.create({
    innerRadius: {
      borderRadius: size / 6,
      width: size,
      height: size,
      alignItems: "center",
      justifyContent: "center",
      borderColor: colors.third,
      borderWidth: 0.6,
    },
    radius: {
      borderRadius: size / 6,
      width: size,
      height: size,
      alignItems: "center",
      justifyContent: "center",
      borderColor: colors.white,
      borderWidth: 3,
    },
    text: {
      color: colors.white,
      fontSize: size / 3.5,
      textShadowColor: colors.third,
      textShadowRadius: 8,
    },
  });
