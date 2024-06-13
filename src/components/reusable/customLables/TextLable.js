import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'

const TextLable = (props) => {

  const { Title, size, weight, allign, color,margin,fontstyle } = props

  return (
    <Text
      style={{ fontSize: size, fontWeight: weight, textAlign: allign, color: color,marginVertical:margin, fontStyle:fontstyle }}>
      {Title}
    </Text>
  )
}

export default TextLable

const styles = StyleSheet.create({})