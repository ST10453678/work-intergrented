import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RouteProp } from '@react-navigation/native';

// Define the types for the params
type FeesDetailsScreenProps = {
  navigation: StackNavigationProp<any, 'FeesDetails'>;
  route: RouteProp<{ params: { totalFees: number; discountMessage: string } }, 'params'>;
};

const FeesDetailsScreen: React.FC<FeesDetailsScreenProps> = ({ navigation, route }) => {
  const { totalFees, discountMessage } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Fees Details</Text>
      <Text style={styles.totalFees}>Total Fees: R{totalFees.toFixed(2)}</Text>
      <Text style={styles.discountMessage}>{discountMessage}</Text>

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
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#32CD32',
  },
  totalFees: {
    fontSize: 18,
    marginBottom: 10,
  },
  discountMessage: {
    fontSize: 16,
    color: 'red',
    marginBottom: 20,
  },
});

export default FeesDetailsScreen;
