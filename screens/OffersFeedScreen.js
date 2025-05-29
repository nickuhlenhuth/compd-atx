import React from 'react';
import { StyleSheet, View, Text, Image, ScrollView, TouchableOpacity } from 'react-native';
import { signOut } from 'firebase/auth';
import { auth } from '../firebase';

const offers = [
  {
    id: 1,
    restaurantName: "Joe's Pizza",
    reward: "20% off on all orders",
    deliverable: "Valid on orders above $30",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?w=500&q=80"
  },
  {
    id: 2,
    restaurantName: "Sushi Master",
    reward: "Free California Roll",
    deliverable: "With purchase of any combo meal",
    image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?w=500&q=80"
  },
  {
    id: 3,
    restaurantName: "Burger House",
    reward: "Buy 1 Get 1 Free",
    deliverable: "On all signature burgers",
    image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&q=80"
  }
];

const OffersFeedScreen = ({ navigation }) => {
  const handleLogout = async () => {
    try {
      await signOut(auth);
      navigation.replace('Login');
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Restaurant Offers</Text>
        <TouchableOpacity onPress={handleLogout} style={styles.logoutButton}>
          <Text style={styles.logoutText}>Logout</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.scrollView}>
        {offers.map(offer => (
          <View key={offer.id} style={styles.offerCard}>
            <Image
              source={{ uri: offer.image }}
              style={styles.offerImage}
            />
            <View style={styles.offerContent}>
              <Text style={styles.restaurantName}>{offer.restaurantName}</Text>
              <Text style={styles.reward}>{offer.reward}</Text>
              <Text style={styles.deliverable}>{offer.deliverable}</Text>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 16,
    backgroundColor: '#fff',
    borderBottomWidth: 1,
    borderBottomColor: '#ddd',
  },
  headerTitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  logoutButton: {
    padding: 8,
  },
  logoutText: {
    color: '#007AFF',
  },
  scrollView: {
    flex: 1,
    padding: 16,
  },
  offerCard: {
    backgroundColor: '#fff',
    borderRadius: 12,
    marginBottom: 16,
    overflow: 'hidden',
    elevation: 2,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
  offerImage: {
    width: '100%',
    height: 200,
  },
  offerContent: {
    padding: 16,
  },
  restaurantName: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  reward: {
    fontSize: 16,
    color: '#007AFF',
    marginBottom: 4,
  },
  deliverable: {
    fontSize: 14,
    color: '#666',
  },
});

export default OffersFeedScreen; 