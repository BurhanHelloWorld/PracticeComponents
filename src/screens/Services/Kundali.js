import { Dimensions, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { BACKGROUND_COLOR, BTNRADIUS, FONTCOLOR, FONTWEIGHT } from '../../enums/CustomStyles'
import TextLable from '../../components/reusable/customLables/TextLable'
import CustomBtn from '../../components/reusable/customBtns/CustomBtn'

const Kundali = ({ navigation, route }) => {
    const { N } = route.params || {};


    useEffect(() => {
        if (N) {
            console.log('==>>>>>>', N);
            setShow(true)
        } else {
            console.log('No params available');
        }
    }, [N]);

    
    const [show, setShow] = useState(false)

    return (
        <View style={styles.container}>
            <View style={styles.innerView}>

                <View style={styles.header}>
                    <TextLable
                        Title={"Male"}
                        color={FONTCOLOR.gray}
                        weight={FONTWEIGHT.NORMAL}
                    />
                    <CustomBtn
                        color={BACKGROUND_COLOR.LightGray}
                        title={"Edit"}
                        width={'25%'}
                        radius={BTNRADIUS.max}
                        fontcolor={FONTCOLOR.gray}
                        weight={FONTWEIGHT.NORMAL}
                    />
                </View>

                <View>

                    <View style={styles.innerBox}>

                        <View style={{ flex: 1 }}>
                            <TextLable
                                Title={"Name"}
                                color={FONTCOLOR.gray}
                            />
                            <TextLable
                                Title={show ? N.name : ""}
                                color={FONTCOLOR.Black}
                                weight={FONTWEIGHT.HARD}
                            />
                        </View>

                        <View style={{ flex: 1 }}>
                            <TextLable
                                Title={"Place of Birth"}
                                color={FONTCOLOR.gray}
                            />
                            <TextLable
                                Title={show ? N.place : ""}
                                color={FONTCOLOR.Black}
                                weight={FONTWEIGHT.HARD}
                            />
                        </View>

                    </View>

                    <View style={styles.innerBox}>

                        <View style={{ flex: 1 }}>
                            <TextLable
                                Title={"Date of Birth"}
                                color={FONTCOLOR.gray}
                            />
                            <TextLable
                                Title={show ? N.dob : ""}
                                color={FONTCOLOR.Black}
                                weight={FONTWEIGHT.HARD}
                            />
                        </View>

                        <View style={{ flex: 1 }}>
                            <TextLable
                                Title={"Time of Birth"}
                                color={FONTCOLOR.gray}
                            />
                            <TextLable
                                Title={show ? N.time : ""}
                                color={FONTCOLOR.Black}
                                weight={FONTWEIGHT.HARD}
                            />
                        </View>

                    </View>

                </View>
            </View>

            <View>
                <CustomBtn
                    title={'Create New Kundli'}
                    color={BACKGROUND_COLOR.Yellow}
                    radius={BTNRADIUS.gmax}
                    fontcolor={FONTCOLOR.Black}
                    onClick={() => navigation.navigate('CreateKundali')}
                />
            </View>
        </View>
    )
}

export default Kundali

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
    },
    innerView: {
        backgroundColor: BACKGROUND_COLOR.White,
        elevation: 4,
        marginVertical: 15,
        borderRadius: 12,

    },
    header: {
        flexDirection: 'row',
        padding: 10,
        justifyContent: 'space-between',
        alignItems: 'flex-end',
        // flex:1
    },
    innerBox: {
        flexDirection: 'row',
        padding: 10,
        marginVertical: 12
    }
})