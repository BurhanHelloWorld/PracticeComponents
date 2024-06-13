import { Dimensions, StyleSheet, View } from 'react-native'
import React from 'react'
import CustomBtn from '../../components/reusable/customBtns/CustomBtn'
import { BACKGROUND_COLOR, BTNRADIUS, FONTCOLOR, FONTWEIGHT } from '../../enums/CustomStyles'
import TextLable from '../../components/reusable/customLables/TextLable'
import CustomLangBtns from '../../components/reusable/customBtns/CustomLangBtns'
import { SVG } from '../../assets/svg'


const { width, height } = Dimensions.get('window');
const CIRCLE_SIZE = Math.min(width, height) * 0.85;

const AllServices = () => {

    return (
        <View style={styles.container}>
            <View style={styles.innerView}>
                <View style={styles.circle}>
                    <View style={styles.circleInnerView}>
                        <View style={styles.card}>
                            <View style={styles.cardinnerView}>
                                <View style={styles.iconView}>
                                    <SVG.Card height={30} width={30} />
                                </View>
                            </View>
                            <View style={styles.cardinnerView}>
                                <CustomLangBtns
                                    title={"+ Add Details"}
                                    color={"#fff1d1"}
                                    radius={BTNRADIUS.min}
                                    width={'80%'}
                                    height={40}
                                    fontcolor={FONTCOLOR.Black}
                                    weight={FONTWEIGHT.NORMAL}
                                />
                            </View>
                        </View>
                        <View style={[styles.card, { transform: [{ rotate: '10deg' }] }]}>
                            <View style={styles.cardinnerView}>
                                <View style={styles.iconView}>
                                    <SVG.Card height={30} width={30} />
                                </View>
                            </View>
                            <View style={styles.cardinnerView}>
                                <CustomLangBtns
                                    title={"+ Add Details"}
                                    color={"#fff1d1"}
                                    radius={BTNRADIUS.min}
                                    width={'80%'}
                                    height={40}
                                    fontcolor={FONTCOLOR.Black}
                                    weight={FONTWEIGHT.NORMAL}
                                />
                            </View>
                        </View>
                    </View>
                </View>
            </View>
            <View>
                <CustomBtn
                    title={"Match Kundli"}
                    fontcolor={FONTCOLOR.Black}
                    color={BACKGROUND_COLOR.Yellow}
                    radius={BTNRADIUS.gmax}
                    weight={FONTWEIGHT.NORMAL}
                />
            </View>

        </View>
    )
}

export default AllServices

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 12
    },
    innerView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    circle: {
        height: CIRCLE_SIZE,
        width: CIRCLE_SIZE,
        borderRadius: CIRCLE_SIZE / 2,
        backgroundColor: '#fff1d1',
        borderWidth: 4,
        borderStyle: 'dashed',
        borderColor: "#f5d284",
        justifyContent: 'center',
        alignItems: 'center',
    },
    circleInnerView: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    card: {
        height: 200,
        width: 165,
        backgroundColor: '#fff',
        elevation: 4,
        transform: [{ rotate: '-10deg' }],
        borderRadius: 12,
        padding: 10
    },
    cardinnerView: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center'
    },
    iconView: {
        height: 78,
        width: 78,
        borderRadius: 39,
        borderStyle: "dashed",
        borderWidth: 3,
        borderColor: BACKGROUND_COLOR.LightGray,
        alignItems: 'center',
        justifyContent: 'center'
    }
})