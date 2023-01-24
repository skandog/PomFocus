import React, { useEffect } from "react";
import { View, StyleSheet, FlatList, Text, SafeAreaView } from "react-native";

import { spacingSizes, fontSizes } from "../../utils/sizes";
import { Button } from "../../components/Button";
import { colors } from "../../utils/colors";
import { useKeyboardVisible } from "../../hooks/useKeyboardVisible";

const HistoryItem = ({ item, index }) => {
  return <Text style={styles.historyItem(item.status)}>{item.subject}</Text>;
};

const CompletedItem = ({ item, index }) => {
  return (
    <View>
      {item.status === 1 ? (
        <Text style={styles.historyItem(item.status)}>{item.subject}</Text>
      ) : null}
    </View>
  );
};

const CancelledItem = ({ item, index }) => {
  return (
    <View>
      {item.status === 2 ? (
        <Text style={styles.historyItem(item.status)}>{item.subject}</Text>
      ) : null}
    </View>
  );
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
          <View style={styles.legend}>
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
            <View
              style={{
                flex: 1,
                width: "100%",
                flexDirection: "row",
                justifyContent: "space-around",
              }}
            >
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
                renderItem={CompletedItem}
              />
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
                renderItem={CancelledItem}
              />
            </View>
            <View style={styles.clearContainer}>
              <Button
                size={60}
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
    alignSelf: "center",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    width: "90%",
  },
  flatListContainer: {
    flex: 1,
    paddingTop: 10,
  },
  historyItem: (status) => ({
    color: status > 1 ? colors.incomplete : colors.complete,
    fontSize: fontSizes.md,
    textShadowColor: colors.white,
    textShadowRadius: 4,
    paddingTop: 3,
  }),
  legend: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-around",
    // paddingTop: 5,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.lg,
    alignSelf: "flex-start",
  },
});
