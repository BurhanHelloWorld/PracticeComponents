import { Dimensions, Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BACKGROUND_COLOR, BTNRADIUS, FONTCOLOR, FONTWEIGHT, HEADERTXT } from '../../enums/CustomStyles'
import TextLable from './customLables/TextLable'
import { En } from '../../locales/En'
import CustomBtn from './customBtns/CustomBtn'
import CustomLangBtns from './customBtns/CustomLangBtns'

const HomeFooter = () => {
    return (
        <View>
            <View style={styles.container}>
                <Image source={require('../../assets/images/home/HoroIcons.png')} style={{marginVertical:5}}/>
                <View style={{ marginBottom: 10 }}>
                    <TextLable
                        Title={En.FooterBox}
                        size={HEADERTXT.BIGSIZE}
                        weight={FONTWEIGHT.HARD}
                        color={FONTCOLOR.Black}
                        allign={"center"}
                    />
                </View>

                <View style={{}}>
                    <TextLable
                        Title={En.FooterBoxsubTitle}
                        size={HEADERTXT.NORMALSIZE}
                        // weight = {FONTWEIGHT.NORMAL}
                        color={FONTCOLOR.Black}
                        allign={"center"}
                    />
                </View>

                <View style={{ marginVertical: 25 }}>
                    <CustomLangBtns
                        title={En.FooterBtnTitle}
                        color={BACKGROUND_COLOR.Black}
                        // width={"45%"}
                        height={40}
                        width={120}
                        radius={BTNRADIUS.gmax}
                        allign={"center"}
                        fontcolor={FONTCOLOR.White}
                        weight={FONTWEIGHT.NORMAL}
                    />
                </View>
            </View>
        </View>
    )
}

export default HomeFooter

const styles = StyleSheet.create({
    container: {
        alignItems:'center',
        width: Dimensions.get('screen').width,
        // height: Dimensions.get('screen').width * 0.9,
        backgroundColor: BACKGROUND_COLOR.Yellow,
        padding:15
        // justifyContent: 'flex-end',
        // justifyContent:'center'
        // alignItems:'center'
    }
})