import { Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TextLable from '../../components/reusable/customLables/TextLable'
import { BACKGROUND_COLOR, FONTCOLOR, FONTWEIGHT, HEADERTXT } from '../../enums/CustomStyles'
import { En } from '../../locales/En'
import CustomBtn from '../../components/reusable/customBtns/CustomBtn'
import CustomLangBtns from '../../components/reusable/customBtns/CustomLangBtns'
import { VEDIC_EXPERT } from '../../assets/Data/Dummydata'
import HomeTop from '../../components/reusable/HomeTop'
import { SVG } from '../../assets/svg'
import HeaderBtns from '../../components/reusable/HeaderBtns'
import HomeFooterEnd from '../../components/reusable/HomeFooterEnd'

const Horoscoope = () => {
    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.Header}>
                    <TextLable
                        Title={En.homeHeader}
                        size={HEADERTXT.BIGSIZE}
                        color={FONTCOLOR.Black}
                        weight={FONTWEIGHT.HARD}
                    />
                    <HeaderBtns />
                </View>
                <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
                    <View style={{ alignItems: 'center' }}>
                        <SVG.Aquarius
                            height={80}
                            width={80}
                        />
                        <TextLable
                            Title={"Aquarius"}
                            color={FONTCOLOR.Black}
                            weight={FONTWEIGHT.NORMAL}
                        />
                        <TextLable
                            Title={"Feb-23 to Jan-19"}
                            color={FONTCOLOR.gray}
                            weight={FONTWEIGHT.NORMAL}
                            size={11}
                        />
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <SVG.Capricon
                            height={80}
                            width={80}
                        />
                        <TextLable
                            Title={"Capricon"}
                            color={FONTCOLOR.Black}
                            weight={FONTWEIGHT.NORMAL}
                        />
                        <TextLable
                            Title={"Feb-23 to Jan-19"}
                            color={FONTCOLOR.gray}
                            weight={FONTWEIGHT.NORMAL}
                            size={11}
                        />
                    </View>

                    <View style={{ alignItems: 'center' }}>
                        <SVG.Sagittarius
                            height={80}
                            width={80}
                        />
                        <TextLable
                            Title={"Sagittarius"}
                            color={FONTCOLOR.Black}
                            weight={FONTWEIGHT.NORMAL}
                        />
                        <TextLable
                            Title={"Feb-23 to Jan-19"}
                            color={FONTCOLOR.gray}
                            weight={FONTWEIGHT.NORMAL}
                            size={11}
                        />
                    </View>
                </View>
                <ImageBackground source={require('../../assets/images/Horoscope/Horoscope_bg.png')}>
                    <View style={styles.Body}>
                        <View style={styles.daysBtn}>
                            <CustomLangBtns
                                title={"Yesterday"}
                                width={'25%'}
                                height={45}
                                color={BACKGROUND_COLOR.Yellow}
                                fontcolor={FONTCOLOR.Black}
                                weight={FONTWEIGHT.NORMAL}
                                radius={20}
                            />
                            <CustomLangBtns
                                title={"Today"}
                                width={'25%'}
                                height={45}
                                color={BACKGROUND_COLOR.Yellow}
                                fontcolor={FONTCOLOR.Black}
                                weight={FONTWEIGHT.NORMAL}
                                radius={20}
                            />
                            <CustomLangBtns
                                title={"Tomorrow"}
                                width={'25%'}
                                height={45}
                                color={BACKGROUND_COLOR.Yellow}
                                fontcolor={FONTCOLOR.Black}
                                weight={FONTWEIGHT.NORMAL}
                                radius={20}
                            />
                        </View>

                        <View style={styles.FBox}>
                            <View style={{ margin: 5 }}>
                                <TextLable
                                    Title={"Lucky Items for you"}
                                    weight={FONTWEIGHT.HARD}
                                    color={FONTCOLOR.Black}
                                />
                            </View>
                            <View style={{ width: '90%', borderBottomWidth: 1, marginVertical: 5 }}></View>
                            <View style={styles.colorView}>
                                <View style={styles.colorInnerViews}>
                                    <TextLable
                                        Title={"Colours"}
                                        margin={10}
                                        color={FONTCOLOR.Black}
                                    />
                                    <TextLable
                                        Title={"Brown, Blue"}
                                        color={FONTCOLOR.Black}
                                        weight={FONTWEIGHT.NORMAL}
                                        size={HEADERTXT.SMALLSIZE}
                                        margin={10}
                                    />
                                </View>
                                <View style={styles.colorInnerViews}>
                                    <TextLable
                                        Title={"Numbers"}
                                        margin={10}
                                        color={FONTCOLOR.Black}
                                    />
                                    <TextLable
                                        Title={"1,8"}
                                        color={FONTCOLOR.Black}
                                        weight={FONTWEIGHT.NORMAL}
                                        size={HEADERTXT.SMALLSIZE}
                                        margin={10}
                                    />
                                </View>
                                <View style={styles.colorInnerViews}>
                                    <TextLable
                                        Title={"Alphabets"}
                                        margin={10}
                                        color={FONTCOLOR.Black}
                                    />
                                    <TextLable
                                        Title={"H,S"}
                                        color={FONTCOLOR.Black}
                                        weight={FONTWEIGHT.NORMAL}
                                        size={HEADERTXT.SMALLSIZE}
                                        margin={10}
                                    />
                                </View>
                            </View>
                        </View>

                        <TextLable
                            Title={"What Horroscope says about you"}
                            allign={'center'}
                            margin={15}
                            size={HEADERTXT.NORMALSIZE}
                            color={FONTCOLOR.Black}
                            weight={FONTWEIGHT.HARD}
                        />

                        <View style={[styles.FBox, { alignItems: 'flex-start' }]}>
                            <View style={{ padding: 10 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image
                                        source={require('../../assets/images/Horoscope/heart.png')}
                                        style={{ height: 28, width: 28, marginRight: 5 }}
                                    />
                                    <TextLable
                                        Title={"Love"}
                                        weight={FONTWEIGHT.HARD}
                                        color={FONTCOLOR.Black}
                                        size={HEADERTXT.BIGSIZE}
                                        margin={10}
                                    />
                                </View>
                                <TextLable
                                    Title={"Love is not a material,Love is not a material,Love is not a material,Love is not a material,Love is not a material,Love is not a material,Love is not a material,Love is not a material,Love is not a material"}
                                    weight={FONTWEIGHT.NORMAL}
                                    margin={10}
                                    // allign={"justify"}
                                    color={FONTCOLOR.gray}
                                    size={13}
                                />
                            </View>
                        </View>
                        <View style={[styles.FBox, { alignItems: 'flex-start' }]}>
                            <View style={{ padding: 10 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image
                                        source={require('../../assets/images/Horoscope/Career.png')}
                                        style={{ height: 28, width: 28, marginRight: 5 }}
                                    />
                                    <TextLable
                                        Title={"Career"}
                                        weight={FONTWEIGHT.HARD}
                                        color={FONTCOLOR.Black}
                                        size={HEADERTXT.BIGSIZE}
                                        margin={10}
                                    />
                                </View>
                                <TextLable
                                    Title={"Love is not a material,Love is not a material,Love is not a material,Love is not a material,Love is not a material,Love is not a material,Love is not a material,Love is not a material,Love is not a material"}
                                    weight={FONTWEIGHT.NORMAL}
                                    margin={10}
                                    // allign={"justify"}
                                    color={FONTCOLOR.gray}
                                    size={13}
                                />
                            </View>
                        </View>
                        <View style={[styles.FBox, { alignItems: 'flex-start' }]}>
                            <View style={{ padding: 10 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={require('../../assets/images/Horoscope/Money.png')}
                                        style={{ height: 28, width: 28, marginRight: 5 }}
                                    />
                                    <TextLable
                                        Title={"Money"}
                                        weight={FONTWEIGHT.HARD}
                                        color={FONTCOLOR.Black}
                                        size={HEADERTXT.BIGSIZE}
                                        margin={10}
                                    />
                                </View>
                                <TextLable
                                    Title={"Love is not a material,Love is not a material,Love is not a material,Love is not a material,Love is not a material,Love is not a material,Love is not a material,Love is not a material,Love is not a material"}
                                    weight={FONTWEIGHT.NORMAL}
                                    margin={10}
                                    // allign={"justify"}
                                    color={FONTCOLOR.gray}
                                    size={13}
                                />
                            </View>
                        </View>
                        <View style={[styles.FBox, { alignItems: 'flex-start' }]}>
                            <View style={{ padding: 10 }}>
                                <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                    <Image source={require('../../assets/images/Horoscope/Health.png')}
                                        style={{ height: 28, width: 28, marginRight: 5 }}
                                    />
                                    <TextLable
                                        Title={"Health"}
                                        weight={FONTWEIGHT.HARD}
                                        color={FONTCOLOR.Black}
                                        size={HEADERTXT.BIGSIZE}
                                        margin={10}
                                    />
                                </View>
                                <TextLable
                                    Title={"Love is not a material,Love is not a material,Love is not a material,Love is not a material,Love is not a material,Love is not a material,Love is not a material,Love is not a material,Love is not a material"}
                                    weight={FONTWEIGHT.NORMAL}
                                    margin={10}
                                    // allign={"justify"}
                                    color={FONTCOLOR.gray}
                                    size={13}
                                />
                            </View>
                        </View>
                    </View>
                </ImageBackground>

                <View style={styles.ExpertsView}>
                    <View style={styles.ExpertsInnerView}>
                        <TextLable
                            Title={"Recommended Expert"}
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

                <View>
                    <HomeFooterEnd />
                </View>

            </ScrollView>
        </View>
    )
}

export default Horoscoope

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    Header: {
        flexDirection: 'row',
        marginVertical: 5,
        justifyContent: 'space-between',
        padding: 15
    },
    HeaderBtnView: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end'
    },
    Body: {
        // backgroundColor: BACKGROUND_COLOR.Yellow,
        flex: 1,
        borderTopEndRadius: 15,
        borderTopStartRadius: 15,
        marginTop: 5,
        padding: 15
    },
    daysBtn: {
        height: 65,
        backgroundColor: "#fff",
        borderRadius: 30,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        padding: 5,
        alignItems: 'center'
    },
    FBox: {
        borderRadius: 20,
        backgroundColor: '#fff',
        marginTop: 15,
        alignItems: 'center',
        padding: 5,
        elevation: 4
    },
    colorView: {
        flexDirection: 'row',
        marginVertical: 15,
        padding: 5
    },
    colorInnerViews: {
        flex: 1,
        padding: 5
    },
    ExpertsView: {
        marginVertical: 15,
        backgroundColor: '#fff'
    },
    ExpertsInnerView: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        padding: 15
    }
})