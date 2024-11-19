import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

// Define the course type
type Course = {
  name: string;
  fees: string;
  purpose: string;
  content: string[];
};

// Course data
const courses: Course[] = [
  {
    name: "First Aid",
    fees: "R1500",
    purpose: "To provide first aid awareness and basic life support",
    content: [
      "Wounds and bleeding",
      "Burns and fractures",
      "Emergency scene management",
      "Cardio-Pulmonary Resuscitation (CPR)",
      "Respiratory distress (e.g., Choking, blocked airway)",
    ],
  },
  {
    name: "Sewing",
    fees: "R1500",
    purpose: "To provide alterations and new garment tailoring services",
    content: [
      "Types of stitches",
      "Threading a sewing machine",
      "Sewing buttons, zips, hems, and seams",
      "Alterations",
      "Designing and sewing new garments",
    ],
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
  },
  {
    name: "Child Minding",
    fees: "R750",
    purpose: "To provide basic child and baby care",
    content: [
      "Birth to six-month-old baby needs",
      "Seven-month to one year old needs",
      "Toddler needs",
      "Educational toys",
    ],
  },
  {
    name: "Cooking",
    fees: "R750",
    purpose: "To prepare and cook nutritious family meals",
    content: [
      "Nutritional requirements for a healthy body",
      "Types of protein, carbohydrates, and vegetables",
      "Planning meals",
      "Preparation and cooking of meals",
    ],
  },
  {
    name: "Garden Maintenance",
    fees: "R750",
    purpose: "To provide basic knowledge of watering, pruning, and planting in a domestic garden.",
    content: [
      "Water restrictions and the watering requirements of indigenous and exotic plants",
      "Pruning and propagation of plants",
      "Planting techniques for different plant types",
    ],
  },
];

// Define the props for CourseDetailsScreen
type CourseDetailsScreenProps = {
  route: {
    params: {
      courseName: string;
    };
  };
};

const CourseDetailsScreen: React.FC<CourseDetailsScreenProps> = ({ route }) => {
  const { courseName } = route.params;

  console.log('Route Params:', route.params); // Debugging log

  const course = courses.find(course =>
    course.name.toLowerCase() === courseName?.toLowerCase().trim()
  );

  if (!courseName) {
    return (
      <View style={styles.container}>
        <Text style={styles.errorText}>No course selected.</Text>
      </View>
    );
  }

  return (
    <ScrollView style={styles.container}>
      {course ? (
        <View style={styles.courseContainer}>
          <Text style={styles.courseTitle}>{course.name}</Text>
          <Text style={styles.courseFees}>Fees: {course.fees}</Text>
          <Text style={styles.coursePurpose}>Purpose: {course.purpose}</Text>
          <Text style={styles.courseContentTitle}>Content:</Text>
          {course.content.map((item, index) => (
            <Text key={index} style={styles.courseContent}>- {item}</Text>
          ))}
        </View>
      ) : (
        <Text style={styles.errorText}>Course not found.</Text>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
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
  errorText: {
    fontSize: 16,
    color: 'red',
    textAlign: 'center',
    marginTop: 20,
  },
});

export default CourseDetailsScreen;
