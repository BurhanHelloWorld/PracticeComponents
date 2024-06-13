import { Pressable, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TextLable from '../../components/reusable/customLables/TextLable'
import InputField from '../../components/reusable/customInputs/InputField'
import CustomBtn from '../../components/reusable/customBtns/CustomBtn'
import { BACKGROUND_COLOR, BTNRADIUS, FONTCOLOR, FONTWEIGHT, HEADERTXT, TXTALLIGN } from '../../enums/CustomStyles'
import { En } from '../../locales/En'
import { ICON } from '../../assets/Icons'

const Login = ({ navigation }) => {

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    <View style={styles.header}>

                        <View style={{ marginVertical: 10 }}>
                            <TextLable
                                Title={En.header}
                                size={HEADERTXT.BIGSIZE}
                                weight={FONTWEIGHT.HARD}
                                color={FONTCOLOR.Black}
                            />
                        </View>

                        <View>
                            <TextLable
                                Title={En.subTitle}
                                weight={FONTWEIGHT.NORMAL}
                                color={FONTCOLOR.gray}
                            />
                        </View>

                    </View>

                    <View style={{ marginVertical: 10 }}>
                        <View style={styles.inputView}>

                            <TextLable
                                Title={En.btnNum}
                                size={HEADERTXT.BIGSIZE}
                                weight={FONTWEIGHT.HARD}
                                color={FONTCOLOR.Black}
                            />

                            <View style={styles.Line}></View>

                            <InputField
                                Holder={En.Input}
                                color={FONTCOLOR.gray}
                                weight={FONTWEIGHT.HARD}
                                size={HEADERTXT.BIGSIZE}
                            />
                        </View>

                    </View>

                    <CustomBtn
                        title={En.btn}
                        color={BACKGROUND_COLOR.Yellow}
                        weight={FONTWEIGHT.HARD}
                        radius={BTNRADIUS.gmax}
                        fontcolor={FONTCOLOR.Black}
                        onClick={() => navigation.navigate("OTP")}
                    />

                    <View style={styles.horizontalline}>
                    </View>

                    <View style={{ flex: 1, marginTop: 20 }}>

                        <CustomBtn
                            title={En.GoogleBtn}
                            color={BACKGROUND_COLOR.White}
                            weight={FONTWEIGHT.HARD}
                            radius={BTNRADIUS.gmax}
                            fontcolor={FONTCOLOR.Black}
                            logo={ICON.GoogleLogo}
                        />

                        <CustomBtn
                            title={En.FbBtn}
                            color={BACKGROUND_COLOR.NavyBlue}
                            weight={FONTWEIGHT.HARD}
                            radius={BTNRADIUS.gmax}
                            fontcolor={FONTCOLOR.White}
                            logo={ICON.FBLogo}
                        />

                        <CustomBtn
                            title={En.AppleBtn}
                            color={BACKGROUND_COLOR.Black}
                            weight={FONTWEIGHT.HARD}
                            radius={BTNRADIUS.gmax}
                            fontcolor={FONTCOLOR.White}
                            logo={ICON.AppleLogo}
                            tintcolor="white"
                        />

                    </View>

                </ScrollView>
            </View>
        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingRight: 15,
        paddingLeft: 15,
    },
    btnView: {
        marginTop: 10
    },
    header: {
        marginTop: 20,
    },
    inputView: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    Line: {
        borderWidth: 0.2,
        height: 45,
        marginHorizontal: 10
    },
    horizontalline: {
        flexDirection: 'row',
        borderWidth: 0.5,
        width: '100%',
        alignSelf: 'center',
        marginVertical: 15
    }
})