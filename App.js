import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Login from './src/screens/Welcome/Login'
import OTP from './src/screens/Welcome/OTP'
import { NavigationContainer } from '@react-navigation/native'
import StackNavigator from './src/navigation/StackNavigator'
// import Login from './src/screens/Login'

const App = () => {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  )
}

export default App

const styles = StyleSheet.create({
  container:{
    flex:1
  }
})