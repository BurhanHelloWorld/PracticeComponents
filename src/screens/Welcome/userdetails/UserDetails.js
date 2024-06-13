import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import TextLable from '../../../components/reusable/customLables/TextLable'
import { BACKGROUND_COLOR, FONTCOLOR, FONTWEIGHT, HEADERTXT } from '../../../enums/CustomStyles'
import CustomBtn from '../../../components/reusable/customBtns/CustomBtn'
import CustomLangBtns from '../../../components/reusable/customBtns/CustomLangBtns'
import UserDetailLine from './UserDetailLine'
import UserDetailProfileView from './UserDetailProfileView'
import UserDetailsAbout from './UserDetailsAbout'
import { CUSTOMERREVIEWS } from '../../../assets/Data/Dummydata'
import HomeFooterEnd from '../../../components/reusable/HomeFooterEnd'
import HomeFooter from '../../../components/reusable/HomeFooter'

const UserDetails = ({ route }) => {

    const { i } = route.params
    console.log(i)

    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <TextLable
                    Title={"Profile"}
                    color={FONTCOLOR.Black}
                    weight={FONTWEIGHT.NORMAL}
                    size={HEADERTXT.NORMALSIZE}
                />
            </View>
            <ScrollView>
                <View>
                    <View>
                        <UserDetailProfileView i={i} />
                    </View>
                    <View style={styles.minsView}>

                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <CustomLangBtns
                                    color={BACKGROUND_COLOR.Yellow}
                                    height={24}
                                    width={24}
                                    radius={12}
                                />
                                <View style={{ marginHorizontal: 5 }}>
                                    <TextLable
                                        Title={"7230"}
                                        color={FONTCOLOR.Black}
                                        weight={FONTWEIGHT.HARD}
                                    />
                                    <TextLable
                                        Title={"min"}
                                        color={FONTCOLOR.Black}
                                        weight={FONTWEIGHT.NORMAL}
                                        size={10}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <CustomLangBtns
                                    color={BACKGROUND_COLOR.Yellow}
                                    height={24}
                                    width={24}
                                    radius={12}
                                />
                                <View style={{ marginHorizontal: 5 }}>
                                    <TextLable
                                        Title={"7230"}
                                        color={FONTCOLOR.Black}
                                        weight={FONTWEIGHT.HARD}
                                    />
                                    <TextLable
                                        Title={"min"}
                                        color={FONTCOLOR.Black}
                                        weight={FONTWEIGHT.NORMAL}
                                        size={10}
                                    />
                                </View>
                            </View>
                        </View>
                        <View style={{ flex: 1, alignItems: 'center' }}>
                            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                                <CustomLangBtns
                                    color={BACKGROUND_COLOR.Yellow}
                                    height={24}
                                    width={24}
                                    radius={12}
                                />
                                <View style={{ marginHorizontal: 5 }}>
                                    <TextLable
                                        Title={"7230"}
                                        color={FONTCOLOR.Black}
                                        weight={FONTWEIGHT.HARD}
                                    />
                                    <TextLable
                                        Title={"min"}
                                        color={FONTCOLOR.Black}
                                        weight={FONTWEIGHT.NORMAL}
                                        size={10}
                                    />
                                </View>
                            </View>
                        </View>

                    </View>

                    <View>
                        <UserDetailsAbout i={i} />
                    </View>

                    <View style={styles.ratingView}>
                        <TextLable
                            Title={"Rating & Reviews "}
                            color={FONTCOLOR.Black}
                            weight={FONTWEIGHT.NORMAL}
                        />
                        <View style={{ flexDirection: 'row', alignItems: 'center', marginVertical: 10 }}>
                            <Text>Icon</Text>
                            <View style={{ marginLeft: 5 }}>
                                <TextLable
                                    Title={i.Rating}
                                    size={HEADERTXT.BIGSIZE}
                                    color={FONTCOLOR.Black}
                                    weight={FONTWEIGHT.HARD}
                                />
                            </View>
                        </View>
                        <TextLable
                            Title={"12.2K reviews"}
                            color={FONTCOLOR.gray}
                            size={11}
                            weight={FONTWEIGHT.NORMAL}
                        />
                        <View style={{ marginVertical: 5 }}>
                            <UserDetailLine />
                            <UserDetailLine />
                            <UserDetailLine />
                            <UserDetailLine />
                        </View>
                    </View>


                    <View style={{ flex: 1 }}>
                        {
                            CUSTOMERREVIEWS.map((item, index) => {
                                return (
                                    <View style={styles.customerReviews} key={index}>
                                        <TextLable
                                            Title={item.name}
                                            color={FONTCOLOR.Black}
                                            weight={FONTWEIGHT.NORMAL}
                                        />
                                        <TextLable
                                            Title={item.date}
                                            color={FONTCOLOR.gray}
                                            weight={FONTWEIGHT.NORMAL}
                                            size={10}
                                            fontstyle={'italic'}
                                        />
                                        <TextLable
                                            Title={item.description}
                                            color={FONTCOLOR.gray}
                                            weight={'400'}
                                            size={11}
                                            margin={5}
                                        />
                                    </View>
                                )
                            })
                        }
                    </View>

                    <View style={{marginVertical:15}}>
                        <CustomBtn
                        title={"Report and Block"}
                        color={BACKGROUND_COLOR.LightGray}
                        fontcolor={FONTCOLOR.Black}
                        weight={FONTWEIGHT.NORMAL}
                        />
                    </View>
                    <View>
                        <HomeFooterEnd/>
                    </View>
                </View>
            </ScrollView>
        </View>
    )
}

export default UserDetails

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    header: {
        padding: 15,
        borderBottomWidth: 0.5,
        borderColor: BACKGROUND_COLOR.LightGray
    },
    minsView: {
        flexDirection: 'row',
        padding: 15,
        borderBottomWidth: 0.5,
        borderColor: BACKGROUND_COLOR.LightGray
    },
    ratingView: {
        padding: 15,
        borderBottomWidth: 2.5,
        borderColor: BACKGROUND_COLOR.LightGray
    },
    customerReviews: {
        padding: 15,
        borderBottomWidth: 0.5,
        borderColor: BACKGROUND_COLOR.LightGray
    }

})