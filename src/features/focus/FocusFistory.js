import React from "react";
import { View, StyleSheet, FlatList, Text, SafeAreaView } from "react-native";

import { spacingSizes, fontSizes } from "../../utils/sizes";
import { Button } from "../../components/Button";

export const FocusHistory = ({ FocusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  return (
    <SafeAreaView>
      <Text>Items we've focussed on so far</Text>{" "}
    </SafeAreaView>
  );
};
