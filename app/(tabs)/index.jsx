import React, { useState } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
  ScrollView,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useRouter } from "expo-router"; // Importing useRouter from expo-router

const services = [
  { name: "Nearby Parking", icon: "location-on" },
  { name: "EV Parking", icon: "ev-station" },
  { name: "Car Wash", icon: "local-car-wash" },
  { name: "Vehicle Insurance", icon: "verified-user" },
  { name: "Road Assistance", icon: "support-agent" },
  { name: "Pay Challan", icon: "receipt" },
  { name: "Toll Estimator", icon: "attach-money" },
  { name: "Valet Parking", icon: "directions-car" },
];

const App = () => {
  const [isModalVisible, setModalVisible] = useState(false);
  const router = useRouter(); // Initialize router

  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };

  // Navigate to Pay Challan page
  const handlePayChallan = () => {
    router.push("/PayChallan"); // This navigates to the paychalan.jsx page
  };

  return (
    <View style={styles.container}>
      {/* Sticky Header */}
      <View style={styles.header}>
        <View>
          <TouchableOpacity
            onPress={toggleModal}
            style={styles.profileContainer}
          >
            <Image
              source={{
                uri: "https://parkqwik.com/static/media/logo.5b9f9d5016019971e9d6.png",
              }}
              style={styles.profileImage}
            />
          </TouchableOpacity>

          {/* Dropdown Modal */}
          <Modal
            visible={isModalVisible}
            animationType="slide"
            transparent={true}
            onRequestClose={toggleModal}
          >
            <View style={styles.modalOverlay}>
              <View style={styles.modalContainer}>
                {/* Close Button and Profile Info */}
                <View style={styles.modalHeader}>
                  <TouchableOpacity
                    onPress={toggleModal}
                    style={styles.closeButton}
                  >
                    <Text style={styles.closeText}>←</Text>
                  </TouchableOpacity>
                  <Image
                    source={{
                      uri: "https://github.com/user-attachments/assets/9eb5a18b-02ff-44ba-a371-6e09aaca227d",
                    }}
                    style={styles.AccountImage}
                  />
                  <View style={styles.userInfo}>
                    <Text style={styles.username}>Username</Text>
                    <Text style={styles.phoneNumber}>+91 9876543210</Text>
                  </View>
                </View>

                {/* QR Code and Dropdown Menu */}
                <View style={styles.QRcard}>
                  <Image
                    source={{
                      uri: "https://github.com/user-attachments/assets/10d3df86-fdd4-400b-a050-4ba3a5740d04",
                    }}
                    style={styles.QRCode}
                  />
                  <View style={styles.buttonContainer}>
                    {/* Share QR Button */}
                    <TouchableOpacity
                      style={[styles.button, styles.shareButton]}
                    >
                      <Icon name="share" size={20} color="#fff" />
                      <Text style={styles.buttonText}>Share QR</Text>
                    </TouchableOpacity>

                    {/* Share Link Button */}
                    <TouchableOpacity
                      style={[styles.button, styles.linkButton]}
                    >
                      <Icon name="link" size={20} color="#fff" />
                      <Text style={styles.buttonText}>Share Link</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                {/* Scrollable Content */}
                <ScrollView contentContainerStyle={styles.scrollContainer}>
                  {[
                    // Dropdown Menu items
                    "👤 Profile",
                    "🧾 Transaction History",
                    "📝 Bookings & Orders",
                    "🏠︎ Saved Address",
                    "🚘 Saved Cards",
                    "🏆 Rewards",
                    "🤝 Help & Support",
                    "ℹ️ About Us",
                    "🔓 Logout",
                  ].map((item, index) => (
                    <TouchableOpacity
                      key={index}
                      style={styles.dropdownItem}
                      onPress={toggleModal}
                    >
                      <Text style={styles.dropdownText}>{item}</Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
            </View>
          </Modal>
        </View>

        <TouchableOpacity style={styles.addVehicleBtn}>
          <Text style={styles.addVehicleText}>+ Add Vehicle</Text>
        </TouchableOpacity>

        <View style={styles.iconsContainer}>
          <Icon name="notifications" size={24} color="#fff" />
          <Icon name="wallet" size={24} color="#fff" />
          <Icon name="share" size={24} color="#fff" />
        </View>
      </View>

      {/* Scrollable Content */}
      <View style={styles.servicesCard}>
        <Text style={styles.servicesTitle}>Services</Text>
        <View style={styles.servicesGrid}>
          {services.map((service, index) => (
            <TouchableOpacity
              key={index}
              style={styles.serviceItem}
              onPress={service.name === "Pay Challan" ? handlePayChallan : null} // Add click handler for Pay Challan
            >
              <Icon name={service.icon} size={30} color="#008000" />
              <Text style={styles.serviceText}>{service.name}</Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
  },

  // Header section
  header: {
    backgroundColor: "#008000",
    padding: 20,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    top: 1,
    left: 0,
    right: 0,
    zIndex: 1000,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  profileContainer: {
    flexDirection: "row",
    alignItems: "center",
    padding: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)", // Semi-transparent background
  },
  modalContainer: {
    width: "100%",
    height: "85%",
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },

  // Modal header section with close button and profile info
  modalHeader: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 20,
  },
  closeButton: {
    backgroundColor: "#f44336",
    borderRadius: 15,
    padding: 1,
    marginLeft: 10,
  },
  closeText: {
    color: "#fff",
    fontSize: 20,
  },
  AccountImage: {
    width: 80,
    height: 80,
    borderRadius: 40,
    borderWidth: 2,
    borderColor: "#008000",
  },
  userInfo: {
    marginLeft: 10,
    flexDirection: "column",
    justifyContent: "center",
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#333",
  },
  phoneNumber: {
    fontSize: 14,
    color: "#555",
  },
  QRcard: {
    width: 300,
    height: 300,
    backgroundColor: "#f5f5f5",
    borderRadius: 15,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    position: "relative",
    left: 30,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    padding: 10,
  },
  QRCode: {
    width: 200,
    height: 200,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 10,
    width: "100%",
  },
  button: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 30,
    marginHorizontal: 10,
  },
  shareButton: {
    backgroundColor: "#008000",
  },
  linkButton: {
    backgroundColor: "#0073e6",
  },
  buttonText: {
    color: "#fff",
    marginLeft: 8,
    fontSize: 14,
  },
  dropdownItem: {
    paddingVertical: 15,
    borderBottomWidth: 2,
    borderBottomColor: "#ddd",
  },
  dropdownText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  addVehicleBtn: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 20,
  },
  addVehicleText: {
    color: "#008000",
    fontWeight: "bold",
  },
  iconsContainer: {
    flexDirection: "row",
    gap: 10,
  },

  // Service sections
  servicesCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 25,
    elevation: 5,
    marginBottom: "75%",
    marginLeft: 15,
    marginRight: 15,
  },
  servicesTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  servicesGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  serviceItem: {
    width: "23%",
    alignItems: "center",
    marginVertical: 10,
  },
  serviceText: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 5,
  },
  scrollContainer: {
    paddingBottom: 20, // Add some space at the bottom of the scrollable content
  },
});
