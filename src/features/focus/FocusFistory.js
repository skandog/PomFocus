import React from "react";
import { View, StyleSheet, FlatList, Text, SafeAreaView } from "react-native";

import { spacingSizes, fontSizes } from "../../utils/sizes";
import { Button } from "../../components/Button";

const HistoryItem = ({ item, index }) => {
  return <Text>{JSON.stringify(item)}</Text>;
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  return (
    <SafeAreaView style={{ flex: 0.5 }}>
      <Text>Items we've focussed on so far</Text>
      {!!focusHistory.length && (
        <FlatList
          style={{ flex: 1 }}
          contentContainerStyle={{ flex: 1, alignItems: "center" }}
          data={focusHistory}
          renderItem={HistoryItem}
        />
      )}
    </SafeAreaView>
  );
};
