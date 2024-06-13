import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs'
import Chat from '../screens/Top/Chat'
import Call from '../screens/Top/Call'
import Report from '../screens/Top/Report'
import TextLable from '../components/reusable/customLables/TextLable'
import { BACKGROUND_COLOR, FONTCOLOR, FONTWEIGHT, HEADERTXT } from '../enums/CustomStyles'
import HeaderBtns from '../components/reusable/HeaderBtns'

const TopNavigator = () => {

  const Top = createMaterialTopTabNavigator()

  return (
    <View style={{flex:1,backgroundColor:'#fff'}}>
      <View style={styles.Header}>
        <TextLable
          Title={"History"}
          size={HEADERTXT.BIGSIZE}
          color={FONTCOLOR.Black}
          weight={FONTWEIGHT.HARD}
        />
        <HeaderBtns fontcolor={FONTCOLOR.Black} />
      </View>
      <Top.Navigator>
        <Top.Screen name="Chat" component={Chat} />
        <Top.Screen name="Call" component={Call} />
        <Top.Screen name="Report" component={Report} />
      </Top.Navigator>
    </View>
  )
}

export default TopNavigator

const styles = StyleSheet.create({
  Header: {
    flexDirection: 'row',
    marginVertical: 5,
    padding: 15,
    backgroundColor:'#fff',
    borderBottomWidth:0.5,
    borderColor:BACKGROUND_COLOR.LightGray
  },
})