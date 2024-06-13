import { SectionListComponent, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TextLable from '../../components/reusable/customLables/TextLable'
import { BACKGROUND_COLOR, BTNRADIUS, FONTCOLOR, FONTWEIGHT, HEADERTXT } from '../../enums/CustomStyles'
import InputField from '../../components/reusable/customInputs/InputField'
import CustomBtn from '../../components/reusable/customBtns/CustomBtn'
import CustomLangBtns from '../../components/reusable/customBtns/CustomLangBtns'

const CreateKundali = ({ navigation }) => {

    const [ismaleselected, setIsMaleSelected] = useState(false)
    const [isfemaleselected, setIsFemaleSelected] = useState(false)

    const [name, setName] = useState("")
    const [dob, setDOB] = useState("")
    const [time, setTime] = useState("")
    const [place, setPlace] = useState("")


    const male = () => {
        setIsMaleSelected(true)
        setIsFemaleSelected(false)
    }

    const female = () => {
        setIsMaleSelected(false)
        setIsFemaleSelected(true)
    }

    const Create = () => {
        const N = { name: name, dob: dob, time: time, place: place }
        console.log(N)
        navigation.navigate('Kundali', {N})
    }

    return (

        <View style={styles.container}>
            <View style={styles.inputView}>

                <TextLable
                    Title={"Name"}
                    color={FONTCOLOR.Black}
                    weight={FONTWEIGHT.NORMAL}
                // onChange={}
                />
                <View style={{ flexDirection: 'row' }}>
                    <InputField
                        Holder={"Enter Name"}
                        width={0.5}
                        size={HEADERTXT.NORMALSIZE}
                        weight={FONTWEIGHT.NORMAL}
                        onChange={(txt) => setName(txt)}
                        value={name}
                        color={FONTCOLOR.gray}
                        fontcolor={FONTCOLOR.Black}
                    />
                </View>

            </View>
            <View style={{ marginVertical: 10 }}>

                <TextLable
                    Title={"Gender"}
                    color={FONTCOLOR.Black}
                    weight={FONTWEIGHT.NORMAL}
                />
                <View style={styles.switchBtnsView}>
                    <View style={styles.switchLBtn}>
                        <CustomLangBtns
                            title={"Male"}
                            color={
                                ismaleselected ?
                                    BACKGROUND_COLOR.Yellow :
                                    BACKGROUND_COLOR.LightGray
                            }
                            height={55}
                            fontcolor={FONTCOLOR.Black}
                            onClick={male}
                        />
                    </View>
                    <View style={styles.switchRBtn}>
                        <CustomLangBtns
                            title={"Female"}
                            color={
                                isfemaleselected ?
                                    BACKGROUND_COLOR.Yellow :
                                    BACKGROUND_COLOR.LightGray
                            }
                            height={55}
                            fontcolor={FONTCOLOR.Black}
                            onClick={female}
                        />
                    </View>
                </View>
            </View>
            <View style={styles.inputView}>

                <TextLable
                    Title={"Date of Birth"}
                    color={FONTCOLOR.Black}
                    weight={FONTWEIGHT.NORMAL}
                />
                <View style={{ flexDirection: 'row' }}>
                    <InputField
                        Holder={"Enter Date of Birth"}
                        width={0.5}
                        size={HEADERTXT.NORMALSIZE}
                        weight={FONTWEIGHT.NORMAL}
                        onChange={(txt) => setDOB(txt)}
                        value={dob}
                        color={FONTCOLOR.gray}
                        fontcolor={FONTCOLOR.Black}
                    />
                </View>

            </View>
            <View style={styles.inputView}>

                <TextLable
                    Title={"Time of Birth"}
                    color={FONTCOLOR.Black}
                    weight={FONTWEIGHT.NORMAL}
                />
                <View style={{ flexDirection: 'row' }}>
                    <InputField
                        Holder={"Enter Time of Birth"}
                        width={0.5}
                        size={HEADERTXT.NORMALSIZE}
                        weight={FONTWEIGHT.NORMAL}
                        onChange={(txt) => setTime(txt)}
                        value={time}
                        color={FONTCOLOR.gray}
                        fontcolor={FONTCOLOR.Black}
                    />
                </View>

            </View>
            <View style={styles.inputView}>

                <TextLable
                    Title={"Place of Birth"}
                    color={FONTCOLOR.Black}
                    weight={FONTWEIGHT.NORMAL}
                />
                <View style={{ flexDirection: 'row' }}>
                    <InputField
                        Holder={"Enter Place of Birth"}
                        width={0.5}
                        size={HEADERTXT.NORMALSIZE}
                        weight={FONTWEIGHT.NORMAL}
                        onChange={(txt) => setPlace(txt)}
                        value={place}
                        color={FONTCOLOR.gray}
                        fontcolor={FONTCOLOR.Black}
                    />
                </View>

            </View>
            <View style={styles.btn}>
                <CustomBtn
                    title={"Create new Kundali"}
                    color={BACKGROUND_COLOR.Yellow}
                    radius={BTNRADIUS.gmax}
                    fontcolor={FONTCOLOR.Black}
                    weight={FONTWEIGHT.NORMAL}
                    onClick={Create}
                />
            </View>


        </View>
    )
}

export default CreateKundali

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        // justifyContent:'center'
    },
    switchBtnsView: {
        flexDirection: 'row',
        marginVertical: 10,
    },
    switchLBtn: {
        flex: 1,
        marginRight: 5
    },
    switchRBtn: {
        flex: 1,
        marginLeft: 5
    },
    inputView: {
        marginVertical: 15
    },
    btn: {
        marginTop: 15
    }
})