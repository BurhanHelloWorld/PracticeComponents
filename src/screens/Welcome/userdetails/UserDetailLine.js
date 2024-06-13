import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextLable from '../../../components/reusable/customLables/TextLable'
import { FONTCOLOR, FONTWEIGHT } from '../../../enums/CustomStyles'

const UserDetailLine = () => {
    return (
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
            <View>
                <Text style={{ color: '#000', fontSize: 11 }}>Icon</Text>
                <TextLable
                    Title={"5"}
                    color={FONTCOLOR.Black}
                    size={11}
                    weight={FONTWEIGHT.HARD}
                />
            </View>
            <View style={{ borderBottomWidth: 4, borderColor: '#000', width: '80%' }}></View>
            
            <View>
                <TextLable
                    Title={"10.1K"}
                    color={FONTCOLOR.Black}
                    size={11}
                    weight={FONTWEIGHT.HARD}
                />
            </View>
        </View>
    )
}

export default UserDetailLine

const styles = StyleSheet.create({})