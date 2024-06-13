import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import TextLable from './customLables/TextLable'
import { BACKGROUND_COLOR, FONTCOLOR, FONTWEIGHT, HEADERTXT } from '../../enums/CustomStyles'

const HomeTop = (props) => {

    const { Name, Rating, ago, img, desc, onClick } = props

    return (
        <TouchableOpacity style={{ margin: 10 }} onPress={onClick}>
            <View style={{ flexDirection: desc != null ? "row" : 'column', alignItems: desc != null ? 'center' : null }}>
                <Image source={{ uri: img }}
                    style={{ height: 100, width: 100 }}
                />
                <View>
                    <TextLable
                        Title={Name}
                        weight={FONTWEIGHT.HARD}
                        size={HEADERTXT.SMALLSIZE}
                        color={BACKGROUND_COLOR.Black}
                    />
                    <TextLable
                        Title={desc}
                        weight={FONTWEIGHT.NORMAL}
                        color={FONTCOLOR.Black}
                    />
                    <TextLable
                        Title={Rating}
                        weight={FONTWEIGHT.NORMAL}
                        color={FONTCOLOR.gray}
                    />
                    <TextLable
                        Title={ago}
                        weight={FONTWEIGHT.HARD}
                        color={BACKGROUND_COLOR.Black}
                    />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default HomeTop

const styles = StyleSheet.create({})