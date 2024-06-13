import { FlatList, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import CustomBtn from '../../components/reusable/customBtns/CustomBtn'
import { BACKGROUND_COLOR, BTNRADIUS, FONTCOLOR, FONTWEIGHT, HEADERTXT } from '../../enums/CustomStyles'
import { LoveData, TAROTLIST, TarotData } from '../../assets/Data/Dummydata'
import HomeTop from '../../components/reusable/HomeTop'
import TextLable from '../../components/reusable/customLables/TextLable'
import HomeFooterEnd from '../../components/reusable/HomeFooterEnd'

const Love = ({ navigation }) => {

    const [showTarot, setShowTarot] = useState(null)
    const [showloadbtn, setShowLoadBtn] = useState(false)

    const onClickServices = (index) => {
        setShowTarot(index)
    }

    useEffect(() => {
        if (TAROTLIST.length > 4) {
            setShowLoadBtn(true)
        } else {
            setShowLoadBtn(false)
        }
    }, [TAROTLIST])


    return (
        <View style={{}}>
            <ScrollView>
                <View style={{ flexDirection: 'row', padding: 15 }}>
                    <ScrollView horizontal showsHorizontalScrollIndicator={false}>
                        {
                            LoveData.map((item, index) => {
                                return (
                                    <View key={index} style={{}}>
                                        <CustomBtn
                                            title={item.Services}
                                            radius={BTNRADIUS.gmax}
                                            width={100}
                                            margin={5}
                                            onClick={() => onClickServices(index)}
                                            color={showTarot === index ? BACKGROUND_COLOR.Yellow : BACKGROUND_COLOR.LightGray}
                                            fontcolor={FONTCOLOR.Black}
                                            weight={FONTWEIGHT.NORMAL}
                                        />
                                    </View>

                                )
                            })
                        }
                    </ScrollView>
                </View>

                {showTarot == 1
                    ?
                    <View style={{ padding: 15 }}>


                        <View>
                            <FlatList
                                scrollEnabled={false}
                                data={TAROTLIST}
                                renderItem={({ item }) => {
                                    return (
                                        <HomeTop
                                            Name={item.Name}
                                            desc={item.desc}
                                            Rating={item.Rating}
                                            ago={item.ago}
                                            img={item.img}
                                            onClick={()=>navigation.navigate('UserDetails', {i:item})}
                                        />
                                    )
                                }}
                            />
                            <View style={{ justifyContent: 'flex-end' }}>
                                {showloadbtn
                                    ?
                                    <CustomBtn
                                        title={"Load More"}
                                        radius={BTNRADIUS.gmax}
                                        color={BACKGROUND_COLOR.LightGray}
                                        fontcolor={FONTCOLOR.Black}
                                        weight={FONTWEIGHT.NORMAL}
                                    />
                                    :
                                    null
                                }
                            </View>
                        </View>
                    </View>
                    :
                    null
                }

                {
                    showTarot == 1
                        ?
                        <View>
                            <HomeFooterEnd />
                        </View>
                        :
                        null
                }


            </ScrollView>
        </View>
    )
}

export default Love

const styles = StyleSheet.create({})