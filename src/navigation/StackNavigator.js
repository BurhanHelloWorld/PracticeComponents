import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Login from '../screens/Welcome/Login'
import OTP from '../screens/Welcome/OTP'
import Language from '../screens/Welcome/Language'
import BottomNavigator from './BottomNavigator'
import TarotCard from '../screens/Services/TarotCard'
import Kundali from '../screens/Services/Kundali'
import CreateKundali from '../screens/Services/CreateKundali'
import Horoscoope from '../screens/Services/Horoscoope'
import MyWallet from '../screens/wallet/MyWallet'
import Topup from '../screens/wallet/Topup'
import Love from '../screens/Services/Love'
import Career from '../screens/Services/Career'
import AllServices from '../screens/Services/AllServices'
import HelpSupport from '../screens/Profile/HelpSupport'
import ProfileDetails from '../screens/Profile/ProfileDetails'
import UserDetails from '../screens/Welcome/userdetails/UserDetails'
import SplashScreen from '../screens/splash/SplashScreen'
import Testing from '../screens/Testing'

const StackNavigator = () => {

    const Stack = createNativeStackNavigator()

    return (
        <Stack.Navigator screenOptions={{ headerShown: false }}>
            {/* <Stack.Screen name="Testing" component={Testing}/> */}
            <Stack.Screen name="SplashScreen" component={SplashScreen}/>
            <Stack.Screen name='Login' component={Login}/>
            <Stack.Screen name='OTP' component={OTP}/>
            <Stack.Screen name='Bottom'component={BottomNavigator}/>
            <Stack.Screen name='TarotCard' component={TarotCard}/>
            <Stack.Screen name='Love' component={Love}/>
            <Stack.Screen name='Career' component={Career}/>
            <Stack.Screen name='Kundali' component={Kundali}/>
            <Stack.Screen name="CreateKundali" component={CreateKundali}/>
            <Stack.Screen name="Horoscope" component={Horoscoope}/>
            <Stack.Screen name='Language' component={Language} />
            <Stack.Screen name="MyWallet" component={MyWallet}/>
            <Stack.Screen name="Topup" component={Topup}/>
            <Stack.Screen name="AllServices" component={AllServices}/>
            <Stack.Screen name='HelpSupport' component={HelpSupport}/>
            <Stack.Screen name="ProfileDetails" component={ProfileDetails}/>
            <Stack.Screen name='UserDetails' component={UserDetails}/>
        </Stack.Navigator>
    )
}

export default StackNavigator

const styles = StyleSheet.create({})