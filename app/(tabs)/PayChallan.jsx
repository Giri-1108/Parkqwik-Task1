import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  TextInput,
  Modal,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialIcons";

const STATES_IN_INDIA = [
  "Andaman and Nicobar Islands",
  "Andhra Pradesh",
  "Arunachal Pradesh",
  "Assam Pradesh",
  "Bihar",
  "Chhattisgarh",
  "Delhi",
  "Goa",
  "Gujarat",
  "Haryana",
  "Jharkhand",
  "Karnataka",
  "Kerala",
  "Madhya Pradesh",
  "Maharashtra",
  "Manipur",
  "Meghalaya",
  "Mizoram",
  "Nagaland",
  "Odisha",
  "Punjab",
  "Rajasthan",
  "Sikkim",
  "Tamil Nadu",
  "Telangana",
  "Tripura",
  "Uttar Pradesh",
  "Uttarakhand",
  "West Bengal",
];

const PayChallan = () => {
  const router = useRouter();
  const [selectedState, setSelectedState] = useState("");
  const [modalVisible, setModalVisible] = useState(false);

  const handleStateSelect = (state) => {
    setSelectedState(state);
    setModalVisible(false);

    if (state === "Delhi") {
      router.push("/State"); // Ensure your file path is correct
    }
  };

  return (
    <View style={styles.container}>
      {/* Sticky Header */}
      <View style={styles.header}>
        <TouchableOpacity
          onPress={() => router.push("/")}
          style={styles.navclose}
        >
          <Text style={styles.navclosetext}>
            {" "}
            <MaterialIcons name="arrow-back" size={24} color="#fff" />
          </Text>{" "}
          {/* Left Arrow */}
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
            <Text>
              <MaterialIcons name="arrow-forward" size={24} color="#1a9e76" />
            </Text>

            {/* Step 2 */}
            <View style={styles.step}>
              <View style={{ position: "relative", width: 50, height: 50 }}>
                {/* Card Icon */}
                <Text>
                  <MaterialIcons name="description" size={40} color="#1a9e76" />
                </Text>
              </View>
              <Text style={styles.stepText}>Step 2</Text>
              <Text style={styles.description}>Check Your Challans</Text>
            </View>

            {/* Arrow */}
            <Text>
              <MaterialIcons name="arrow-forward" size={24} color="#1a9e76" />
            </Text>

            {/* Step 3 */}
            <View style={styles.step}>
              <View style={{ position: "relative", width: 50, height: 50 }}>
                {/* Card Icon */}
                <Text>
                  <MaterialIcons name="credit-card" size={40} color="#1a9e76" />
                </Text>

                {/* Coin Icon Positioned on Top */}
                <View style={{ position: "absolute", right: -5, bottom: -5 }}>
                  <Text>
                    <MaterialIcons
                      name="attach-money"
                      size={25}
                      color="#1a9e76"
                    />
                  </Text>
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
          <TouchableOpacity
            style={styles.dropdown}
            onPress={() => setModalVisible(true)}
          >
            <Text style={styles.dropdownText}>
              {selectedState ? selectedState : "Select Your State"}
            </Text>
            {/* Dropdown Arrow on the Right */}
            <Text>
              <Icon name="keyboard-arrow-down" size={24} color="#1a9e76" />
            </Text>
          </TouchableOpacity>

          {/* Modal for State Selection */}
          <Modal
            visible={modalVisible}
            animationType="slide"
            transparent={true}
          >
            <View style={styles.modalContainer}>
              <View style={styles.modalContent}>
                <Text style={styles.texting}>Choose State</Text>
                <TouchableOpacity
                  style={styles.closeButton}
                  onPress={() => setModalVisible(false)}
                >
                  <Text style={styles.closeText}>X</Text>
                </TouchableOpacity>
                <FlatList
                  data={STATES_IN_INDIA}
                  keyExtractor={(item) => item}
                  renderItem={({ item }) => (
                    <TouchableOpacity
                      style={styles.radioButton}
                      onPress={() => handleStateSelect(item)}
                    >
                      <Text style={styles.radioText}>{item}</Text>
                      <View
                        style={
                          selectedState === item
                            ? styles.selectedCircle
                            : styles.circle
                        }
                      />
                    </TouchableOpacity>
                  )}
                />
              </View>
            </View>
          </Modal>
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
  navclose: {
    padding: 8,
    position: "absolute",
    left: 10, // Moves it to the left corner
  },
  navclosetext: {
    position: "relative",
    top: 5,
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
  dropdown: {
    width: 350,
    padding: 10,
    borderWidth: 1,
    borderColor: "#1a9e76",
    borderRadius: 10,
    flexDirection: "row",
    justifyContent: "space-between", // Pushes icon to right
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  dropdownText: { color: "#1a9e76", fontSize: 16, fontWeight: "bold" },
  modalContainer: {
    flex: 1,
    justifyContent: "center",
    backgroundColor: "rgba(0,0,0,0.5)",
  },
  modalContent: {
    backgroundColor: "white",
    padding: 20,
    margin: 30,
    borderRadius: 10,
    maxHeight: "80%",
  },
  radioButton: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 15,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  radioText: { fontSize: 16, color: "#000" },
  circle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#1a9e76",
    alignItems: "center",
    justifyContent: "center",
  },
  selectedCircle: {
    width: 20,
    height: 20,
    borderRadius: 10,
    backgroundColor: "#1a9e76",
  },
  closeButton: {
    position: "absolute", // Positioning
    top: 10, // Distance from top
    right: 10, // Distance from right (moves it to the corner)
    paddingVertical: 5, // Adjust padding for a smaller button
    paddingHorizontal: 10, // Small button width
    backgroundColor: "#1a9e76",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
  },
  closeText: {
    color: "#fff",
    fontWeight: "bold",
    fontSize: 16,
  },
  texting: {
    fontWeight: "bold",
    fontSize: 20,
  },
});
