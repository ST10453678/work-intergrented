import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, Image, ScrollView, Alert } from 'react-native';
import { useRoute } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';

// Import course images
const courseImages = {
  'Child Minding': require('./images/Child Minding.png'),
  Cooking: require('./images/cooking...jpg'),
  Sewing: require('./images/sewing.jpg'),
  Landscaping: require('./images/Landscaping.jpg'),
  'Life Skills': require('./images/Life skills.webp'),
  'Garden Maintenance': require('./images/Garden.png'),
};

type Course = {
  name: string;
  fee: number;
  image: any;
};

type CalculateFeesScreenProps = {
  navigation: StackNavigationProp<any, 'CalculateFees'>;
};

const CalculateFeesScreen: React.FC<CalculateFeesScreenProps> = ({ navigation }) => {
  const route = useRoute();

  // If params are undefined, no course is pre-selected
  const { selectedCourse, selectedFee } = route.params || {};

  // Initialize selectedCourses from params if they exist, or empty if not
  const [selectedCourses, setSelectedCourses] = useState<Course[]>( 
    selectedCourse ? [{ name: selectedCourse, fee: parseInt(selectedFee), image: courseImages[selectedCourse] }] : []
  );

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [phone, setPhone] = useState<string>('');
  
  // Error messages
  const [nameError, setNameError] = useState<string>('');
  const [emailError, setEmailError] = useState<string>('');
  const [phoneError, setPhoneError] = useState<string>('');

  // List of available courses
  const courses: Course[] = [
    { name: 'Child Minding', fee: 750, image: courseImages['Child Minding'] },
    { name: 'Cooking', fee: 750, image: courseImages.Cooking },
    { name: 'Sewing', fee: 1500, image: courseImages.Sewing },
    { name: 'Landscaping', fee: 1500, image: courseImages.Landscaping },
    { name: 'Life Skills', fee: 1500, image: courseImages['Life Skills'] },
    { name: 'Garden Maintenance', fee: 750, image: courseImages['Garden Maintenance'] },
  ];

  // Handle course selection/deselection
  const handleCourseSelection = (course: Course) => {
    setSelectedCourses((prev) => {
      if (prev.find(c => c.name === course.name)) {
        // Deselect if already selected
        return prev.filter(c => c.name !== course.name);
      } else {
        // Add if not selected
        return [...prev, course];
      }
    });
  };

  // Calculate total fees and discount based on selected courses
  const calculateTotalFees = () => {
    const baseTotal = selectedCourses.reduce((total, course) => total + course.fee, 0);
    let discountMessage = 'No discount is applicable for one course.';

    if (selectedCourses.length === 2) {
      discountMessage = '5% discount applied for two courses.';
      return { totalFees: baseTotal * 0.95, discountMessage };
    } else if (selectedCourses.length === 3) {
      discountMessage = '10% discount applied for three courses.';
      return { totalFees: baseTotal * 0.9, discountMessage };
    } else if (selectedCourses.length > 3) {
      discountMessage = '15% discount applied for more than three courses.';
      return { totalFees: baseTotal * 0.85, discountMessage };
    }

    return { totalFees: baseTotal, discountMessage };
  };

  // Navigate to fees details screen with calculated fees and discount
  const handleCalculateFees = () => {
    // Reset error messages
    setNameError('');
    setEmailError('');
    setPhoneError('');

    // Check if all input fields are filled
    let valid = true;

    if (!name) {
      setNameError('Name is required.');
      valid = false;
    }

    if (!email) {
      setEmailError('Email is required.');
      valid = false;
    } else if (!email.endsWith('@gmail.com')) {
      setEmailError('Please provide a valid Gmail address.');
      valid = false;
    }

    if (!phone) {
      setPhoneError('Phone number is required.');
      valid = false;
    }

    if (!valid) return; // Exit the function if validation fails

    const { totalFees, discountMessage } = calculateTotalFees();
    navigation.navigate('FeesDetails', { totalFees, discountMessage });
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Registration Form</Text>

      {/* Input fields for user information */}
      <TextInput
        style={styles.input}
        placeholder="Name"
        value={name}
        onChangeText={setName}
      />
      {nameError ? <Text style={styles.errorText}>{nameError}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      {emailError ? <Text style={styles.errorText}>{emailError}</Text> : null}

      <TextInput
        style={styles.input}
        placeholder="Phone Number"
        value={phone}
        onChangeText={setPhone}
      />
      {phoneError ? <Text style={styles.errorText}>{phoneError}</Text> : null}

      {/* List of all available courses */}
      <Text style={styles.selectedCoursesTitle}>Available Courses</Text>
      <ScrollView horizontal contentContainerStyle={styles.selectedCoursesContainer}>
        {courses.map((course, index) => (
          <View key={index} style={styles.selectedCourseContainer}>
            <Image source={course.image} style={styles.selectedCourseImage} />
            <Text style={styles.selectedCourseName}>{course.name}</Text>
            <TouchableOpacity onPress={() => handleCourseSelection(course)}>
              <Text style={selectedCourses.some(c => c.name === course.name) ? styles.deselectCourse : styles.selectCourse}>
                {selectedCourses.some(c => c.name === course.name) ? 'Deselect' : 'Select'}
              </Text>
            </TouchableOpacity>
          </View>
        ))}
      </ScrollView>

      {/* Button to calculate fees */}
      <TouchableOpacity style={styles.calculateButton} onPress={handleCalculateFees}>
        <Text style={styles.calculateButtonText}>Calculate Fees</Text>
      </TouchableOpacity>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#f9f9f9',
    flexGrow: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#32CD32',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 5, // Reduced margin for better spacing
    paddingHorizontal: 10,
  },
  selectedCoursesTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  selectedCoursesContainer: {
    flexDirection: 'row',
  },
  selectedCourseContainer: {
    marginRight: 15,
    alignItems: 'center',
  },
  selectedCourseImage: {
    width: 100,
    height: 100,
    borderRadius: 10,
    marginBottom: 5,
  },
  selectedCourseName: {
    fontSize: 16,
  },
  selectCourse: {
    color: '#4CAF50',
    marginTop: 5,
  },
  deselectCourse: {
    color: '#ff0000',
    marginTop: 5,
  },
  calculateButton: {
    marginTop: 20,
    paddingVertical: 10,
    backgroundColor: '#4CAF50',
    borderRadius: 5,
    alignItems: 'center',
  },
  calculateButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  errorText: {
    color: 'red',
    marginBottom: 10, // Spacing below the error text
  },
});

export default CalculateFeesScreen;
