import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Main from './screens/MainComponent';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'expo-status-bar';

export default function App() {

return (
  <NavigationContainer>
    <Main />
  </NavigationContainer>
   ); 
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); 
