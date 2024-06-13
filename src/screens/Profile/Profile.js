import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import TextLable from '../../components/reusable/customLables/TextLable'
import { BACKGROUND_COLOR, FONTCOLOR, FONTWEIGHT, HEADERTXT } from '../../enums/CustomStyles'
import CustomBtn from '../../components/reusable/customBtns/CustomBtn'
import CustomLangBtns from '../../components/reusable/customBtns/CustomLangBtns'
import { SVG } from '../../assets/svg'

const Profile = ({ navigation, route }) => {

  const { profileimg } = route.params || {}
  console.log(profileimg)

  const DATA = [
    {
      detail: "Personal details",
      icon: SVG.rightchevron,
      screen: "ProfileDetails"
    },
    {
      detail: "Wallet transactions",
      icon: SVG.rightchevron,
      screen: "MyWallet",
    },
    {
      detail: "Language",
      icon: SVG.rightchevron,
      screen: "Language",
      nextScreen: "Profile",
    },
    {
      detail: "Help & support",
      icon: SVG.rightchevron,
      screen: "HelpSupport"
    },
    {
      detail: "Terms & conditions",
      icon: SVG.rightchevron,
      screen: "Terms"
    },
    {
      detail: "Privacy policy",
      icon: SVG.rightchevron,
      screen: "Policy"
    }
  ]

  const renderView = ({ item }) => {
    return (
      <View style={{ padding: 5, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', borderBottomWidth: 0.5 }}>
        <CustomLangBtns
          title={item.detail}
          height={50}
          border={0}
          weight={'400'}
          fontcolor={FONTCOLOR.Black}
          onClick={() => navigation.navigate(item.screen, { nextScreen: item?.nextScreen && item?.nextScreen })}
        />
        <CustomLangBtns
          title={<item.icon />}
          height={50}
          border={0}
          weight={FONTWEIGHT.HARD}
          fontcolor={FONTCOLOR.Black}
        />
        {/* <SVG.rightchevron/> */}
      </View>
    )
  }


  return (
    <View style={styles.container}>
      <ScrollView
        showsVerticalScrollIndicator={false}
      >
        <View style={{ marginVertical: 15, paddingLeft: 15 }}>
          <TextLable
            Title={"Profile"}
            color={FONTCOLOR.Black}
            weight={FONTWEIGHT.NORMAL}
          />
        </View>
        <View style={{ borderBottomWidth: 0.5, width: '100%' }}></View>

        <View style={{ flexDirection: 'row', paddingLeft: 15, marginVertical: 15, alignItems: 'center' }}>
          {
            profileimg
              ?
              <Image source={{ uri: profileimg }} style={{ height: 80, width: 80, borderRadius: 40 }} />
              :
              <CustomLangBtns
                title={'No'}
                color={BACKGROUND_COLOR.Yellow}
                height={70}
                width={70}
                radius={35}
              />
          }
          <View style={{ marginHorizontal: 10 }}>
            <TextLable
              Title={"Sunil Sharma"}
              color={FONTCOLOR.Black}
              weight={FONTWEIGHT.HARD}
            />
            <TextLable
              Title={"+91-9278367239"}
              color={FONTCOLOR.gray}
            />
          </View>
        </View>

        <View style={{ padding: 15 }}>
          <View style={styles.Box}>
            <FlatList
              data={DATA}
              renderItem={renderView}
              scrollEnabled={false}
            />
          </View>
        </View>
        <View style={{ padding: 15 }}>
          <View style={{ paddingHorizontal: 10, padding: 2, backgroundColor: '#fff5f5', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <CustomLangBtns
              title={"Logout"}
              height={50}
              fontcolor={"red"}
              border={0}
              weight={'500'}
            />
            <SVG.rightchevron />
          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Profile

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  Box: {
    borderRadius: 12,
    borderWidth: 0.5,
    paddingHorizontal: 10,
  }
})