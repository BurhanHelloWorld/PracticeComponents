import { Image, Pressable, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { BTNRADIUS, HEIGHT } from '../../../enums/CustomStyles'

const CustomBtn = (props) => {
    const { title, color, weight, radius, fontcolor, logo, tintcolor, onClick, width,allign,margin,border } = props
    return (
        <TouchableOpacity onPress={onClick}
            style={[styles.btn, { backgroundColor: color, borderRadius: radius, width: width,alignSelf:allign,margin:margin,borderWidth:border,justifyContent:border!=null?'flex-start':'center', }]}>
            {logo != null &&
                <Image source={logo} tintColor={tintcolor} style={styles.icon} />
            }
            <Text style={{ fontWeight: weight, color: fontcolor }}>
                {title}
            </Text>
        </TouchableOpacity>
    )
}

export default CustomBtn

const styles = StyleSheet.create({
    btn: {
        justifyContent: 'center',
        alignItems: 'center',
        height: HEIGHT.INPUTHEIGHT,
        marginBottom: 15,
        borderWidth: 0.5,
        flexDirection: 'row',
    },
    icon: {
        height: 24,
        marginHorizontal: 5,
        width: 24,
    }
})