import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomBtn from '../../components/reusable/customBtns/CustomBtn'
import { BACKGROUND_COLOR, BTNRADIUS } from '../../enums/CustomStyles'
import { launchImageLibrary } from 'react-native-image-picker'

const ProfileDetailsModal = (props) => {


    const {close, onImageSelected} = props;

    

    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <View style={{ width: 250, height: 140, justifyContent: 'flex-end', borderRadius: 22, elevation: 4, backgroundColor: '#fff', paddingHorizontal: 5 }}>
                <View style={{ flexDirection: 'row',alignItems:'center' }}>
                    <View style={{ flex: 1,marginRight:5 }}>
                        <CustomBtn
                            title={"Open Camera"}
                            color={BACKGROUND_COLOR.LightGray}
                            radius={BTNRADIUS.min}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <CustomBtn
                            title={"Open Gallery"}
                            color={BACKGROUND_COLOR.LightGray}
                            radius={BTNRADIUS.min}
                            onClick={onImageSelected}
                        />
                    </View>
                </View>
                <View>
                    <CustomBtn
                        title={"Close Modal"}
                        // onClick={closeModal}
                        color={BACKGROUND_COLOR.Yellow}
                        radius={BTNRADIUS.min}
                        onClick={close}
                    />
                </View>
            </View>
        </View>
    )
}

export default ProfileDetailsModal

const styles = StyleSheet.create({})