import { Image, StyleSheet, Text, Touchable, TouchableOpacity, View } from 'react-native'
import React from 'react'


const CustomLangBtns = (props) => {
    const { title, color, onClick, height, fontcolor, radius, width, weight,img,Bwidth } = props
    return (
        <TouchableOpacity
            onPress={onClick}
            style={[styles.btn, { backgroundColor: color, height: height, borderRadius: radius ? radius : 10, width: width, justifyContent: img == null ? 'center' : 'flex-end', borderWidth:Bwidth }]}>
            <Text style={{ color: fontcolor, fontWeight: weight }}>{title}</Text>
            {img ==null ? null : <Image source={img} style={{ height: 60, width: 70 }} /> }
        </TouchableOpacity>
    )
}

export default CustomLangBtns

const styles = StyleSheet.create({
    btn: {
        height: 70,
        alignItems: 'center',
        borderRadius: 10
    },
    font:{
        color:"#000"
    }
})