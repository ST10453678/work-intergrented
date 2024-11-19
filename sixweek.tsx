import React, { useState } from 'react';
import { View, Text, StyleSheet, Button, ScrollView, Image, TouchableOpacity } from 'react-native';

// Import course images
const courseImages = {
  'Child Minding': require('./images/Child Minding.png'), // Ensure the path and name are correct
  Cooking: require('./images/cooking...jpg'),
  'Garden Maintenance': require('./images/Garden.png'),
};

const SixWeekCoursesScreen: React.FC<{ navigation: any }> = ({ navigation }) => {
  const [selectedCourse, setSelectedCourse] = useState<string | null>(null);

  const sixWeekCourses = [
    {
      name: 'Child Minding',
      fees: '750',
      purpose: 'To provide child care services in homes or early childhood centers.',
      image: courseImages['Child Minding'],
    },
    {
      name: 'Cooking',
      fees: '750',
      purpose: 'To teach basic cooking techniques and meal preparation.',
      image: courseImages.Cooking,
    },
    {
      name: 'Garden Maintenance',
      fees: '750',
      purpose: 'To provide garden maintenance services for homes and businesses.',
      image: courseImages['Garden Maintenance'],
    },
  ];

  const handleApply = (courseName: string, courseFee: string) => {
    // Pass the course name and fee to the CalculateFees screen
    navigation.navigate('CalculateFees', { selectedCourse: courseName, selectedFee: courseFee });
  };

  const handleImagePress = (courseName: string) => {
    console.log(`Navigating to details of ${courseName}`);
    // navigation.navigate('CourseDetails', { courseName }); // Uncomment if you have a CourseDetails screen
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Six-Week Courses</Text>
      <ScrollView contentContainerStyle={styles.scrollViewContent}>
        {sixWeekCourses.map((course, index) => (
          <View key={index} style={styles.courseContainer}>
            <Text style={styles.courseName}>{course.name}</Text>
            <TouchableOpacity onPress={() => handleImagePress(course.name)}>
              <Image source={course.image} style={styles.courseImage} />
            </TouchableOpacity>
            <Text style={styles.courseFees}>Fees: R{course.fees}</Text>
            <Text style={styles.coursePurpose}>{course.purpose}</Text>
            <TouchableOpacity
              style={[
                styles.applyButton,
                { backgroundColor: selectedCourse === course.name ? '#32CD32' : '#4CAF50' },
              ]}
              onPress={() => {
                setSelectedCourse(selectedCourse === course.name ? null : course.name);
              }}
            >
              <Text style={styles.applyButtonText}>
                {selectedCourse === course.name ? "Hide Apply" : "Apply"}
              </Text>
            </TouchableOpacity>
            {selectedCourse === course.name && (
              <TouchableOpacity
                style={styles.submitButton}
                onPress={() => handleApply(course.name, course.fees)}
              >
                <Text style={styles.submitButtonText}>Submit Application</Text>
              </TouchableOpacity>
            )}
          </View>
        ))}
      </ScrollView>
      <Button title="Return" onPress={() => navigation.goBack()} />
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
  scrollViewContent: {
    paddingBottom: 20,
  },
  courseContainer: {
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    marginBottom: 10,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  courseName: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  courseImage: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginVertical: 10,
  },
  courseFees: {
    fontSize: 16,
    color: '#555',
  },
  coursePurpose: {
    fontSize: 14,
    marginVertical: 5,
  },
  applyButton: {
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 15,
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  applyButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
  submitButton: {
    marginTop: 10,
    paddingVertical: 8,
    paddingHorizontal: 20,
    backgroundColor: '#32CD32',
    borderRadius: 5,
    alignItems: 'center',
    alignSelf: 'flex-start',
  },
  submitButtonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});

export default SixWeekCoursesScreen;
