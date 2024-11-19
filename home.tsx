import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, TouchableWithoutFeedback } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { AntDesign } from '@expo/vector-icons'; // Ensure to install react-native-vector-icons
import { WebView } from 'react-native-webview'; // Import WebView

type HomeScreenProps = {
  navigation: StackNavigationProp<any, 'Home'>;
};

const HomeScreen: React.FC<HomeScreenProps> = ({ navigation }) => {
  const [menuVisible, setMenuVisible] = useState(false);

  const toggleMenu = () => {
    setMenuVisible(!menuVisible);
  };

  // Close the menu
  const closeMenu = () => {
    setMenuVisible(false);
  };

  // Navigate to WebViewScreen with the local HTML file
  const handleLinkPress = () => {
    const url = 'file:///C:/Users/RC_Student_lab/Documents/empowering%20the%20nation/six%20weeks%20course.html'; // Local file path
    navigation.navigate('WebViewScreen', { url }); // Pass the local file URL to the WebView screen
  };

  return (
    <TouchableWithoutFeedback onPress={closeMenu}>
      <View style={styles.container}>
        {/* Hamburger icon positioned at the top left */}
        <TouchableOpacity style={styles.hamburgerIcon} onPress={toggleMenu}>
          <AntDesign name="menu-unfold" size={24} color="black" />
        </TouchableOpacity>

        {/* Logo Image */}
        <Image source={require('./images/logo.png')} style={styles.logo} />

        <Text style={styles.title}>Empowering the Nation</Text>
        <Text style={styles.subtitle}>Upskilling domestic workers and gardeners since 2018.</Text>
        
        <View style={styles.buttonContainer}>
          <Text style={styles.link} onPress={() => navigation.navigate('Apply')}>
            Apply
          </Text>
          <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
            Login
          </Text>
        </View>

        {/* External URL link */}
        <TouchableOpacity onPress={handleLinkPress}>
          <Text style={styles.link}>Visit Our Website</Text>
        </TouchableOpacity>

        {/* Conditional rendering of links */}
        {menuVisible && (
          <View style={styles.linksContainer}>
            <Text style={styles.link} onPress={() => navigation.navigate('SixWeekCourses')}>
              View Six-Week Courses
            </Text>
            <Text style={styles.link} onPress={() => navigation.navigate('SixMonthCourses')}>
              View Six-Month Courses
            </Text>
            <Text style={styles.link} onPress={() => navigation.navigate('AllCoursesDetail')}>
              View All Courses Details
            </Text>

            {/* Course links */}
            {['Child Minding', 'Cooking', 'First Aid'].map(course => (
              <Text
                key={course}
                style={styles.courseLink}
                onPress={() => navigation.navigate('CourseDetails', { courseName: course })}
              >
                {course}
              </Text>
            ))}

            {/* Fees calculator link */}
            <Text style={styles.link} onPress={() => navigation.navigate('CalculateFees')}>
              Calculate Fees
            </Text>
          </View>
        )}
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: 'pink',
    flex: 1,
    justifyContent: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    alignSelf: 'center',
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#32CD32',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    marginBottom: 20,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  hamburgerIcon: {
    position: 'absolute',
    left: 20,  // Positioning icon on the left side
    top: 20,
  },
  linksContainer: {
    position: 'absolute', // Position relative to the hamburger icon
    left: 20,
    top: 60, // Adjust to position below the hamburger icon
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
    elevation: 2,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowRadius: 5,
    shadowOffset: {
      width: 0,
      height: 2,
    },
  },
  link: {
    fontSize: 18,
    color: 'blue',
    marginVertical: 5,
    paddingVertical: 10,
  },
  courseLink: {
    fontSize: 18,
    color: 'blue',
    marginVertical: 5,
    paddingVertical: 10,
  },
});

export default HomeScreen;
