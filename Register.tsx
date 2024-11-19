import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, Alert, TextInput } from 'react-native';
import { Picker } from '@react-native-picker/picker';

const ApplyScreen: React.FC = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState(''); // State for phone number
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState(''); // State for address
  const [selectedCourses, setSelectedCourses] = useState<string[]>([]); // Store selected courses

  // State for error messages
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [addressError, setAddressError] = useState('');

  const courses = [
    { label: 'Select a Course', value: '' },
    { label: 'Child Minding', value: 'Child Minding' },
    { label: 'Cooking', value: 'Cooking' },
    { label: 'Sewing', value: 'Sewing' },
    { label: 'First Aid', value: 'First Aid' },
    { label: 'Landscaping', value: 'Landscaping' },
    { label: 'Life Skills', value: 'Life Skills' },
  ];

  const handleCourseSelection = (course: string) => {
    if (course && !selectedCourses.includes(course)) {
      setSelectedCourses([...selectedCourses, course]);
    } else if (selectedCourses.includes(course)) {
      setSelectedCourses(selectedCourses.filter(c => c !== course));
    }
  };

  const calculateDiscount = (): number => {
    const courseCount = selectedCourses.length;
    let discount = 0;

    if (courseCount === 1) {
      discount = 0; // No discount
    } else if (courseCount === 2) {
      discount = 5; // 5% discount
    } else if (courseCount === 3) {
      discount = 10; // 10% discount
    } else if (courseCount > 3) {
      discount = 15; // 15% discount
    }

    return discount;
  };

  const handleSubmit = () => {
    // Reset error messages
    setNameError('');
    setPhoneError('');
    setEmailError('');
    setAddressError('');

    let valid = true;

    if (!name) {
      setNameError('Name is required.');
      valid = false;
    }
    
    if (!phone) {
      setPhoneError('Phone number is required.');
      valid = false;
    }
    
    if (!email) {
      setEmailError('Email is required.');
      valid = false;
    } else if (!email.endsWith('@gmail.com')) {
      setEmailError('Please provide a valid Gmail address.');
      valid = false;
    }

    if (!address) {
      setAddressError('Address is required.');
      valid = false;
    }

    if (selectedCourses.length === 0) {
      Alert.alert('Error', 'Please select at least one course.');
      valid = false;
    }

    if (valid) {
      const discount = calculateDiscount();
      Alert.alert(
        'Application Submitted',
        `Name: ${name}\nPhone: ${phone}\nEmail: ${email}\nAddress: ${address}\nCourses: ${selectedCourses.join(', ')}\nDiscount: ${discount}%`
      );
      // Perform any further logic such as submitting the data to a server
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Apply for a Course</Text>
      <TextInput
        style={styles.input}
        placeholder="Your Name"
        value={name}
        onChangeText={setName}
      />
      {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Your Phone Number"
        value={phone}
        onChangeText={setPhone}
        keyboardType="phone-pad"
      />
      {phoneError ? <Text style={styles.errorText}>{phoneError}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Your Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Your Address"
        value={address}
        onChangeText={setAddress}
      />
      {addressError ? <Text style={styles.errorText}>{addressError}</Text> : null}

      <Text style={styles.label}>Select Courses:</Text>
      <Picker
        selectedValue=""
        style={styles.picker}
        onValueChange={(itemValue) => handleCourseSelection(itemValue)}
      >
        {courses.map((c, index) => (
          <Picker.Item key={index} label={c.label} value={c.value} />
        ))}
      </Picker>
      <Text>Selected Courses: {selectedCourses.join(', ')}</Text>
      <Button title="Submit Application" onPress={handleSubmit} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'pink',
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#32CD32',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    padding: 10,
    marginVertical: 10,
  },
  label: {
    fontSize: 18,
    marginVertical: 10,
  },
  picker: {
    height: 50,
    width: '100%',
    borderColor: '#ccc',
    borderWidth: 1,
    marginVertical: 10,
  },
  errorText: {
    color: 'red',
    marginBottom: 10,
  },
});

export default ApplyScreen;
