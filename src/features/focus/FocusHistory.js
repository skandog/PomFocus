import React, { useEffect } from "react";
import { View, StyleSheet, FlatList, Text, SafeAreaView } from "react-native";

import { spacingSizes, fontSizes } from "../../utils/sizes";
import { Button } from "../../components/Button";
import { colors } from "../../utils/colors";

const HistoryItem = ({ item, index }) => {
  return <Text style={styles.historyItem(item.status)}>{item.subject}</Text>;
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  return (
    <SafeAreaView style={{ flex: 0.5, alignItems: "center" }}>
      {!!focusHistory.length && (
        <>
          <Text style={styles.title}>Items we've focussed on so far:</Text>

          <FlatList
            style={{ flex: 1 }}
            contentContainerStyle={{ flex: 1, alignItems: "center" }}
            data={focusHistory}
            renderItem={HistoryItem}
          />
          <View style={styles.clearContainer}>
            <Button
              size={50}
              title="Clear"
              onPress={() => {
                clearHistory();
              }}
            />
          </View>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  clearContainer: {
    flex: 1,
    padding: spacingSizes.md,
  },
  historyItem: (status) => ({
    color: status > 1 ? colors.red : colors.green,
    fontSize: fontSizes.md,
    textShadowColor: "rgba(355, 355, 355, 0.1)",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  }),
  title: {
    color: colors.white,
    fontSize: fontSizes.lg,
  },
});
