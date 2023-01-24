import React, { useEffect } from "react";
import { View, StyleSheet, FlatList, Text, SafeAreaView } from "react-native";

import { spacingSizes, fontSizes } from "../../utils/sizes";
import { Button } from "../../components/Button";
import { colors } from "../../utils/colors";
import { useKeyboardVisible } from "../../hooks/useKeyboardVisible";

const HistoryItem = ({ item, index }) => {
  return <Text style={styles.historyItem(item.status)}>{item.subject}</Text>;
};

export const FocusHistory = ({ focusHistory, onClear }) => {
  const clearHistory = () => {
    onClear();
  };

  console.log("focusHistory :>> ", focusHistory);

  return (
    <View style={styles.container}>
      {!!focusHistory.length && (
        <>
          <Text style={styles.title}>Items we've focussed on recently:</Text>
          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-around",
              paddingTop: 5,
            }}
          >
            <Text
              style={[
                styles.historyItem(1),
                { textDecorationLine: "underline" },
              ]}
            >
              Completed
            </Text>
            <Text
              style={[
                styles.historyItem(2),
                { textDecorationLine: "underline" },
              ]}
            >
              Cancelled
            </Text>
          </View>
          <View style={{ flex: 1 }}>
            <FlatList
              style={styles.flatListContainer}
              contentContainerStyle={{
                flex: 1,
                alignItems: "center",
                justifyContent: "flex-start",
              }}
              keyExtractor={(item) => item.key}
              data={
                useKeyboardVisible() ? focusHistory.slice(0, 4) : focusHistory
              }
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
          </View>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  clearContainer: {
    flex: 0,
    padding: spacingSizes.md,
    alignSelf: "flex-start",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
    // backgroundColor: "white",
  },
  flatListContainer: {
    flex: 1,
    paddingTop: 10,
  },
  historyItem: (status) => ({
    color: status > 1 ? colors.incomplete : colors.complete,
    // color: colors.white,
    fontSize: fontSizes.md,
    textShadowColor: colors.white,

    // textShadowColor:
    //   status > 1 ? "rgba(143, 355, 355, 0.9)" : "rgba(355, 143, 355, 0.9)",
    // textShadowOffset: { width: -0.8, height: -0.8 },
    textShadowRadius: 4,
  }),
  title: {
    color: colors.white,
    fontSize: fontSizes.lg,
    alignSelf: "flex-start",
  },
});
