import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import TextLable from '../../components/reusable/customLables/TextLable'
import { BACKGROUND_COLOR, BTNRADIUS, FONTCOLOR, FONTWEIGHT, HEADERTXT } from '../../enums/CustomStyles'
import InputField from '../../components/reusable/customInputs/InputField'
import CustomBtn from '../../components/reusable/customBtns/CustomBtn'
import CustomLangBtns from '../../components/reusable/customBtns/CustomLangBtns'
import { TOPUPAMOUNT } from '../../assets/Data/Dummydata'

const Topup = () => {


    const [input, setInput] = useState("")

    const handleAmountPress = (amount) => {
        console.log(amount)
        setInput(amount)
    }

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TextLable
                    Title={"Available Balance"}
                    color={FONTCOLOR.Black}
                />
                <TextLable
                    Title={"$500"}
                    color={FONTCOLOR.Black}
                    size={HEADERTXT.BIGSIZE}
                    weight={FONTWEIGHT.HARD}
                />
            </View>

            <View style={styles.Box}>
                <View>
                    <TextLable
                        Title={"Add money to wallet"}
                        size={HEADERTXT.NORMALSIZE}
                        color={FONTCOLOR.Black}
                        weight={FONTWEIGHT.NORMAL}
                        margin={10}
                    />
                    <TextLable
                        Title={"Amount"}
                        color={FONTCOLOR.Black}
                    />
                    <InputField
                        Holder={"Enter Amount"}
                        size={HEADERTXT.NORMALSIZE}
                        weight={"500"}
                        color={BACKGROUND_COLOR.LightGray}
                        bottomWidthColor={BACKGROUND_COLOR.LightGray}
                        width={2}
                        keyboard={"number-pad"}
                        onChange={(txt) => setInput(txt)}
                        value={input}
                        fontcolor={FONTCOLOR.Black}
                    />
                </View>
                <View style={styles.amountBtnView}>

                    {TOPUPAMOUNT.map((item, index) => {
                        return (
                            <View style={styles.amountBtninnerView} key={index}>
                                <CustomLangBtns
                                    title={"+$" + item.amount}
                                    color={BACKGROUND_COLOR.LightGray}
                                    width={'80%'}
                                    height={30}
                                    onClick={() => handleAmountPress(item.amount)}
                                />
                            </View>
                        )
                    })}

                </View>

                <CustomBtn
                    title={"Topup"}
                    color={"green"}
                    radius={BTNRADIUS.gmax}
                    fontcolor={FONTCOLOR.White}
                />
            </View>

        </View>
    )
}

export default Topup

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15,
        backgroundColor: '#fff'
    },
    header: {
        alignItems: 'center'
    },
    Box: {
        borderWidth: 0.5,
        borderRadius: 12,
        padding: 10,
        marginVertical: 15
    },
    amountBtnView: {
        flexDirection: 'row',
        marginVertical: 20
    },
    amountBtninnerView: {
        flex: 1,
        alignItems: 'center'
    }
})