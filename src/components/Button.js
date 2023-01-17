import React from "react";
import { Text, TouchableOpacity, StyleSheet } from "react-native";

export const Button = ({
  style = {},
  textStyle = {},
  size = 125,
  ...props
}) => {
  return (
    <TouchableOpacity style={[styles(size).radius, style]}>
      <Text></Text>
    </TouchableOpacity>
  );
};

const styles = (style) =>
  StyleSheet.create({
    radius: {
      borderRadius: size / 2,
      width: size,
      height: size,
      alignItems: "center",
    },
  });
