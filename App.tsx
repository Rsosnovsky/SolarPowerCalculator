import React, { useState } from 'react';
import { StyleSheet } from 'react-native';

//components
import Header from './src/components/Header';

//screens
import HomeScreen from './src/HomeScreen';
import ResultsScreen from './src/ResultsScreen'; 

//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

const Stack = createStackNavigator();

export default function App() {
 
  return (
    <NavigationContainer>
      <Header />
      <h1 style = {{textAlign: 'center'}}>Solar System Size Calculator</h1>

      <Stack.Navigator>

      <Stack.Screen name="Home" component={HomeScreen}  options = {{headerShown: false}}/>
      <Stack.Screen name="ResultsScreen" component={ResultsScreen} options = {{headerShown: false}}/>
      
  
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  
});
