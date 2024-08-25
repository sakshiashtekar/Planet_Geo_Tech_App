import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import WelcomeScreen from './screens/WelcomeScreen';
import SignupScreen from './screens/SignupScreen';
import LoginScreen from './screens/LoginScreen';
import EmployeeDetailsScreen from './screens/EmployeeDetailsScreen';
import HomeScreen from './screens/HomeScreen';
import AttendanceRecordScreen from './screens/AttendanceRecordScreen';
import AttendancePhotoScreen from './screens/AttendancePhotoScreen';
import MonthlyAttendanceScreen from './screens/MonthlyAttendanceScreen';

const Stack = createStackNavigator();


function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Welcome">
        <Stack.Screen name="Welcome" component={WelcomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Signup" component={SignupScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Login" component={LoginScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="EmployeeDetails" component={EmployeeDetailsScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="Home" component={HomeScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="AttendanceRecord" component={AttendanceRecordScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="AttendancePhoto" component={AttendancePhotoScreen} options={{ headerShown: false }}/>
        <Stack.Screen name="MonthlyAttendance" component={MonthlyAttendanceScreen} options={{ headerShown: false }}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
