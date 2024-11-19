import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

// Import screens
import HomeScreen from './home';
import SixMonthCoursesScreen from './sixmonth';
import SixWeekCoursesScreen from './sixweek';
import CourseDetailsScreen from './coursedetail';
import AllCoursesDetailScreen from './allcourse'; 
import CalculateFeesScreen from './feescalculator';
import FeesDetailsScreen from './feesdetails'; // Import the new FeesDetailsScreen
import ContactScreen from './contact';
import ApplyScreen from './Register';  
import LoginScreen from './sign in'; 

const Stack = createStackNavigator();

const App: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="SixMonthCourses" component={SixMonthCoursesScreen} />
        <Stack.Screen name="SixWeekCourses" component={SixWeekCoursesScreen} />
        <Stack.Screen name="CourseDetails" component={CourseDetailsScreen} />
        <Stack.Screen name="CalculateFees" component={CalculateFeesScreen} />
        <Stack.Screen name="FeesDetails" component={FeesDetailsScreen} />
        <Stack.Screen name="Contact" component={ContactScreen} />
        <Stack.Screen name="Apply" component={ApplyScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="AllCoursesDetail" component={AllCoursesDetailScreen} />
        
        {/* WebViewScreen for handling local HTML files */}
    
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
