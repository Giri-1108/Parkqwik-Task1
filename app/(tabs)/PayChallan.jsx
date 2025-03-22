import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons"; // Importing Icons

const PayChallan = () => {
  const router = useRouter();

  return (
    <View style={styles.container}>
      {/* Sticky Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.push("/")}
          style={styles.closeButton}
        >
          <Text style={styles.closeText}>←</Text> {/* Left Arrow */}
        </TouchableOpacity>
        <Text style={styles.title}>Pay Challan</Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.fastagCard}>
          <Text style={styles.fastagTitle}>Check Challan</Text>
          <Text style={styles.cashbackText}>
            Enter your Vehicle number and check your challan
          </Text>

          {/* Input and Button in the Same Line */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Vehicle Number"
              placeholderTextColor="#1a9e76"
            />
            <TouchableOpacity style={styles.rechargeBtn}>
              <Text style={styles.rechargeText}>Check</Text>
            </TouchableOpacity>
          </View>
        </View>

        {/* Steps Section */}
        <View style={styles.card}>
          <Text style={styles.icontitle}>How it works?</Text>
          {/* Steps Container */}
          <View style={styles.stepsContainer}>
            {/* Step 1 */}
            <View style={styles.step}>
              <View
                style={{
                  flexDirection: "row",
                  alignItems: "center",
                  backgroundColor: "white",
                  borderColor: "#1a9e76",
                  borderWidth: 3,
                  padding: 5,
                  borderRadius: 8,
                }}
              >
                <Text
                  style={{
                    color: "#1a9e76",
                    fontWeight: "bold",
                    marginLeft: 5,
                  }}
                >
                  XYZ-123
                </Text>
              </View>
              <Text style={styles.stepText}>Step 1</Text>
              <Text style={styles.description}>Enter your vehicle number</Text>
            </View>

            {/* Arrow */}
            <MaterialIcons name="arrow-forward" size={24} color="#1a9e76" />

            {/* Step 2 */}
            <View style={styles.step}>
              <View style={{ position: "relative", width: 50, height: 50 }}>
                {/* Card Icon */}
                <MaterialIcons name="description" size={40} color="#1a9e76" />
              </View>
              <Text style={styles.stepText}>Step 2</Text>
              <Text style={styles.description}>Check Your Challans</Text>
            </View>

            {/* Arrow */}
            <MaterialIcons name="arrow-forward" size={24} color="#1a9e76" />

            {/* Step 3 */}
            <View style={styles.step}>
              <View style={{ position: "relative", width: 50, height: 50 }}>
                {/* Card Icon */}
                <MaterialIcons name="credit-card" size={40} color="#1a9e76" />

                {/* Coin Icon Positioned on Top */}
                <View style={{ position: "absolute", right: -5, bottom: -5 }}>
                  <MaterialIcons
                    name="attach-money"
                    size={25}
                    color="#1a9e76"
                  />
                </View>
              </View>
              <Text style={styles.stepText}>Step 3</Text>
              <Text style={styles.description}>Make Payment</Text>
            </View>
          </View>
        </View>

        <View style={styles.trafficCard}>
          <Text style={styles.fastagTitle}>Traffic Fines</Text>
          <Text style={styles.cashbackText}>
            Select your state to see traffic fines
          </Text>

          {/* Input and Button in the Same Line */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter Your Vehicle Number"
              placeholderTextColor="#1a9e76"
            />
            <TouchableOpacity style={styles.rechargeBtn}>
              <Text style={styles.rechargeText}>Check</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default PayChallan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f0f0f0",
  },
  header: {
    backgroundColor: "#1a9e76",
    paddingVertical: 35,
    paddingHorizontal: 20,
    flexDirection: "row",
    alignItems: "center",
    position: "absolute",
    top: 10,
    left: 0,
    right: 0,
    zIndex: 1000,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  closeButton: {
    padding: 10,
    position: "absolute",
    left: 10, // Moves it to the left corner
  },
  closeText: {
    fontSize: 24,
    color: "#fff",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    flex: 1, // Ensures title takes up remaining space
    position: "relative",
    left: 40,
  },
  icontitle: {
    fontSize: 20,
    fontWeight: "bold",
    flex: 1, // Ensures title takes up remaining space
    position: "relative",
    left: 25,
    paddingBottom: 20,
  },
  fastagCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginTop: "35%",
    elevation: 5,
    alignItems: "center",
    marginLeft: 15,
    marginRight: 15,
  },
  fastagTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    textAlign: "left",
    alignSelf: "flex-start",
  },
  cashbackText: {
    fontSize: 14,
    color: "#555",
    textAlign: "left",
    alignSelf: "flex-start",
    marginBottom: 10,
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    width: "100%",
    borderWidth: 1,
    borderColor: "#1a9e76",
    borderRadius: 8,
    backgroundColor: "#b2d3c2",
    paddingHorizontal: 5,
  },
  input: {
    flex: 1,
    height: 45,
    paddingHorizontal: 10,
    fontSize: 14,
    color: "#000",
    fontSize: 16,
    fontWeight: "bold",
  },
  rechargeBtn: {
    backgroundColor: "#1a9e76",
    paddingVertical: 12,
    paddingHorizontal: 15,
    borderRadius: 8,
    marginLeft: 10,
  },
  rechargeText: {
    color: "#fff",
    fontWeight: "bold",
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    margin: 10,
    elevation: 3,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  stepsContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
  },
  step: {
    alignItems: "center",
    width: 100,
  },
  icon: {
    width: 50,
    height: 50,
    marginBottom: 5,
  },
  stepText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#1a9e76",
  },
  description: {
    fontSize: 12,
    textAlign: "center",
    color: "#666",
  },

  trafficCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    alignItems: "center",
    marginLeft: 15,
    marginRight: 15,
  },
});
