import { FlatList, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextLable from '../../components/reusable/customLables/TextLable'
import { En } from '../../locales/En'
import { BTNRADIUS, FONTCOLOR, FONTWEIGHT, HEADERTXT } from '../../enums/CustomStyles'
import HeaderBtns from '../../components/reusable/HeaderBtns'
import CustomBtn from '../../components/reusable/customBtns/CustomBtn'
import { CallData } from '../../assets/Data/Dummydata'

const Chat = () => {


  const renderView = ({ item }) => {
    return (
      <View style={styles.Box}>

        <View style={styles.BoxHeader}>
          <TextLable
            Title={item.transactonNo}
            size={HEADERTXT.NORMALSIZE}
            weight={FONTWEIGHT.NORMAL}
            color={FONTCOLOR.gray}
          />
          <CustomBtn
            title={item.status}
            color={
              item.status == "Success"
                ? "lightgreen"
                : 'pink'
            }
            width={"22%"}
            radius={BTNRADIUS.max}
            fontcolor={FONTCOLOR.Black}
          />
        </View>

        <View style={styles.BoxCenter}>
          <View>
            <TextLable
              Title={item.name}
              color={FONTCOLOR.Black}
              weight={FONTWEIGHT.HARD}
            />
            <TextLable
              Title={item.date}
              weight={FONTWEIGHT.NORMAL}
              color={FONTCOLOR.gray}
            />
            <TextLable
              Title={item.rating}
              weight={FONTWEIGHT.HARD}
              color={FONTCOLOR.gray}
            />
          </View>
          <View>
            <Image
              source={require("../../assets/images/home/Career.png")}
              style={styles.img}
            />
          </View>
        </View>
        <View style={styles.Boxline}></View>
        <View style={styles.BoxFooter}>
          <View style={{ flex: 1 }}>
            <View>
              <TextLable
                Title={"SESSION TYPE"}
                color={FONTCOLOR.gray}
                margin={5}
                size={12}
              />
            </View>
            <View>
              <TextLable
                Title={item.sessiontype}
                margin={5}
                color={FONTCOLOR.Black}
                weight={FONTWEIGHT.NORMAL}
              />
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <View>
              <TextLable
                Title={"DURATION"}
                color={FONTCOLOR.gray}
                margin={5}
                size={12}
              />
            </View>
            <View>
              <TextLable
                Title={item.duration}
                margin={5}
                color={FONTCOLOR.Black}
                weight={FONTWEIGHT.NORMAL}
              />
            </View>
          </View>
          <View style={{ flex: 1 }}>
            <View>
              <TextLable
                Title={"AMOUNT CHARGED"}
                color={FONTCOLOR.gray}
                margin={5}
                size={12}
              />
            </View>
            <View>
              <TextLable
                Title={item.charges}
                margin={5}
                color={FONTCOLOR.Black}
                weight={FONTWEIGHT.NORMAL}
              />
            </View>
          </View>
        </View>
      </View>
    )
  }

  return (
    <View style={styles.container}>


      <FlatList
        data={CallData}
        renderItem={renderView}
        showsVerticalScrollIndicator={false}
      />

    </View>
  )
}

export default Chat

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 15,
    backgroundColor: '#fff'
  },
  Box: {
    marginVertical: 10,
    padding: 5,
    backgroundColor: '#fff',
    elevation: 4,
    borderRadius: 12,
    margin:5
  },
  BoxHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 10
  },
  BoxCenter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  Boxline: {
    borderBottomWidth: 0.5,
    width: '100%',
    marginVertical: 15
  },
  img: {
    height: 70,
    width: 70,
    borderRadius: 12
  },
  BoxFooter: {
    flexDirection: 'row'
  }
})