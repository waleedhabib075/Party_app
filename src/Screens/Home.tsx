import Entypo from "@expo/vector-icons/Entypo";
import Slider from "@react-native-community/slider"; // Make sure to install this package
import React, { useState } from "react";
import {
  Modal,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";

export default function Home() {
  const [firstModalVisible, setFirstModalVisible] = useState(false); // State for the first modal
  const [secondModalVisible, setSecondModalVisible] = useState(false); // State for the second modal
  const [range, setRange] = useState(1); // State for the slider range

  const INITIAL_REGION = {
    latitude: 37.33,
    longitude: -122,
    latitudeDelta: 2,
    longitudeDelta: 2,
  };

  const closeFirstModal = () => {
    setFirstModalVisible(false); // Close the first modal
  };

  const closeSecondModal = () => {
    setSecondModalVisible(false); // Close the second modal
  };

  return (
    <View style={{ flex: 1 }}>
      <MapView
        style={StyleSheet.absoluteFill}
        provider={PROVIDER_GOOGLE}
        initialRegion={INITIAL_REGION}
        showsUserLocation
        showsMyLocationButton
      />

      {/* First Floating Button */}
      <TouchableOpacity
        style={[styles.floatingButton, { bottom: 70 }]}
        onPress={() => setFirstModalVisible(true)}
      >
        <Text style={styles.buttonText}>
          Click to modify your viewing information
        </Text>
      </TouchableOpacity>

      {/* Second Floating Button */}
      <TouchableOpacity
        style={[styles.floatingButton, { bottom: 150 }]} // Adjust position for the second button
        onPress={() => setSecondModalVisible(true)}
      >
        <Text style={styles.buttonText}>
          Click to modify your viewing information
        </Text>
      </TouchableOpacity>

      {/* First Modal Component */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={firstModalVisible}
        onRequestClose={closeFirstModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Custom Radius for First Modal</Text>
            <View style={styles.ratingContainer}>
              <Text>Rating</Text>
              <Entypo name="star" size={24} color="gold" />
              <Entypo name="star" size={24} color="gold" />
              <Entypo name="star" size={24} color="gold" />
              <Entypo name="star" size={24} color="gold" />
              <Entypo name="star" size={24} color="gold" />
              <Text>4.5</Text>
            </View>

            <Text style={styles.label}>Postal Code</Text>
            <View style={styles.inputContainer}>
              <Entypo name="location-pin" size={20} color="red" />
              <TextInput
                style={styles.textInput}
                placeholder="Enter your postal code"
                placeholderTextColor="darkgray"
              />
            </View>

            <Text style={styles.label}>Enter Your Range</Text>
            <View style={styles.sliderWrapper}>
              <Slider
                style={styles.slider}
                minimumValue={1}
                maximumValue={10}
                step={1}
                value={range}
                onValueChange={(value) => setRange(value)}
                minimumTrackTintColor="red"
                maximumTrackTintColor="#d3d3d3"
                thumbTintColor="red"
              />
              <Text style={styles.rangeText}>{range} km</Text>
            </View>

            <Pressable style={styles.closeButton} onPress={closeFirstModal}>
              <Text style={styles.closeButtonText}>Apply Changes</Text>
            </Pressable>
          </View>
        </View>
      </Modal>

      {/* Second Modal Component */}
      <Modal
        animationType="slide"
        transparent={true}
        visible={secondModalVisible}
        onRequestClose={closeSecondModal}
      >
        <View style={styles.modalContainer}>
          <View style={styles.modalContent}>
            <Text style={styles.modalTitle}>Custom Radius </Text>
            <View style={styles.ratingContainer}>
              <Text>Rating</Text>
              <Entypo name="star" size={24} color="gold" />
              <Entypo name="star" size={24} color="gold" />
              <Entypo name="star" size={24} color="gold" />
              <Entypo name="star" size={24} color="gold" />
              <Entypo name="star" size={24} color="gold" />
              <Text>4.5</Text>
            </View>

            <Text style={styles.label}>Postal Code</Text>
            <View style={styles.inputContainer}>
              <Entypo name="location-pin" size={20} color="red" />
              <TextInput
                style={styles.textInput}
                placeholder="Enter your postal code"
                placeholderTextColor="darkgray"
              />
            </View>

            <Text style={styles.label}>Enter Your Range</Text>
            <View style={styles.inputContainer}>
              <Entypo name="location-pin" size={20} color="red" />
              <TextInput
                style={styles.textInput}
                placeholder="To"
                placeholderTextColor="darkgray"
              />
            </View>
            <View style={styles.inputContainer}>
              <Entypo name="location-pin" size={20} color="red" />
              <TextInput
                style={styles.textInput}
                placeholder="From"
                placeholderTextColor="darkgray"
              />
            </View>

            <Pressable style={styles.closeButton} onPress={closeSecondModal}>
              <Text style={styles.closeButtonText}>Apply Changes</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  );
}
const styles = StyleSheet.create({
  floatingButton: {
    position: "absolute",
    bottom: 90,
    right: 30,
    backgroundColor: "red",
    borderRadius: 30,
    height: 60,
    width: 360,
    justifyContent: "center",
    alignItems: "center",
    elevation: 5, // for Android shadow
    shadowColor: "#000", // for iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 4,
  },
  buttonText: {
    color: "white",
    fontSize: 17,
  },
  ratingContainer: {
    flexDirection: "row",
    alignItems: "center", // Align items vertically
  },
  modalContainer: {
    flex: 1,
    justifyContent: "flex-end", // Align to the bottom
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
  },
  modalContent: {
    height: "60%", // Take 45% of the screen height
    backgroundColor: "#f0f0f0", // Light grey background for the modal
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    alignItems: "flex-start", // Align content to the left
  },
  modalTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "left", // Align text to the left
    width: "100%", // Make the title take full width
  },
  label: {
    fontSize: 16,
    marginTop: 20,
    marginBottom: 10, // Add space between label and input field
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center", // Center vertically
    backgroundColor: "#e0e0e0", // Light grey background for the input field
    borderRadius: 5,
    padding: 10, // Add padding inside the input field
    width: "100%", // Make the input full width
    marginBottom: 20, // Add space after the input field
  },
  textInput: {
    flex: 1, // Make the text input take the available space
    paddingLeft: 5, // Space from the icon
    backgroundColor: "transparent", // Make background of TextInput transparent
  },
  sliderWrapper: {
    flexDirection: "row", // Put slider and text in the same row
    alignItems: "center", // Align items vertically in the center
    width: "100%", // Take the full width of the screen
    justifyContent: "space-between", // Space between slider and text
    marginTop: 10, // Space between input field and slider
    marginBottom: 20, // Add space after the slider
  },
  slider: {
    flex: 1, // Make the slider take the remaining space
    height: 40, // Optional: Adjust height as needed
  },
  rangeText: {
    marginLeft: 10,
    fontSize: 16,
  },
  closeButton: {
    marginTop: 20,
    backgroundColor: "red",
    padding: 10,
    borderRadius: 5,
    width: "100%", // Full width horizontally
    alignSelf: "center", // Center the button
    bottom: 20,
  },

  closeButtonText: {
    color: "white",
    textAlign: "center", // Center the text inside the button
    fontSize: 16,
  },
});
