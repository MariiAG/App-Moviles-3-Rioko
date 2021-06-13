import React from 'react';
import LoginScreen from './src/auth/login/LoginScreen';
import HomeScreen from './src/sessions/home/HomeScreen';
import BookingScreen from './src/sessions/home/BookingScreen';
import InvitedScreen from './src/sessions/invited/InvitedScreen';
import ListBookings from './src/sessions/invited/ListBookingsScreen';
import ApartmentViewScreen from './src/sessions/invited/ApartmentViewScreen';
import AmphitryonScreen from './src/sessions/amphitryon/AmphitryonScreen';
import CreateApartment from './src/sessions/amphitryon/CreateApartment';
import UpdateApartment from './src/sessions/amphitryon/UpdateApartment';
import ListApartmentScreen from './src/sessions/amphitryon/ListApartmentScreen';
import CreateUserScreen from './src/auth/create-user/CreateUserScreen';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { View } from 'react-native';

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

const App = () => {
  return (
      <NavigationContainer>
          <Stack.Navigator>
            <Stack.Screen name="Login" component={LoginScreen} options={{headerShown: false}} />
            <Stack.Screen name="Registrarme" component={CreateUserScreen} options={{headerShown: false}} /> 
            <Stack.Screen name="Home" component={HomeScreen} options={{headerShown: false}} />
            <Stack.Screen name="Booking" component={BookingScreen} options={{headerShown: false}} />
            <Stack.Screen name="Invited" component={InvitedScreen} options={{headerShown: false}} />
            <Stack.Screen name="ListBookings" component={ListBookings} options={{headerShown: false}} />
            <Stack.Screen name="ApartmentViewScreen" component={ApartmentViewScreen} options={{headerShown: false}} />
            <Stack.Screen name="Amphitryon" component={AmphitryonScreen} options={{headerShown: false}} />
            <Stack.Screen name="CreateApartment" component={CreateApartment} options={{headerShown: false}} />
            <Stack.Screen name="ListApartments" component={ListApartmentScreen} options={{headerShown: false}} />
            <Stack.Screen name="UpdateApartment" component={UpdateApartment} options={{headerShown: false}} />
          </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;

ApartmentViewScreen


