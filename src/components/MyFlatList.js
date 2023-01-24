import { FlatList, Text } from "react-native";
import React, { useState, useEffect } from "react";

const HistoryItem = ({ item, index, styles }) => {
  return <Text style={styles}>{item.subject}</Text>;
};

export const MyFlatList = ({ data, styles, ...props }) => {
  const [numColumns, setNumColumns] = useState(1);

  useEffect(() => {
    if (data.length > 4) {
      setNumColumns(2);
    } else {
      setNumColumns(1);
    }
  }, [data]);

  return (
    <FlatList
      data={data}
      numColumns={numColumns}
      renderItem={({ item }) => <HistoryItem item={item} styles={styles} />}
      keyExtractor={(item) => item.id}
    />
  );
};
