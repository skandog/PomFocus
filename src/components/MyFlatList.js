/*
This compoent was designed to provide two columns if the number ofi tems 
exceeded a certain limit. However styling the flat list comonent 
proved a nightmare, so saving this for a future release.
*/

import { FlatList, Text, StyleSheet } from "react-native";
import React, { useState, useEffect } from "react";
import { colors } from "../utils/colors";
import { fontSizes } from "../utils/sizes";

const HistoryItem = ({ item, index, styles, numColumns }) => {
  return (
    <Text
      style={[styles.historyItem(item.status)]}
      itemContainerStyle={
        numColumns === 2 ? { marginRight: 5, marginLeft: 5 } : {}
      }
    >
      {item.subject}
    </Text>
  );
};

export const MyFlatList = ({ data, style, ...props }) => {
  const [numColumns, setNumColumns] = useState(1);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (data.length > 4) {
      setNumColumns(2);
      setKey(key + 1);
    } else {
      setNumColumns(1);
      setKey(key + 1);
    }
  }, [data]);

  return (
    <FlatList
      key={key}
      data={data}
      contentContainerStyle={{
        width: "100%",
        paddingTop: 20,
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
      }}
      numColumns={numColumns}
      renderItem={({ item }) => (
        <HistoryItem numColumns={numColumns} item={item} styles={styles} />
      )}
      keyExtractor={(item) => item.key.toString()}
    />
  );
};

const styles = StyleSheet.create({
  historyItem: (status) => ({
    color: status > 1 ? colors.incomplete : colors.complete,
    fontSize: fontSizes.md,
    textShadowColor: colors.white,
    textShadowRadius: 4,
    marginHorizontal: 20,
    // color: colors.white,
    // textShadowColor:
    //   status > 1 ? "rgba(143, 355, 355, 0.9)" : "rgba(355, 143, 355, 0.9)",
    // textShadowOffset: { width: -0.8, height: -0.8 },
  }),
});
