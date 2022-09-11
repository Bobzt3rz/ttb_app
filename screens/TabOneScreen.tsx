import React, { useEffect, useState } from "react";
import { StyleSheet, FlatList } from "react-native";

import EditScreenInfo from "../components/EditScreenInfo";
import { NewsComponent } from "../components/News";
import { Selector } from "../components/Selector";
import { Text, View } from "../components/Themed";
import { RootTabScreenProps, ComponentDataType } from "../types";

export default function TabOneScreen({
  navigation,
}: RootTabScreenProps<"TabOne">) {
  const [dataArray, setDataArray] = useState<ComponentDataType[]>();

  useEffect(() => {
    const dataArray = require("../data/data.json");
    console.log(dataArray);
    setDataArray(dataArray);
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tab One</Text>
      {/* <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="/screens/TabOneScreen.tsx" /> */}
      <FlatList
        data={dataArray}
        renderItem={Selector}
        keyExtractor={(item) => item._id}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: "80%",
  },
});
