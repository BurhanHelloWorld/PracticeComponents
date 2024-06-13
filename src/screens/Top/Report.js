import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextLable from '../../components/reusable/customLables/TextLable'
import { BACKGROUND_COLOR, BTNRADIUS, FONTCOLOR, FONTWEIGHT, HEADERTXT } from '../../enums/CustomStyles'
import HeaderBtns from '../../components/reusable/HeaderBtns'
import CustomBtn from '../../components/reusable/customBtns/CustomBtn'
import { CallData } from '../../assets/Data/Dummydata'

const Report = () => {

  const renderView = ({ item }) => {
    return (
      <View style={styles.flatContainer}>
        <View style={{ flexDirection: 'row' }}>
          <View style={styles.imgView}>
            <Image
              source={require('../../assets/images/home/Gradient.png')}
              style={styles.img}
            />
          </View>
          <View style={styles.midTxtView}>
            <TextLable
              Title={item.name}
              color={FONTCOLOR.Black}
              weight={FONTWEIGHT.NORMAL}
            />
            <TextLable
              Title={item.date}
              weight={FONTWEIGHT.NORMAL}
              color={FONTCOLOR.gray}
              size={11}
            />
          </View>
          <View style={styles.BtnView}>
            <CustomBtn
              title={"Unblock"}
              color={BACKGROUND_COLOR.LightGray}
              radius={BTNRADIUS.min}
              width={'80%'}
              fontcolor={FONTCOLOR.Black}
            />
          </View>
        </View>
        <View style={styles.line}></View>
      </View>
    )
  }

  return (
    <View style={styles.container}>

      <View style={{ flexDirection: "row", alignItems: 'center', justifyContent: 'space-between', marginVertical: 10 }}>
        <TextLable
          Title={"Your have reported"}
          color={FONTCOLOR.Black}
          weight={FONTWEIGHT.HARD}
        />
        <TextLable
          Title={"05 Astrologers"}
          weight={FONTWEIGHT.NORMAL}
          color={FONTCOLOR.gray}
        />
      </View>

      <FlatList
        data={CallData}
        renderItem={renderView}
      />
    </View>
  )
}

export default Report

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff'
  },
  flatContainer: {
    flex: 1,
    marginTop: 15
  },
  imgView: {
    flex: 1
  },
  img: {
    height: 70,
    width: 70
  },
  midTxtView: {
    flex: 1,
    justifyContent: 'space-evenly'
  },
  BtnView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end'
  },
  line: {
    width: '100%',
    borderBottomWidth: 0.5,
    marginTop: 15
  }
})