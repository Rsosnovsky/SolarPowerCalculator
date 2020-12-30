import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

//components
import Header from './src/components/Header';
import Title from './src/components/Title';

//navigation
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//screens
import HomeScreen from './src/HomeScreen';
import CamperVanPath from './src/CamperVanPath'


const Stack = createStackNavigator();

export default function App() {
  return (
    
      <NavigationContainer>
          <Header/>  
          <Title text={'Solar System Size Calculator'}/>
          
          <Stack.Navigator>
            <Stack.Screen name="Home" component={HomeScreen} options = {{headerShown: false}}/>
            <Stack.Screen name="CamperVan" component = {CamperVanPath} options = {{headerShown: false}}/>
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
