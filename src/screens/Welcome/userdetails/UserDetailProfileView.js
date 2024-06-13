import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextLable from '../../../components/reusable/customLables/TextLable'
import { BACKGROUND_COLOR, FONTCOLOR, FONTWEIGHT } from '../../../enums/CustomStyles'


const UserDetailProfileView = (props) => {

    const { i } = props

    return (
        <View style={styles.profileView}>
            <View style={{ flex: 1, padding: 5 }}>
                <Image source={{ uri: i.img }} style={{ height: 100, width: 105, borderRadius: 12, borderWidth: 0.2, borderColor: '#000' }} />
            </View>
            <View style={{ flex: 1 }}>
                <View style={{ flex: 1, paddingVertical: 8 }}>
                    <TextLable
                        Title={i.Name}
                        color={FONTCOLOR.Black}
                        weight={FONTWEIGHT.HARD}
                    />
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-end', paddingVertical: 8 }}>
                    <Text>Icon</Text>
                    <TextLable
                        Title={i.ago}
                        color={FONTCOLOR.Black}
                        weight={FONTWEIGHT.NORMAL}
                    />
                </View>
            </View>
            <View style={{ flex: 1 }}></View>
        </View>
    )
}

export default UserDetailProfileView

const styles = StyleSheet.create({
    profileView: {
        flexDirection: 'row',
        padding: 15,
        borderBottomWidth: 0.5,
        borderColor: BACKGROUND_COLOR.LightGray
    },
})