import React from "react";
import { View, Text, StyleSheet } from "react-native";

const State = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pay Challan</Text>
      <Text style={styles.description}>
        This is a the Pay Challan page where you can make payments.
      </Text>
    </View>
  );
};

export default State; // Ensure this is present

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  
  title: {
    fontSize: 24,
    fontWeight: "bold",
  },
  description: {
    fontSize: 16,
    marginTop: 10,
    color: "#555",
  },
});
