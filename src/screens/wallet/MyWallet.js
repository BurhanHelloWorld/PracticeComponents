import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import TextLable from '../../components/reusable/customLables/TextLable'
import { BACKGROUND_COLOR, BTNRADIUS, FONTCOLOR, FONTWEIGHT, HEADERTXT, TXTALLIGN } from '../../enums/CustomStyles'
import CustomBtn from '../../components/reusable/customBtns/CustomBtn'
import CustomLangBtns from '../../components/reusable/customBtns/CustomLangBtns'
import { TRANSACTIONS } from '../../assets/Data/Dummydata'


const MyWallet = ({navigation}) => {

    const [showLoadBtn, setShowLoadBtn] = useState(false)

    useEffect(() => {
        if (TRANSACTIONS.length > 7) {
            setShowLoadBtn(true)
        }
        else {
            setShowLoadBtn(false)
        }
    }, [TRANSACTIONS])


    const renderView = ({ item }) => {
        return (
            <View style={styles.transactions}>
                <View style={{ flex: 1, flexDirection: 'row', alignItems: 'center' }}>
                    <View>
                        <CustomLangBtns
                            height={40}
                            width={40}
                            radius={20}
                            title={"icon"}
                            color={BACKGROUND_COLOR.Yellow}
                        />
                    </View>
                    <View style={{ marginHorizontal: 5 }}>
                        <TextLable
                            Title={item.desc}
                            color={FONTCOLOR.Black}
                            weight={FONTWEIGHT.NORMAL}
                        />
                        <TextLable
                            Title={item.time}
                            color={FONTCOLOR.Black}
                            size={10}
                        />
                    </View>
                </View>
                <View style={{ flex: 1, justifyContent: 'center', alignItems: 'flex-end' }}>
                    <TextLable
                        Title={item.amount}
                        color={FONTCOLOR.Black}
                        weight={FONTWEIGHT.NORMAL}
                    />
                    <TextLable
                        Title={item.status}
                        color={item.status == "Success" ? "green" : "red"}
                        size={10}
                    />
                </View>
            </View>
        )
    }

    return (
        <View style={styles.container}>
            <View style={{ alignItems: 'center' }}>
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
            <View style={styles.btnView}>
                <View style={{ flex: 1, marginRight: 2 }}>
                    <CustomBtn
                        title={"Withdrawal"}
                        color={BACKGROUND_COLOR.LightGray}
                        fontcolor={FONTCOLOR.Black}
                        radius={BTNRADIUS.gmax}
                    />
                </View>
                <View style={{ flex: 1, marginLeft: 2 }}>
                    <CustomBtn
                        title={"Topup"}
                        color={"green"}
                        fontcolor={FONTCOLOR.White}
                        radius={BTNRADIUS.gmax}
                        onClick={()=>navigation.navigate("Topup")}
                    />
                </View>
            </View>

            <View style={{ flex: 1 }}>
                <TextLable
                    Title={"Transactions"}
                    color={FONTCOLOR.Black}
                    weight={FONTWEIGHT.NORMAL}
                />

                <FlatList
                    data={TRANSACTIONS}
                    renderItem={renderView}
                />

            </View>
            {
                showLoadBtn
                    ?
                    <CustomBtn
                        title={"Load more"}
                        fontcolor={FONTCOLOR.Black}
                        radius={BTNRADIUS.gmax}
                        color={BACKGROUND_COLOR.LightGray}
                    />
                    :
                    null
            }

        </View>
    )
}

export default MyWallet

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 15
    },
    btnView: {
        flexDirection: 'row',
        marginVertical: 15
    },
    transactions: {
        borderBottomWidth: 0.5,
        flexDirection: 'row',
        paddingVertical: 20
    }
})