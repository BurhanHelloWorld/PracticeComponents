import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Home from '../screens/Welcome/Home'
import AstroConsult from '../screens/AstroConsult'
import Profile from '../screens/Profile/Profile'
import TopNavigator from './TopNavigator'
import { SVG } from '../assets/svg'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Language from '../screens/Welcome/Language'

const BottomNavigator = () => {

  const Bottom = createBottomTabNavigator()

  return (
    <Bottom.Navigator screenOptions={{ headerShown: false }}>
      <Bottom.Screen name="Home" component={Home}
        options={{
          tabBarIcon: (({ focused }) => {
            return (
              <View>
                {
                  focused ?
                    <SVG.Home_Active height={25} width={25} />
                    :
                    <SVG.Home height={20} width={20} />
                }
              </View>
            )
          })
        }} />
      <Bottom.Screen name="Astroconsult" component={AstroConsult}
        options={{
          tabBarIcon: (({ focused }) => {
            return (
              <View>
                {
                  focused ?
                    <SVG.Astro_Active height={25} width={25}/>
                    :
                    <SVG.Astro height={20} width={20} />
                }
              </View>
            )
          })
        }}
      />
      <Bottom.Screen name='History' component={TopNavigator}
        options={{
          tabBarIcon: (({ focused }) => {
            return (
              <View>
                {
                  focused ?
                    <SVG.History_Active height={25} width={25} />
                    :
                    <SVG.History height={20} width={20} />
                }
              </View>
            )
          })
        }}
      />
      <Bottom.Screen name='Profile' component={ProfileNavigator}
        options={{
          tabBarIcon: (({ focused }) => {
            return (
              <View>
                {
                  focused ?
                    <SVG.User_Active height={25} width={25} />
                    :
                    <SVG.User height={20} width={20} />
                }
              </View>
            )
          })
        }}
      />
    </Bottom.Navigator>
  )
}

export default BottomNavigator



const ProfileNavigator = () => {

  const Stack = createNativeStackNavigator()

  return (
      <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='Profile'component={Profile}/>
          <Stack.Screen name='Language' component={Language} />
          {/* <Stack.Screen name='HomeScreenPages'component={HomeScreenPages}/> */}
      </Stack.Navigator>
  )
}

const styles = StyleSheet.create({})