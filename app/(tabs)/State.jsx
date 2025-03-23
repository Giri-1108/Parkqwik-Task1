import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Modal,
  FlatList,
} from "react-native";
import { useRouter } from "expo-router";
import { MaterialIcons } from "@expo/vector-icons";
import Icon from "react-native-vector-icons/MaterialIcons";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";

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

const CardComponent = ({ title, another, amount }) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.another}>{another}</Text>
      {amount !== undefined && <Text style={styles.amount}>{amount}</Text>}
    </View>
  );
};

const State = () => {
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

  const trending = [
    {
      title: "Traffic fines in Delhi ",
      another: "List of Traffic Fines as Per Motor Vehicle(Amendment)Act",
      amount: "",
    },
  ];

  const trafficrules = [
    {
      title: "Traffic fines in Delhi ",
      another: "List of Traffic Fines as Per Motor Vehicle(Amendment)Act",
      amount: "500",
    },
  ];

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
        <Text style={styles.navtitle}>Traffic Fines</Text>
      </View>

      {/* Scrollable Content */}
      <ScrollView contentContainerStyle={styles.content}>
        <View style={styles.trafficCard}>
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

        <View style={styles.oneCard}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name="traffic-light"
              size={50}
              color="#1a9e76"
            />
          </View>
          <View style={styles.textContainer}>
            <FlatList
              data={trending}
              keyExtractor={(item) => item.id}
              horizontal // Enables horizontal scrolling
              showsHorizontalScrollIndicator={false} // Hides scroll bar
              contentContainerStyle={styles.premeiumflatListContainer}
              renderItem={({ item }) => (
                <CardComponent title={item.title} another={item.another} />
              )}
            />
          </View>
        </View>
        {/* 1 */}
        <View style={styles.oneCard}>
          <View style={styles.textContainer}>
            <FlatList
              data={trafficrules}
              keyExtractor={(item) => item.id}
              horizontal // Enables horizontal scrolling
              showsHorizontalScrollIndicator={false} // Hides scroll bar
              contentContainerStyle={styles.premeiumflatListContainer}
              renderItem={({ item }) => (
                <CardComponent
                  title={item.title}
                  another={item.another}
                  amount={item.amount}
                />
              )}
            />
          </View>
        </View>

        {/* 2 */}

        <View style={styles.oneCard}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name="traffic-light"
              size={50}
              color="#1a9e76"
            />
          </View>
          <View style={styles.textContainer}>
            <FlatList
              data={trending}
              keyExtractor={(item) => item.id}
              horizontal // Enables horizontal scrolling
              showsHorizontalScrollIndicator={false} // Hides scroll bar
              contentContainerStyle={styles.premeiumflatListContainer}
              renderItem={({ item }) => (
                <CardComponent title={item.title} another={item.another} />
              )}
            />
          </View>
        </View>

        {/* 3 */}

        <View style={styles.oneCard}>
          <View style={styles.iconContainer}>
            <MaterialCommunityIcons
              name="traffic-light"
              size={50}
              color="#1a9e76"
            />
          </View>
          <View style={styles.textContainer}>
            <FlatList
              data={trending}
              keyExtractor={(item) => item.id}
              horizontal // Enables horizontal scrolling
              showsHorizontalScrollIndicator={false} // Hides scroll bar
              contentContainerStyle={styles.premeiumflatListContainer}
              renderItem={({ item }) => (
                <CardComponent title={item.title} another={item.another} />
              )}
            />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default State;

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
  navtitle: {
    fontSize: 20,
    fontWeight: "bold",
    color: "white",
    flex: 1, // Ensures title takes up remaining space
    position: "relative",
    left: 40,
  },

  trafficCard: {
    padding: 20,
    marginTop: "25%",
    alignItems: "center",
    marginLeft: 15,
    marginRight: 15,
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

  oneCard: {
    backgroundColor: "#F0FFFA",
    borderRadius: 10,
    elevation: 5,
    marginTop: 5,
    marginLeft: 15,
    marginRight: 15,
    flexDirection: "row", // Align items in a row (icon left, text right)
    alignItems: "center", // Center vertically
    padding: 5,
  },

  iconContainer: {
    marginRight: 10, // Space between icon and text
  },
  textContainer: {
    flex: 1, // Take remaining space
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 15,
    textAlign: "left",
    alignSelf: "flex-start",
  },
  premeiumflatListContainer: {
    marginTop: 10,
    gap: 2,
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
  },
  another: {
    fontSize: 12,
    color: "#555",
    marginBottom: 8,
    fontFamily: "Poppins-Regular",
  },
});
