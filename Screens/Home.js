import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button } from "react-native";
import HeaderComp from "../components/HeaderComp";

const Home = (props) => {
  return (
    <View style={styles.app}>
      <StatusBar style="auto" />
    </View>
  );
};

const styles = StyleSheet.create({
  app: {
    flex: 1,
    flexDirection: "column",
  },
  title: {
    flex: 1,
    alignItems: "center",
  },
  container: {
    flex: 8,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    padding: 10,
  },
});

export default Home;
