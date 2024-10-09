import MaterialCommunityIcons from "@expo/vector-icons/MaterialCommunityIcons"; // Import MaterialCommunityIcons
import React, { useState } from "react";
import {
  Modal,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Explore() {
  const [modalVisible, setModalVisible] = useState(false); // State for modal visibility
  const numberOfEvents = 20; // Example number of events being viewed

  const partyDetails = {
    location: "2972 Westheimer Rd. Santa Ana, Illinois 85486",
    status: "Public",
    countdown: "36h, 24m, 16s [July 4, 3pm]",
    theme: "Halloween Party",
    peopleJoined: 135,
  };

  return (
    <ScrollView>
      <View style={styles.container}>
        <Text style={styles.head_title}>Explore Top-Notch Parties</Text>

        {/* Search Bar with See All Text */}
        <View style={styles.searchContainer}>
          <TextInput
            style={styles.searchBar}
            placeholder="Search party..."
            placeholderTextColor="gray"
          />
          <Text style={styles.seeAllText}>See All</Text>
        </View>

        {/* Viewing Events Text */}
        <Text style={styles.viewingText}>Viewing {numberOfEvents} events</Text>

        {/* Party Card */}
        {Array.from({ length: numberOfEvents }).map((_, index) => (
          <View key={index} style={styles.partyCard}>
            <View style={styles.avatar}>
              <MaterialCommunityIcons
                name="face-man-profile"
                size={30}
                color="black"
              />
            </View>

            <View style={styles.partyInfo}>
              <Text style={styles.partyUsername}>@BrendanByfield's</Text>
              <View style={styles.participants}>
                <View style={styles.participantAvatar}>
                  <MaterialCommunityIcons
                    name="face-man-profile"
                    size={20}
                    color="black"
                  />
                </View>
                <View style={styles.participantAvatar}>
                  <MaterialCommunityIcons
                    name="face-man-profile"
                    size={20}
                    color="black"
                  />
                </View>
                <View style={styles.participantAvatar}>
                  <MaterialCommunityIcons
                    name="face-man-profile"
                    size={20}
                    color="black"
                  />
                </View>
                <Text style={styles.moreParticipants}>+23</Text>
                <Text style={styles.partyDetailsText}>
                  25 people joined this party
                </Text>
              </View>
            </View>

            {/* Adjusted View Details Button */}
            <TouchableOpacity
              style={styles.viewDetailsButton}
              onPress={() => setModalVisible(true)} // Show modal on button press
            >
              <Text style={styles.viewDetailsText}>View Details</Text>
            </TouchableOpacity>
          </View>
        ))}

        {/* Modal for Viewing Details */}
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(false)} // Close modal on back button
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <Text style={styles.modalText}>@BrendanByfield’s Party</Text>
              <TextInput
                style={styles.textInput}
                value={`${partyDetails.peopleJoined} people joined this party`}
                editable={false} // Make it read-only
              />
              <TextInput
                style={styles.textInput}
                value={partyDetails.location}
                editable={false} // Make it read-only
              />
              <TextInput
                style={styles.textInput}
                value={`Status: ${partyDetails.status}`}
                editable={false} // Make it read-only
              />
              <TextInput
                style={styles.textInput}
                value={`Countdown: ${partyDetails.countdown}`}
                editable={false} // Make it read-only
              />
              <TextInput
                style={styles.textInput}
                value={`Theme: ${partyDetails.theme}`}
                editable={false} // Make it read-only
              />
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setModalVisible(false)} // Close modal on press
              >
                <Text style={styles.textStyle}>Close</Text>
              </Pressable>
            </View>
          </View>
        </Modal>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15, // Increased padding for the container
    backgroundColor: "#fff", // Background color for the view
  },
  head_title: {
    color: "red",
    fontSize: 18, // Increased font size
    marginTop: 10,
    marginStart: 10,
  },
  searchContainer: {
    position: "relative", // Positioning context for the text
    marginTop: 15, // Increased margin from the title
  },
  searchBar: {
    height: 45, // Increased height of the search bar
    backgroundColor: "#e0e0e0", // Light gray background
    borderRadius: 10, // More rounded corners
    paddingHorizontal: 15, // Increased padding
    fontSize: 18, // Larger font size for the input
  },
  viewingText: {
    fontSize: 14, // Viewing text remains the same size
    color: "black", // Text color
    marginTop: 10, // Increased margin from the search bar
    marginStart: 10, // Align with the search bar
  },
  seeAllText: {
    position: "absolute", // Position the text absolutely within the search container
    right: 15, // Align to the right of the search bar
    top: 12, // Adjusted to vertically center in the search bar
    color: "red", // Text color for the See All text
    fontSize: 16, // Increased font size for the See All text
  },
  partyCard: {
    height: 120, // Increased height of the card
    flexDirection: "row", // Horizontal layout for the card
    alignItems: "center", // Vertically center the items
    backgroundColor: "#f9f9f9", // Light background for the card
    padding: 20, // Increased padding inside the card
    marginVertical: 12, // Increased space between cards
    borderRadius: 15, // More rounded corners
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
    elevation: 5,
  },
  avatar: {
    width: 60, // Increased avatar size
    height: 60,
    borderRadius: 30, // Round the avatar container
    backgroundColor: "#e0e0e0", // Light gray background
    justifyContent: "center", // Center icon horizontally
    alignItems: "center", // Center icon vertically
    marginRight: 15, // More space between avatar and text
  },
  partyInfo: {
    flex: 1, // Take up the remaining space
  },
  partyUsername: {
    fontSize: 16, // Font size unchanged
    fontWeight: "bold",
    color: "#000",
  },
  participants: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: 10, // More spacing between username and participants
  },
  participantAvatar: {
    width: 35, // Increased size of participant avatars
    height: 35,
    borderRadius: 17.5, // Rounded avatars
    backgroundColor: "#e0e0e0", // Light gray background
    justifyContent: "center", // Center icon horizontally
    alignItems: "center", // Center icon vertically
    marginRight: -10, // Overlap the participant avatars
    borderWidth: 2,
    borderColor: "#fff",
  },
  moreParticipants: {
    fontSize: 14, // Same size as before
    color: "#e74c3c",
    marginLeft: 15, // Increased margin from avatars
  },
  partyDetailsText: {
    fontSize: 12, // Same size as before
    color: "#888",
    marginLeft: 10, // Increased margin from participant count
  },
  viewDetailsButton: {
    backgroundColor: "red",
    paddingVertical: 5, // Decreased vertical padding
    paddingHorizontal: 10, // Decreased horizontal padding
    borderRadius: 5, // Slightly rounded button
    marginTop: 10, // More margin from the participant list
    alignSelf: "flex-start", // Align the button to the left
  },
  viewDetailsText: {
    color: "#fff",
    fontSize: 14, // Font size unchanged
  },
  centeredView: {
    flex: 1,
    justifyContent: "flex-end", // Align the modal at the bottom
    alignItems: "center", // Center horizontally
    backgroundColor: "rgba(0, 0, 0, 0.5)", // Add some transparency for the background
  },
  modalView: {
    width: "100%", // Take full width
    backgroundColor: "white",
    borderTopLeftRadius: 20, // Rounded corners at the top
    borderTopRightRadius: 20, // Rounded corners at the top
    padding: 20, // Adjust padding for content
    alignItems: "center", // Center content horizontally
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 15,
  },
  textInput: {
    width: "100%",
    fontSize: 16,
    padding: 10,
    marginVertical: 5,
    backgroundColor: "#f0f0f0",
    borderRadius: 5,
  },
  button: {
    borderRadius: 10,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    backgroundColor: "#2196F3",
  },
  textStyle: {
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});
