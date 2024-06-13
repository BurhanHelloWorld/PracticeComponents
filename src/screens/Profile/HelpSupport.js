import { Image, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import TextLable from '../../components/reusable/customLables/TextLable'
import { BACKGROUND_COLOR, BTNRADIUS, FONTCOLOR, FONTWEIGHT, HEADERTXT } from '../../enums/CustomStyles'
import InputField from '../../components/reusable/customInputs/InputField'
import CustomBtn from '../../components/reusable/customBtns/CustomBtn'

const HelpSupport = () => {
    return (
        <View style={styles.container}>
            <View style={{ padding: 15 }}>
                <TextLable
                    Title={"Help & support"}
                    color={FONTCOLOR.Black}
                    size={HEADERTXT.BIGSIZE}
                    weight={FONTWEIGHT.HARD}
                    margin={10}
                />
            </View>
            <Image
                source={require('../../assets/images/home/Cover1.png')}
                style={{ width: '100%' }}
            />
            <View style={{ padding: 15 }}>
                <TextLable
                    Title={"Write down your queries"}
                    color={FONTCOLOR.Black}
                    size={HEADERTXT.NORMALSIZE}
                    weight={FONTWEIGHT.NORMAL}
                    margin={10}
                />
                <TextInput style={styles.input}
                    placeholder='I made a transaction 12 days ago'
                    multiline={true}
                    color={FONTCOLOR.gray}
                    numberOfLines={10}
                />
                <View style={styles.HorizontallineView}>
                    <View style={{ flex: 1, borderBottomWidth: 0.5 }}></View>
                    <TextLable
                        Title={'Or'}
                    />
                    <View style={{ flex: 1, borderBottomWidth: 0.5 }}></View>

                </View>

                <TextLable
                    Title={"Just Email at"}
                    color={FONTCOLOR.gray}
                    weight={FONTWEIGHT.NORMAL}
                    size={HEADERTXT.NORMALSIZE}
                    allign={'center'}
                />
                <TextLable
                    Title={"support@astroconsult"}
                    color={BACKGROUND_COLOR.Yellow}
                    weight={FONTWEIGHT.HARD}
                    size={HEADERTXT.NORMALSIZE}
                    allign={'center'}
                />

            </View>
            <View style={{ flex: 1, justifyContent: 'flex-end', padding: 15 }}>
                <CustomBtn
                    title={"Submit"}
                    color={BACKGROUND_COLOR.Yellow}
                    radius={BTNRADIUS.gmax}
                    weight={FONTWEIGHT.NORMAL}
                    fontcolor={FONTCOLOR.Black}
                />
            </View>
        </View>
    )
}

export default HelpSupport

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    input: {
        backgroundColor: BACKGROUND_COLOR.LightGray,
        textAlignVertical: 'top',
        borderRadius: 10
    },
    HorizontallineView: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 25
    }
})