import React from 'react';
import { View, Text, StyleSheet, Button } from 'react-native';

const ContactScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contact Us</Text>
      <Text style={styles.contactText}>Phone: +27 123 456 789</Text>
      <Text style={styles.contactText}>Email: info@empoweringthenation.co.za</Text>
      <Text style={styles.contactText}>Physical Address: Johannesburg, Venue 1, Venue 2, Venue 3</Text>
      
      {/* Return Button */}
      <Button title="Return" onPress={() => navigation.goBack()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'pink',
    flex: 1,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#32CD32',
  },
  contactText: {
    fontSize: 18,
    marginVertical: 10,
    color: '#333',
  },
});

export default ContactScreen;
