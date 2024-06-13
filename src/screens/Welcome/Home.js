import { Dimensions, ScrollView, StyleSheet, View } from 'react-native'
import React from 'react'
import TextLable from '../../components/reusable/customLables/TextLable'
import { En } from '../../locales/En'
import { BACKGROUND_COLOR, BTNRADIUS, FONTCOLOR, FONTWEIGHT, HEADERTXT } from '../../enums/CustomStyles'
import InputField from '../../components/reusable/customInputs/InputField'
import CustomLangBtns from '../../components/reusable/customBtns/CustomLangBtns'
import HomeScreenPages from '../../components/reusable/HomeScreenPages'
import HomeTop from '../../components/reusable/HomeTop'
import { ASTROLOGERS_DATA, SERVICES, VEDIC_EXPERT } from '../../assets/Data/Dummydata'
import HomeFooter from '../../components/reusable/HomeFooter'
import HomeFooterEnd from '../../components/reusable/HomeFooterEnd'
import HeaderBtns from '../../components/reusable/HeaderBtns'


const Home = ({ navigation }) => {

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={{ flex: 1 }}>

          <View style={{ padding: 10 }}>
            {/* Header */}
            <View style={styles.Header}>
              <TextLable
                Title={En.homeHeader}
                size={HEADERTXT.BIGSIZE}
                color={FONTCOLOR.Black}
                weight={FONTWEIGHT.HARD}
              />
              <HeaderBtns onClick={() => navigation.navigate('MyWallet')} fontcolor={"#000"} />
            </View>
            {/* End */}

            {/* Input */}
            <View style={styles.inputView}>
              <InputField
                Holder={En.homeholder}
                keyboard={"default"}
                color={FONTCOLOR.Black}
              />
            </View>
            {/* End */}

            {/* categories services */}
            <View style={{ flex: 1 }}>

              <View style={styles.servicesView}>
                {SERVICES.map((item,index) => {
                  return (
                    <View style={{ width: '30%', margin: "1.5%" }} key={index}>
                      <CustomLangBtns
                        color={BACKGROUND_COLOR.LightGray}
                        onClick={() => navigation.navigate(item.screen)}
                        height={80}
                        img={item.img}
                      />
                      <TextLable
                        Title={item.title}
                        allign={"center"}
                        weight={FONTWEIGHT.NORMAL}
                        color={FONTCOLOR.Black}
                      />
                    </View>
                  )
                })}
              </View>

            </View>
            {/* End */}
          </View>

          {/* PagingView */}
          <View style={{ marginVertical: 30 }}>

            <HomeScreenPages />

          </View>
          {/* End */}

          <View>

            {/* // Top Astrologers */}
            <View style={styles.AstroView}>
              <View style={styles.AstroInnerView}>
                <TextLable
                  Title={"Top Astrologers"}
                  weight={FONTWEIGHT.HARD}
                  size={HEADERTXT.NORMALSIZE}
                  color={FONTCOLOR.Black}
                />
                <TextLable
                  Title={"See all"}
                  weight={FONTWEIGHT.HARD}
                  size={HEADERTXT.SMALLSIZE}
                  color={BACKGROUND_COLOR.Yellow}
                />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                >

                  {
                    ASTROLOGERS_DATA.map((item, index) => {
                      return (
                        <HomeTop
                          key={index}
                          Name={item.Name}
                          Rating={item.Rating}
                          ago={item.ago}
                          img={item.img}
                        />
                      )
                    })
                  }

                </ScrollView>
              </View>
            </View>
            {/* End */}

            {/* // Vedic Expert */}
            <View style={styles.AstroView}>
              <View style={styles.AstroInnerView}>
                <TextLable
                  Title={"Vedic Expert"}
                  weight={FONTWEIGHT.HARD}
                  size={HEADERTXT.NORMALSIZE}
                  color={FONTCOLOR.Black}
                />
                <TextLable
                  Title={"See all"}
                  weight={FONTWEIGHT.HARD}
                  size={HEADERTXT.SMALLSIZE}
                  color={BACKGROUND_COLOR.Yellow}
                />
              </View>
              <View style={{ flexDirection: 'row' }}>
                <ScrollView
                  horizontal
                  showsHorizontalScrollIndicator={false}
                >

                  {VEDIC_EXPERT.map((item, index) => {
                    return (
                      <HomeTop
                        key={index}
                        Name={item.Name}
                        Rating={item.Rating}
                        ago={item.ago}
                        img={item.img}
                      />
                    )
                  })}

                </ScrollView>
              </View>
            </View>
            {/* End */}

            <View style={{ marginVertical: 20 }}>
              <HomeFooter />
            </View>

            <View style={{ marginTop: 20 }}>
              <HomeFooterEnd
                color={'#fff'}
              />
            </View>

          </View>
        </View>
      </ScrollView>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // padding: 10

  },
  Header: {
    flexDirection: 'row',
    marginVertical: 5,
    padding: 5
  },
  inputView: {
    borderWidth: 0.5,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    height: 52,
    borderRadius: BTNRADIUS.gmax,
    marginVertical: 15
  },
  HeaderBtnView: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'flex-end'
  },
  servicesView: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center'
  },
  servicesBtnView: {
    flexDirection: 'row'
  },
  servicesBtn: {
    flex: 1, margin: 5
  },
  img: {
    height: Dimensions.get('screen').width * 0.6,
    width: Dimensions.get('screen').width * 0.9,
    marginHorizontal: 10,
    marginTop: 70
    // padding: 10
  },
  AstroView: {
    marginVertical: 5,
    padding: 10,
    backgroundColor: '#fff'
  },
  AstroInnerView: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
})