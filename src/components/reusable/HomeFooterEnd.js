import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextLable from './customLables/TextLable'
import { En } from '../../locales/En'
import { BACKGROUND_COLOR, FONTCOLOR, FONTWEIGHT, HEADERTXT } from '../../enums/CustomStyles'


const HomeFooterEnd = (props) => {

    const { color } = props

    return (
        <View
            style={[styles.container,
            {
                backgroundColor: color == null
                    ? BACKGROUND_COLOR.LightGray
                    : color
            }]
            }>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
                <View>

                    <TextLable
                        Title={"Refer and get \nfree Call"}
                        color={FONTCOLOR.Black}
                        size={HEADERTXT.BIGSIZE}
                        weight={FONTWEIGHT.NORMAL}
                    />
                    <TextLable
                        Title={"Invite and get $100"}
                        color={FONTCOLOR.gray}
                        // size={HEADERTXT.BIGSIZE}
                        weight={FONTWEIGHT.NORMAL}
                    />
                </View>
                <Image source={require('../../assets/images/home/Referal.png')} style={{ height: 130, width: 130 }} />
            </View>
            <View style={{ alignSelf: 'center' }}>
                <Image source={require('../../assets/images/home/Fish.png')} />
                <TextLable
                    Title={"Here's a tip for the day!"}
                    color={FONTCOLOR.Black}
                    size={HEADERTXT.NORMALSIZE}
                    weight={FONTWEIGHT.NORMAL}
                    margin={10}
                />
                <TextLable
                    Title={"Rudraksha beads emit testing \nand worderful day of fish \nas per their genes."}
                    color={FONTCOLOR.gray}
                    allign={"center"}
                    // size={HEADERTXT.NORMALSIZE}
                    weight={FONTWEIGHT.NORMAL}
                />
            </View>
        </View>
    )
}

export default HomeFooterEnd

const styles = StyleSheet.create({
    container: {
        marginVertical: 20,
        padding: 15
    }
})