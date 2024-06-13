import { Image, Modal, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import CustomBtn from '../../components/reusable/customBtns/CustomBtn'
import CustomLangBtns from '../../components/reusable/customBtns/CustomLangBtns'
import { BACKGROUND_COLOR, BTNRADIUS, FONTCOLOR, FONTWEIGHT, HEADERTXT } from '../../enums/CustomStyles'
import TextLable from '../../components/reusable/customLables/TextLable'
import InputField from '../../components/reusable/customInputs/InputField'
import { launchImageLibrary } from 'react-native-image-picker'
import ProfileDetailsModal from './ProfileDetailsModal'
import DatePicker from 'react-native-date-picker'


const ProfileDetails = ({ navigation }) => {
 
    const [ismaleSelected, setIsMaleSelected] = useState(false)
    const [isfemaleSelected, setIsFemaleSelected] = useState(false)

    const [fullname, setFullName] = useState('')
    const [dateOfBirth, setDateOfBirth] = useState('')
    const [timeOfBirth, setTimeOfBirth] = useState('')
    const [placeOfBirth, setPlaceOfBirth] = useState('')
    const [currentaddress, setCurrentAddress] = useState('')
    const [city, setCity] = useState('')
    const [postalCode, setPostalCode] = useState('')


    const handleMalePress = () => {
        setIsMaleSelected(!ismaleSelected)
        setIsFemaleSelected(false)
    }
    const handleFemalePress = () => {
        setIsFemaleSelected(!isfemaleSelected)
        setIsMaleSelected(false)
    }

    const [modalVisible, setModalVisible] = useState(false)
    const [selectedImage, setSelectedImage] = useState(null)

    const data = [
        {
            heading: 'Name',
            holder: 'Sunil Sharma'
        },
        {
            heading: 'Date of Birth',
            holder: '01-Jan-1990'
        },
        {
            heading: 'Time of Birth',
            holder: '05:40 Am'
        },
        {
            heading: 'Place of Birth',
            holder: 'City Name'
        },
        {
            heading: 'Current Address',
            holder: 'Address'
        },
        {
            heading: 'City, State, Country',
            holder: 'City, Country'
        },
        {
            heading: 'Pin Code',
            holder: 'Postal Code'
        },
    ]

    const openImagePicker = () => {
        const options = {
            mediaType: 'photo',
            includeBase64: false,
            maxHeight: 2000,
            maxWidth: 2000,
        };

        launchImageLibrary(options, (response) => {
            if (response.didCancel) {
                console.log('User cancelled image picker');
            } else if (response.error) {
                console.log('Image picker error: ', response.error);
            } else {
                let imageUri = response.uri || response.assets?.[0]?.uri;
                console.log('ImageURI===>', imageUri)
                setSelectedImage(imageUri);
                setModalVisible(false)
            }
        });
    };


    const openModal = () => {
        setModalVisible(true)
    }

    const closeModal = () => {
        setModalVisible(false)
    }

    const handleImageSelected = () => {
        openImagePicker()
    }

    const handleSubmit = () => {
        if (selectedImage) {
            console.log('Navigating with image:', selectedImage);
            navigation.navigate('Profile', { profileimg: selectedImage });
        } else {
            console.warn('No image selected');
        }
    };

    return (
        <View style={styles.container}>
            <ScrollView
                showsVerticalScrollIndicator={false}
            >
                <View style={{ alignSelf: 'center', alignItems: 'center' }}>
                    <View style={{}}>
                        <View style={{ height: 100, width: 100, borderRadius: 50, backgroundColor: BACKGROUND_COLOR.Yellow }}>
                            <Image source={{ uri: selectedImage }}
                                style={{ height: '100%', width: '100%', borderRadius: 50 }} />
                        </View>

                        <TouchableOpacity onPress={openModal}
                            style={styles.cam}>
                            <Image source={require('../../assets/images/profile/camera.png')}
                                style={{ height: '100%', width: '100%' }}
                            />
                        </TouchableOpacity>
                    </View>

                    <TextLable
                        Title={"+91-868265628067"}
                        margin={10}
                        color={FONTCOLOR.Black}
                        weight={FONTWEIGHT.NORMAL}
                    />
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                    <View style={{ flex: 1 }}>
                        <TextLable
                            Title={"Gender"}
                            weight={FONTWEIGHT.HARD}
                        />
                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ marginRight: 10 }}>
                                <CustomLangBtns
                                    height={18}
                                    width={18}
                                    color={ismaleSelected ? BACKGROUND_COLOR.Yellow : null}
                                    onClick={handleMalePress}
                                    Bwidth={1.5}
                                />
                            </View>
                            <View>
                                <TextLable
                                    Title={"Male"}
                                    color={FONTCOLOR.Black}
                                />
                            </View>
                        </View>

                    </View>
                    <View style={{ flex: 1 }}>
                        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                            <View style={{ marginRight: 10 }}>
                                <CustomLangBtns
                                    height={18}
                                    width={18}
                                    color={isfemaleSelected ? BACKGROUND_COLOR.Yellow : null}
                                    onClick={handleFemalePress}
                                    Bwidth={1.5}
                                />
                            </View>
                            <View>
                                <TextLable
                                    Title={"Female"}
                                    color={FONTCOLOR.Black}
                                />
                            </View>
                        </View>
                    </View>
                </View>
                <View>
                    {
                        data.map((item, index) => {
                            return (
                                <View style={{ marginVertical: 12 }} key={index}>
                                    <TextLable
                                        Title={item.heading}
                                        weight={FONTWEIGHT.NORMAL}
                                        color={FONTCOLOR.Black}
                                    />
                                    <InputField
                                        Holder={item.holder}
                                        width={0.5}
                                        size={HEADERTXT.NORMALSIZE}
                                        weight={FONTWEIGHT.NORMAL}
                                        // onChange={(txt) => setName(txt)}
                                        // value={name}
                                        color={FONTCOLOR.gray}
                                        fontcolor={FONTCOLOR.Black}
                                    />

                                </View>
                            )
                        })
                    }
                    <CustomBtn
                        title={"Submit"}
                        color={BACKGROUND_COLOR.Yellow}
                        fontcolor={FONTCOLOR.Black}
                        radius={BTNRADIUS.gmax}
                        onClick={handleSubmit}
                    />
                </View>
                <Modal
                    animationType='slide'
                    transparent={true}
                    visible={modalVisible}
                >
                    <ProfileDetailsModal close={closeModal} onImageSelected={handleImageSelected} />
                </Modal>
            </ScrollView>
        </View>
    )
}

export default ProfileDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    cam: {
        position: 'absolute',
        height: 30,
        width: 30,
        justifyContent: 'center',
        alignItems: 'center',
        right: 0,
        bottom: 0
    }
})