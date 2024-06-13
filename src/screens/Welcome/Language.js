import { ActivityIndicator, Pressable, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import TextLable from '../../components/reusable/customLables/TextLable'
import InputField from '../../components/reusable/customInputs/InputField'
import CustomBtn from '../../components/reusable/customBtns/CustomBtn'
import { BACKGROUND_COLOR, BTNRADIUS, FONTCOLOR, FONTWEIGHT, HEADERTXT, HEIGHT, TXTALLIGN } from '../../enums/CustomStyles'
import { En } from '../../locales/En'
import CustomLangBtns from '../../components/reusable/customBtns/CustomLangBtns'

const Language = ({ navigation, route }) => {

    const nextScreen = route?.params?.nextScreen

    const [isselected, setIsSelected] = useState(null)
    const [showindicator, setShowIndicator] = useState(false)

    const handleClick = (btnIndex) => {
        if (isselected == btnIndex) {
            setIsSelected(null)
        } else {
            setIsSelected(btnIndex)
        }
    }

    const onClick = () => {
        if (isselected == null) {
            console.warn("Please Select Language");
        } else {
            setShowIndicator(true);
            setTimeout(() => {
                setShowIndicator(false);
                navigation.navigate(nextScreen ? nextScreen : "Bottom");      
            }, );
        }
    };

    return (
        <View style={styles.container}>
            {
                showindicator
                    ?
                    <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
                        <ActivityIndicator size={'large'} color={BACKGROUND_COLOR.Yellow} />
                    </View>
                    :
                    <View style={{ flex: 1 }}>
                        <View style={styles.header}>

                            <View style={{ marginVertical: 10 }}>
                                <TextLable
                                    Title={En.lanHeader}
                                    size={HEADERTXT.BIGSIZE}
                                    weight={FONTWEIGHT.HARD}
                                    color={FONTCOLOR.Black}
                                />
                            </View>

                            <View>
                                <TextLable
                                    Title={En.lansubTitle}
                                    weight={FONTWEIGHT.NORMAL}
                                    color={FONTCOLOR.gray}
                                />
                            </View>

                        </View>

                        <View>

                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.Fbtn}>
                                    <CustomLangBtns
                                        fontcolor={FONTCOLOR.Black}
                                        title={En.lanbtn1}
                                        color=
                                        {
                                            isselected == 1
                                                ?
                                                BACKGROUND_COLOR.Yellow
                                                :
                                                BACKGROUND_COLOR.LightGray
                                        }
                                        height={HEIGHT.LangBtnHEIGHT}
                                        onClick={() => handleClick(1)}
                                    />
                                </View>
                                <View style={styles.Fbtn1}>
                                    <CustomLangBtns
                                        fontcolor={FONTCOLOR.Black}
                                        title={En.lanbtn2}
                                        color=
                                        {
                                            isselected == 2
                                                ?
                                                BACKGROUND_COLOR.Yellow
                                                :
                                                BACKGROUND_COLOR.LightGray
                                        }
                                        height={HEIGHT.LangBtnHEIGHT}
                                        onClick={() => handleClick(2)}
                                    />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row' }}>
                                <View style={styles.Fbtn2}>
                                    <CustomLangBtns
                                        fontcolor={FONTCOLOR.Black}
                                        title={En.lanbtn3}
                                        color=
                                        {
                                            isselected == 3
                                                ?
                                                BACKGROUND_COLOR.Yellow
                                                :
                                                BACKGROUND_COLOR.LightGray
                                        }
                                        height={HEIGHT.LangBtnHEIGHT}
                                        onClick={() => handleClick(3)}
                                    />
                                </View>
                                <View style={styles.Fbtn3}>
                                    <CustomLangBtns
                                        fontcolor={FONTCOLOR.Black}
                                        title={En.lanbtn4}
                                        color=
                                        {
                                            isselected == 4
                                                ?
                                                BACKGROUND_COLOR.Yellow
                                                :
                                                BACKGROUND_COLOR.LightGray
                                        }
                                        height={HEIGHT.LangBtnHEIGHT}
                                        onClick={() => handleClick(4)}
                                    />
                                </View>
                            </View>
                            <View style={{ marginVertical: 15 }}>
                                <CustomBtn
                                    title={En.btn}
                                    color={BACKGROUND_COLOR.Yellow}
                                    weight={FONTWEIGHT.HARD}
                                    radius={BTNRADIUS.gmax}
                                    fontcolor={FONTCOLOR.Black}
                                    onClick={onClick}
                                />
                            </View>
                        </View>

                    </View>
            }
        </View>
    )
}

export default Language

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: 15,
        paddingLeft: 15,
    },
    header: {
        // marginTop: 20,
        padding: 15
    },
    Fbtn: {
        flex: 1,
        marginRight: 5,
        marginBottom: 5
    },
    Fbtn1: {
        flex: 1,
        marginLeft: 5,
        marginBottom: 5
    },
    Fbtn2: {
        flex: 1,
        marginRight: 5,
        marginTop: 5
    },
    Fbtn3: {
        flex: 1,
        marginLeft: 5,
        marginTop: 5
    }
})