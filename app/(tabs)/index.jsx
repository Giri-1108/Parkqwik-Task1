import React, { useState, useEffect, useRef } from "react";
import {
  View,
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Linking,
  Modal,
  Dimensions,
  FlatList,
} from "react-native";
import Icon from "react-native-vector-icons/MaterialIcons";
import { useRouter } from "expo-router";

const videoUrl = "https://www.youtube.com/watch?v=J7PcCgTHhWU";
const videoId = videoUrl.split("v=")[1]?.split("&")[0];
const thumbnailUrl = `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;

const openYouTube = () => {
  Linking.openURL(videoUrl); // Open YouTube link
};

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

const others = [
  { name: "Rentout Helmet", icon: "two-wheeler" },
  { name: "Fuel Price", icon: "local-gas-station" },
  { name: "Shop Here", icon: "local-mall" },
  { name: "My Vehicles", icon: "directions-car" },
];

const gonna = [
  { name: "Car Wash", icon: "local-car-wash" },
  { name: "Estimate Toll", icon: "attach-money" },
  { name: "Shop", icon: "local-mall" },
  { name: "Protocols", icon: "fact-check" },
];

const carCenter = [
  { name: "Pay Challans", icon: "description" },
  { name: "Crime Reporter", icon: "warning-amber" },
  { name: "RTO Center", icon: "domain" },
  { name: "PUCC Center", icon: "eco" },
];

const exclusive = [
  { name: "Rewards", icon: "redeem" },
  { name: "Dsicounts", icon: "local-offer" },
  { name: "Refer & Win", icon: "person-add" },
];

const recharges = [
  { name: "Fastag Recharge", icon: "toll" },
  { name: "Mobile Recharge", icon: "smartphone" },
  { name: "Electricity", icon: "bolt" },
  { name: "Water", icon: "water-drop" },
  { name: "Gas Cylinder", icon: "propane-tank" },
  { name: "Loan Payment", icon: "request-quote" },
  { name: "DTH", icon: "settings-input-antenna" },
  { name: "House Rent", icon: "domain" },
];

const { width } = Dimensions.get("window");

const images = [
  "https://github.com/user-attachments/assets/e7975198-128c-411d-bd3d-3fab63bfc9d2",
  "https://github.com/user-attachments/assets/03782980-a62f-497d-b59f-d4d87f86783d",
  "https://github.com/user-attachments/assets/c8ad81fd-cd57-44af-998a-6c2b2d7634df",
];

const titles = ["Recharge FASTag", "Add Money to Wallet", "Door Step Car Wash"];
const subTitle = [
  "Get Existing Prizes",
  "Get 2% Cashback",
  "Get 20% off 1st CarWash",
];
const buttons = ["Recharge Now", "Add Money", "Book Now", "Recharge Now"];

const discoverOptions = [
  { name: "Buy Fastag", icon: "shopping-cart" },
  { name: "Replace Fastag", icon: "repeat" },
  { name: "Activate Fastag", icon: "check-circle" },
  { name: "Close Fastag", icon: "cancel" },
];

const CardComponent = ({
  title,
  another,
  subtitle,
  buttonText,
  background,
}) => {
  return (
    <View style={[styles.card, { background }]}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.another}>{another}</Text>
      <Text style={styles.subtitle}>{subtitle}</Text>
      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableOpacity>
    </View>
  );
};

const App = () => {
  const router = useRouter();
  const flatListRef = useRef(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => {
        const nextIndex = (prevIndex + 1) % images.length;
        if (flatListRef.current) {
          flatListRef.current.scrollToOffset({
            offset: nextIndex * width,
            animated: true,
          });
        }
        return nextIndex;
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);

  const toggleModal = () => {
    setIsModalVisible(!isModalVisible);
  };

  const trending = [
    {
      title: "Save ₹500 ",
      another: "On Your First EV Parking",
      subtitle: "Weprovide dedicated monthly parking with surveillance",
      buttonText: "Book Now",
      color: "#FF5733",
    },
  ];

  const cards = [
    {
      title: "Recharge FASTag",
      subtitle: "Get Petrol Worth ₹30",
      buttonText: "Recharge Now",
      color: "#FF5733",
    },
    {
      title: "Get 25% off",
      subtitle: "On your first car wash",
      buttonText: "Book Now",
      color: "#FF5733",
    },
    {
      title: "Get 15% off",
      subtitle: "On your First Parking",
      buttonText: "Book Now",
      color: "#FF5733",
    },
  ];

  const Premeiumcards = [
    {
      title: "Monthly Parking",
      subtitle: "Dedicated Parking available near you",
      buttonText: "Explore Now",
      color: "#FF5733",
    },
    {
      title: "Elite Car Wash",
      subtitle: "Elite car grooming at your door step",
      buttonText: "Explore Now",
      color: "#FF5733",
    },
  ];

  const twocards = [
    {
      title: "Get 15% off on",
      another: "FASTag recharge",
      subtitle: "Pay using Axis Bank Credit & Debit Cards",
      buttonText: "Recharge Now",
      color: "#FF5733",
    },
    {
      title: "Reserve a Parking Slot",
      subtitle: "Win 300ml petrol on your first parking",
      buttonText: "Explore Now",
      color: "#FF5733",
    },
  ];

  const oneCard = [
    {
      title: "Reserve a Parking Slot",
      subtitle: "Win 300ml petrol on your first parking",
      buttonText: "Explore Now",
      color: "#FF5733",
    },
  ];
  return (
    <View style={styles.container}>
      {/* Sticky Header */}
      <View style={styles.header}>
        {/* Profile Image with Dropdown */}
        <View>
          {/* Profile Button */}
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
                {[
                  "👤 Profile",
                  "🧾 Transaction History",
                  "📝 Bookings & Orders",
                  "🏠︎ Saved Address",
                  "🚘 Saved Cards",
                  "🏆 Rewards",
                  "🤝 Help & Support",
                  "ℹ️ About Us",
                  "🗃️ Wallet",
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

                {/* Close Button */}
                <TouchableOpacity
                  onPress={toggleModal}
                  style={styles.closeButton}
                >
                  <Text style={styles.closeText}>Close</Text>
                </TouchableOpacity>
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
      <ScrollView contentContainerStyle={styles.scrollView}>
        {/* Services Section */}
        <View style={styles.servicesCard}>
          <Text style={styles.servicesTitle}>Services</Text>
          <View style={styles.servicesGrid}>
            {services.map((service, index) => (
              <TouchableOpacity
                key={index}
                style={styles.serviceItem}
                onPress={() => {
                  if (service.name === "Pay Challan") {
                    router.push("/PayChallan"); // Navigate to Pay Challan page
                  }
                }}
              >
                <Icon name={service.icon} size={30} color="#1a9e76" />
                <Text style={styles.serviceText}>{service.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* Fastag Recharge & My FastTags Section */}
        <View style={styles.fastagCard}>
          <Text style={styles.fastagTitle}>Fastag Recharge</Text>
          <Text style={styles.cashbackText}>
            Get upto 100% cashback on first 3 Fastag recharges
          </Text>

          {/* Input and Button in the Same Line */}
          <View style={styles.inputContainer}>
            <TextInput
              style={styles.input}
              placeholder="Enter vehicle or chassis number"
              placeholderTextColor="#1a9e76"
            />
            <TouchableOpacity style={styles.rechargeBtn}>
              <Text style={styles.rechargeText}>Recharge</Text>
            </TouchableOpacity>
          </View>
          <View
            style={{
              flexDirection: "row",
              textAlign: "left",
              alignSelf: "flex-start",
            }}
          >
            <Text style={styles.poweredBy}>Powered by</Text>
            <Image
              style={[styles.poweredBy, { width: 50, height: 20 }]}
              source={{
                uri: "https://github.com/user-attachments/assets/7485dc2c-676b-4e33-b8b4-403b33f2213f",
              }}
            />
            <Image
              style={[styles.poweredBy, { width: 50, height: 20 }]}
              source={{
                uri: "https://github.com/user-attachments/assets/8943b9df-08dc-4c55-b2ff-65211d267a6e",
              }}
            />
          </View>

          {/* My FastTags Section */}
          <Text style={[styles.sectionHeader, { textAlign: "left" }]}>
            My FastTags
          </Text>
          <View
            style={{
              height: 2,
              backgroundColor: "#ddd",
              width: "100%",
              marginTop: 4,
            }}
          />
          <Text style={styles.sectionHeader}>Discover</Text>
          <View style={styles.discoverGrid}>
            {discoverOptions.map((option, index) => (
              <TouchableOpacity key={index} style={styles.discoverItem}>
                <Icon name={option.icon} size={30} color="#1a9e76" />
                <Text style={styles.discoverText}>{option.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        {/* pagination */}

        <FlatList
          style={styles.flat}
          ref={flatListRef}
          data={images}
          horizontal
          pagingEnabled
          showsHorizontalScrollIndicator={false}
          scrollEnabled={false} // Prevent manual scrolling
          keyExtractor={(_, i) => i.toString()}
          renderItem={({ item }) => (
            <View style={styles.rowContainer}>
              {/* Left Side: Button */}
              <View style={styles.leftContainer}>
                <Text style={styles.title}>{titles[currentIndex]}</Text>
                <Text style={styles.tit}>{subTitle[currentIndex]}</Text>
                <TouchableOpacity style={styles.rechargeButton}>
                  <Text style={styles.buttonText}>{buttons[currentIndex]}</Text>
                </TouchableOpacity>
              </View>

              {/* Right Side: Image */}
              <View style={styles.rightContainer}>
                <Image source={{ uri: item }} style={styles.image} />
              </View>
            </View>
          )}
        />

        {/* Pagination Dots */}
        <View style={styles.pagination}>
          {images.map((_, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                { backgroundColor: index === currentIndex ? "#000" : "#bbb" },
              ]}
            />
          ))}
        </View>

        <View style={styles.servicesCard}>
          <Text style={styles.servicesTitle}>Others</Text>
          <View style={styles.servicesGrid}>
            {others.map((service, index) => (
              <TouchableOpacity key={index} style={styles.serviceItem}>
                <Icon name={service.icon} size={30} color="#1a9e76" />
                <Text style={styles.serviceText}>{service.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.DealCard}>
          <Text style={styles.servicesTitle}>Deals For You</Text>
          <FlatList
            data={cards}
            keyExtractor={(item) => item.id}
            horizontal // Enables horizontal scrolling
            showsHorizontalScrollIndicator={false} // Hides scroll bar
            contentContainerStyle={styles.flatListContainer}
            renderItem={({ item }) => (
              <CardComponent
                title={item.title}
                subtitle={item.subtitle}
                buttonText={item.buttonText}
                backgroundColor={item.color}
              />
            )}
          />
        </View>

        <View style={styles.servicesCard}>
          <Text style={styles.servicesTitle}>Gonna Travel?</Text>
          <View style={styles.servicesGrid}>
            {gonna.map((service, index) => (
              <TouchableOpacity key={index} style={styles.serviceItem}>
                <Icon name={service.icon} size={30} color="#1a9e76" />
                <Text style={styles.serviceText}>{service.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.PremiumCard}>
          <Text style={styles.servicesTitle}>premium plans</Text>
          <FlatList
            data={Premeiumcards}
            keyExtractor={(item) => item.id}
            horizontal // Enables horizontal scrolling
            showsHorizontalScrollIndicator={false} // Hides scroll bar
            contentContainerStyle={styles.premeiumflatListContainer}
            renderItem={({ item }) => (
              <CardComponent
                title={item.title}
                subtitle={item.subtitle}
                buttonText={item.buttonText}
              />
            )}
          />
        </View>

        <View style={styles.rechargesCard}>
          <Text style={styles.rechargeTitle}>Recharge and bill paymenmts</Text>
          <View style={styles.rechargeGrid}>
            {recharges.map((service, index) => (
              <TouchableOpacity key={index} style={styles.serviceItem}>
                <Icon name={service.icon} size={30} color="#1a9e76" />
                <Text style={styles.serviceText}>{service.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
          <View style={styles.viewContainer}>
            <TouchableOpacity>
              <Text style={styles.view}>View All</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.twoCard}>
          <FlatList
            data={twocards}
            keyExtractor={(item) => item.id}
            horizontal // Enables horizontal scrolling
            showsHorizontalScrollIndicator={false} // Hides scroll bar
            contentContainerStyle={styles.premeiumflatListContainer}
            renderItem={({ item }) => (
              <CardComponent
                title={item.title}
                another={item.another}
                subtitle={item.subtitle}
                buttonText={item.buttonText}
              />
            )}
          />
        </View>

        <View style={styles.servicesCard}>
          <Text style={styles.servicesTitle}>Your Car's Center</Text>
          <View style={styles.servicesGrid}>
            {carCenter.map((service, index) => (
              <TouchableOpacity key={index} style={styles.serviceItem}>
                <Icon name={service.icon} size={30} color="#1a9e76" />
                <Text style={styles.serviceText}>{service.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.oneCard}>
          <Text style={styles.sectionHeader}>Trending</Text>
          <FlatList
            data={trending}
            keyExtractor={(item) => item.id}
            horizontal // Enables horizontal scrolling
            showsHorizontalScrollIndicator={false} // Hides scroll bar
            contentContainerStyle={styles.premeiumflatListContainer}
            renderItem={({ item }) => (
              <CardComponent
                title={item.title}
                another={item.another}
                subtitle={item.subtitle}
                buttonText={item.buttonText}
              />
            )}
          />
        </View>

        <View style={styles.servicesCard}>
          <Text style={styles.servicesTitle}>Exclusive Offers</Text>
          <View style={styles.servicesGrid}>
            {exclusive.map((service, index) => (
              <TouchableOpacity key={index} style={styles.serviceItem}>
                <Icon name={service.icon} size={30} color="#1a9e76" />
                <Text style={styles.serviceText}>{service.name}</Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>

        <View style={styles.videoCard}>
          <Text style={styles.videoTitle}>How parkqwik works?</Text>
          <TouchableOpacity onPress={openYouTube}>
            <Image source={{ uri: thumbnailUrl }} style={styles.thumbnail} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    width,
    flex: 1,
    backgroundColor: "#f0f0f0",
    alignItems: "center",
    justifyContent: "center",
  },
  viewContainer: {
    alignItems: "center", // Centers text horizontally
    justifyContent: "center", // Centers content inside vertically if needed
    marginTop: 10,
  },

  view: {
    backgroundColor: "#1a9e76",
    padding: 10,
    borderRadius: 10,
    color: "#fff",
    textAlign: "center",
    width: 100, // Adjust as needed
  },

  thumbnail: {
    width: 300,
    height: 180,
    borderRadius: 10,
  },
  image: {
    width,
    height: 200,
    resizeMode: "cover",
  },

  tit: {
    fontSize: 20,
    color: "black",
  },
  rowContainer: {
    width,
    height: 150,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 40,
    paddingRight: 70,
  },
  leftContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    margin: 5,
  },
  rightContainer: {
    flex: 1,
  },
  image: {
    width: "100%",
    height: 120,
    resizeMode: "cover",
    borderRadius: 10,
  },
  rechargeButton: {
    backgroundColor: "#1a9e76",
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  title: {
    marginTop: 10,
    fontSize: 18,
    fontWeight: "bold",
  },
  another: {
    marginTop: 5,
    fontSize: 18,
    fontWeight: "bold",
  },
  pagination: {
    flexDirection: "row",
    marginTop: 10,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
  },
  dot: {
    width: 8,
    height: 8,
    borderRadius: 4,
    marginHorizontal: 7,
    backgroundColor: "#fff",
  },
  header: {
    backgroundColor: "#1a9e76",
    padding: 15,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    position: "absolute",
    top: 6,
    left: 0,
    right: 0,
    zIndex: 1000,
    elevation: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  scrollView: {
    paddingTop: 80,
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
  profileIcon: {
    marginLeft: 10,
  },
  modalOverlay: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0,0,0,0.5)", // Semi-transparent background
  },
  modalContainer: {
    width: 250,
    backgroundColor: "#fff",
    padding: 20,
    borderRadius: 10,
    elevation: 5,
  },
  dropdownItem: {
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: "#ddd",
  },
  dropdownText: {
    fontSize: 16,
  },
  closeButton: {
    marginTop: 10,
    backgroundColor: "#f44336",
    padding: 10,
    borderRadius: 5,
    alignItems: "center",
  },
  closeText: {
    color: "#fff",
    fontSize: 16,
  },
  addVehicleBtn: {
    backgroundColor: "#fff",
    padding: 8,
    borderRadius: 20,
  },
  addVehicleText: {
    color: "#1a9e76",
    fontWeight: "bold",
  },
  iconsContainer: {
    flexDirection: "row",
    gap: 10,
  },

  flat: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    elevation: 5,
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  DealCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 30,
    elevation: 5,
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
  },

  PremiumCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 30,
    elevation: 5,
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  premeiumflatListContainer: {
    marginTop: 10,
    marginLeft: 20,
    gap: 20,
  },

  videoCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 45,
    elevation: 5,
    marginTop: 20,
    marginBottom: 20,
  },
  videoTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
  },
  twoCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 25,
    elevation: 5,
    marginTop: 20,
  },

  oneCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 25,
    elevation: 5,
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  rechargesCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 25,
    elevation: 5,
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  rechargeTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  servicesCard: {
    backgroundColor: "#fff",
    borderRadius: 15,
    padding: 25,
    elevation: 5,
    marginTop: 20,
    marginLeft: 15,
    marginRight: 15,
  },
  servicesTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  rechargeGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  rechargeItem: {
    width: "23%",
    alignItems: "center",
    marginVertical: 10,
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
  fastagCard: {
    backgroundColor: "#fff",
    borderRadius: 10,
    padding: 20,
    marginTop: 20,
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
    cursor: "pointer",
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
  poweredBy: {
    fontSize: 12,
    color: "#888",
    marginTop: 5,
    textAlign: "left",
    alignSelf: "flex-start",
    flexDirection: "row",
  },
  sectionHeader: {
    fontSize: 18,
    fontWeight: "bold",
    marginVertical: 15,
    textAlign: "left",
    alignSelf: "flex-start",
  },
  discoverGrid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
  },
  discoverItem: {
    width: "23%",
    alignItems: "center",
    marginVertical: 10,
  },
  discoverText: {
    fontSize: 12,
    textAlign: "center",
    marginTop: 5,
  },

  title: {
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  subtitle: {
    fontSize: 14,
    color: "#555",
    textAlign: "center",
    marginBottom: 8,
  },
  button: {
    backgroundColor: "#1a9e76",
    padding: 8,
    borderRadius: 5,
  },
  buttonText: {
    color: "#fff",
    fontWeight: "bold",
  },

  card: {
    width: 300,
    height: 150,
    backgroundColor: "#b2d3c2",
    marginRight: 10,
    marginTop: 10,
    marginBottom: 10,
    padding: 10,
    borderRadius: 15,
    alignItems: "center",
    elevation: 5,
  },
});
