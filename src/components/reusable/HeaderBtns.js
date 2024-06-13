import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { SVG } from '../../assets/svg'
import { BACKGROUND_COLOR } from '../../enums/CustomStyles'

const HeaderBtns = (props) => {

    const { onClick,fontcolor } = props

    return (
        <View style={styles.HeaderBtnView}>
            <TouchableOpacity
                onPress={onClick}
                style={{ justifyContent: 'center', alignItems: 'center', flexDirection: 'row', width: '35%', backgroundColor: BACKGROUND_COLOR.LightGray, borderRadius: 5 }}>
                <SVG.Wallet height={20} width={20} />
                <Text style={{color:fontcolor}}> $2000</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{ width: '15%', backgroundColor: BACKGROUND_COLOR.LightGray, borderRadius: 5, marginLeft: 5, alignItems: 'center', justifyContent: 'center' }}>
                <SVG.Bell height={20} width={20} />
            </TouchableOpacity>
        </View>
    )
}

export default HeaderBtns

const styles = StyleSheet.create({
    HeaderBtnView: {
        flexDirection: 'row',
        flex: 1,
        justifyContent: 'flex-end'
    },
})