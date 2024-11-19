import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native'; // Importing useNavigation

// Import course images
const courseImages = {
  "Sewing": require('./images/sewing.jpg'),
  "Landscaping": require('./images/Landscaping.jpg'),
  "Life Skills": require('./images/Life skills.webp'),
  "Child Minding": require('./images/Child Minding.png'),
  "Cooking": require('./images/cooking...jpg'),
  "Garden Maintenance": require('./images/Garden.png'),
};

// Define a type for the courses
interface Course {
  name: string;
  fees: string;
  purpose: string;
  content: string[];
  image: any; // You can use ImageSourcePropType if you want a stricter type
}

const courses: Course[] = [
  {
    name: "Sewing",
    fees: "R1500",
    purpose: "To provide alterations and new garment tailoring services",
    content: [
      "Types of stitches",
      "Threading a sewing machine",
      "Sewing buttons, zips, hems and seams",
      "Alterations",
      "Designing and sewing new garments",
    ],
    image: courseImages["Sewing"],
  },
  {
    name: "Landscaping",
    fees: "R1500",
    purpose: "To provide landscaping services for new and established gardens",
    content: [
      "Indigenous and exotic plants and trees",
      "Fixed structures (fountains, statues, benches, tables, built-in braai)",
      "Balancing of plants and trees in a garden",
      "Aesthetics of plant shapes and colours",
      "Garden layout",
    ],
    image: courseImages["Landscaping"],
  },
  {
    name: "Life Skills",
    fees: "R1500",
    purpose: "To provide skills to navigate basic life necessities",
    content: [
      "Opening a bank account",
      "Basic labour law (know your rights)",
      "Basic reading and writing literacy",
      "Basic numeric literacy",
    ],
    image: courseImages["Life Skills"],
  },
  {
    name: "Child Minding",
    fees: "R750",
    purpose: "To provide basic child and baby care",
    content: [
      "Birth to six-month old baby needs",
      "Seven-month to one year old needs",
      "Toddler needs",
      "Educational toys",
    ],
    image: courseImages["Child Minding"],
  },
  {
    name: "Cooking",
    fees: "R750",
    purpose: "To prepare and cook nutritious family meals",
    content: [
      "Nutritional requirements for a healthy body",
      "Types of protein, carbohydrates and vegetables",
      "Planning meals",
      "Preparation and cooking of meals",
    ],
    image: courseImages["Cooking"],
  },
  {
    name: "Garden Maintenance",
    fees: "R750",
    purpose: "To provide basic knowledge of watering, pruning and planting in a domestic garden.",
    content: [
      "Water restrictions and the watering requirements of indigenous and exotic plants",
      "Pruning and propagation of plants",
      "Planting techniques for different plant types",
    ],
    image: courseImages["Garden Maintenance"],
  },
];

const AllCoursesDetailScreen: React.FC = () => {
  const navigation = useNavigation(); // Initialize useNavigation

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        {courses.map((course, index) => (
          <View key={index} style={styles.courseContainer}>
            <Text style={styles.courseTitle}>{course.name}</Text>
            <Image source={course.image} style={styles.courseImage} />
            <Text style={styles.courseFees}>Fees: {course.fees}</Text>
            <Text style={styles.coursePurpose}>Purpose: {course.purpose}</Text>
            <Text style={styles.courseContentTitle}>Content:</Text>
            {course.content.map((item, i) => (
              <Text key={i} style={styles.courseContent}>- {item}</Text>
            ))}
          </View>
        ))}
      </ScrollView>

      {/* Return button at the bottom */}
      <TouchableOpacity style={styles.returnButton} onPress={() => navigation.navigate('Home')}>
        <Text style={styles.returnButtonText}>Return to Home</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Set the background color for the screen
  },
  scrollContainer: {
    padding: 20,
    paddingBottom: 80, // Add bottom padding to ensure content does not overlap the button
  },
  courseContainer: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 8,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 3,
  },
  courseTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  courseImage: {
    width: '100%', // Adjust as necessary
    height: 150, // Set a height for the images
    borderRadius: 8, // Optional: Adds rounded corners
    marginVertical: 10,
  },
  courseFees: {
    fontSize: 18,
    color: '#555',
  },
  coursePurpose: {
    fontSize: 16,
    marginVertical: 5,
  },
  courseContentTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginVertical: 5,
  },
  courseContent: {
    fontSize: 16,
    color: '#333',
  },
  returnButton: {
    backgroundColor: 'blue', // Change button color to blue
    padding: 15,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 5,
    position: 'absolute', // Position the button at the bottom
    left: 20,
    right: 20,
    bottom: 20, // Positioned at the bottom of the screen
  },
  returnButtonText: {
    color: '#fff', // Text color
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default AllCoursesDetailScreen;
