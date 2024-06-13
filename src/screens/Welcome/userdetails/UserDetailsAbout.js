import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { BACKGROUND_COLOR, FONTCOLOR, FONTWEIGHT } from '../../../enums/CustomStyles'
import TextLable from '../../../components/reusable/customLables/TextLable'

const UserDetailsAbout = (props) => {

    const {i} =props

    return (
        <View style={styles.about}>
            <TextLable
                Title={"About " + i.Name}
                color={FONTCOLOR.Black}
                weight={FONTWEIGHT.NORMAL}
            />
            <TextLable
                Title={"When people demonstrate verb, When people \ndemonstrate. they take partin a march or a meeting to \nto show that they oppose"}
                color={FONTCOLOR.gray}
                size={13}
            />
        </View>
    )
}

export default UserDetailsAbout

const styles = StyleSheet.create({
    about: {
        padding: 15,
        borderBottomWidth: 2.5,
        borderColor: BACKGROUND_COLOR.LightGray
    }
})