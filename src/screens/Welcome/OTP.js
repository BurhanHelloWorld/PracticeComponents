import { Pressable, ScrollView, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TextLable from '../../components/reusable/customLables/TextLable'
import InputField from '../../components/reusable/customInputs/InputField'
import CustomBtn from '../../components/reusable/customBtns/CustomBtn'
import { BACKGROUND_COLOR, BTNRADIUS, FONTCOLOR, FONTWEIGHT, HEADERTXT, TXTALLIGN } from '../../enums/CustomStyles'
import { En } from '../../locales/En'

const OTP = ({navigation}) => {

    return (
        <View style={styles.container}>
            <View style={{ flex: 1 }}>
                <View style={styles.header}>

                    <View style={{ marginVertical: 10 }}>
                        <TextLable
                            Title={En.otpheader}
                            size={HEADERTXT.BIGSIZE}
                            weight={FONTWEIGHT.HARD}
                            color={FONTCOLOR.Black}
                        />
                    </View>

                    <View>
                        <TextLable
                            Title={En.otpsubTitle}
                            weight={FONTWEIGHT.NORMAL}
                            color={FONTCOLOR.gray}
                        />
                    </View>

                </View>

                <View style={{ marginVertical: 10 }}>
                    <View style={styles.inputView}>

                        <View style={styles.Line}></View>

                        <InputField
                            Holder={En.otpInput}
                            color={FONTCOLOR.gray}
                            weight={FONTWEIGHT.HARD}
                            size={HEADERTXT.BIGSIZE}
                        />
                    </View>

                </View>

                <TextLable
                    Title={En.otpmsgtimer}
                    size={HEADERTXT.SMALLSIZE}
                    weight={FONTWEIGHT.NORMAL}
                    color={FONTCOLOR.gray}
                />


                <View style={{ flex: 1, marginTop: 30 }}>

                    <CustomBtn
                        title={En.btn}
                        color={BACKGROUND_COLOR.Yellow}
                        weight={FONTWEIGHT.HARD}
                        radius={BTNRADIUS.gmax}
                        fontcolor={FONTCOLOR.Black}
                        onClick = {()=>navigation.navigate("Language")}
                    />

                </View>

            </View>
        </View>
    )
}

export default OTP

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