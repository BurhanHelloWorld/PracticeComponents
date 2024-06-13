import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { BACKGROUND_COLOR, HEIGHT } from '../../../enums/CustomStyles'

const InputField = (props) => {

    const { Holder,color,weight,size,keyboard,width, onChange,value,bottomWidthColor,fontcolor } = props

    return (
        <TextInput style={[styles.input,{fontWeight:weight,fontSize:size,borderBottomWidth:width,borderBottomColor:bottomWidthColor,color:fontcolor}]}
            placeholder={Holder}
            placeholderTextColor={color}
            keyboardType={keyboard}
            onChangeText={onChange}
            value={value}
        />
    )
}

export default InputField

const styles = StyleSheet.create({
    input: {
        height:HEIGHT.INPUTHEIGHT,
        padding:10,
        width:"100%"
        // flex:1
    }
})