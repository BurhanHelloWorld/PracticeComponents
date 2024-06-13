import { Dimensions, FlatList, Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import { BACKGROUND_COLOR, BTNRADIUS, FONTCOLOR, FONTWEIGHT, HEADERTXT } from '../../enums/CustomStyles'
import { En } from '../../locales/En'
import TextLable from './customLables/TextLable'
import CustomBtn from './customBtns/CustomBtn'

const HomeScreenPages = () => {

    const [pageIndex, setPageIndex] = useState(0)
    // console.warn(pageIndex)

    const HomePagesdata = [
        {
            Title: En.homeboxHeader, BtnTitle: En.homebtnTitle, img: require('../../assets/images/home/Cover1.png')
        },
        {
            Title: En.homeboxHeader, BtnTitle: En.homebtnTitle, img: require('../../assets/images/home/Cover2.png')
        },
        {
            Title: En.homeboxHeader, BtnTitle: En.homebtnTitle, img: require('../../assets/images/home/Cover2.png')
        },
        {
            Title: En.homeboxHeader, BtnTitle: En.homebtnTitle, img: require('../../assets/images/home/Cover2.png')
        },
        {
            Title: En.homeboxHeader, BtnTitle: En.homebtnTitle, img: require('../../assets/images/home/Cover2.png')
        }
    ];

    const handleScroll = (event) => {
        const pageIndex = Math.round(event.nativeEvent.contentOffset.x / Dimensions.get('window').width);
        setPageIndex(pageIndex);
    }

    const renderView = ({ item, index }) => {

        return (
            <View style={{ width: Dimensions.get('window').width }} key={index}>
                <ImageBackground source={require('../../assets/images/home/Background.png')}
                    style={{ width: '100%', height: 250, position: 'absolute', top: 80 }}
                />
                <View style={styles.overlay}>
                    <Image source={item.img}
                        style={{ width: '85%' }} />

                    <View style={styles.content}>
                        <View style={{ marginTop: 5 }}>
                            <TextLable
                                Title={item.Title}
                                size={HEADERTXT.NORMALSIZE}
                                color={FONTCOLOR.Black}
                                weight={FONTWEIGHT.HARD}
                            />
                        </View>
                        <View style={{ marginTop: 5 }}>
                            <TextLable
                                Title={En.homeboxsubTitle}
                                size={HEADERTXT.SMALLSIZE}
                                color={FONTCOLOR.gray}
                            />
                        </View>
                        <View style={{ marginTop: 10 }}>
                            <CustomBtn
                                title={item.BtnTitle}
                                color={BACKGROUND_COLOR.Yellow}
                                radius={BTNRADIUS.gmax}
                                width="45%"
                                fontcolor={FONTCOLOR.Black}
                            />
                        </View>
                    </View>
                    <View style={{ flexDirection: 'row', marginTop: 25 }}>
                        {
                            HomePagesdata.map((_,i) => {
                                return (
                                    <View key={i}
                                        style={{
                                            width:pageIndex==i?16:8,
                                            height:6,
                                            backgroundColor:pageIndex==i? '#fff': 'red',
                                            marginHorizontal: 5,
                                            borderColor: '#fff',
                                            borderRadius: 1.5
                                        }}>
                                    </View>
                                )
                            })
                        }
                    </View>
                </View>

            </View>
        )
    }

    return (
        <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            pagingEnabled
            data={HomePagesdata}
            renderItem={renderView}
            onScroll={handleScroll}
            scrollEventThrottle={16}
        />
    )
}

export default HomeScreenPages

const styles = StyleSheet.create({
    overlay: {
        // position: 'absolute',
        width: '100%',
        alignItems: 'center',
        padding: 5,
        marginBottom: 30
    },
    content: {
        backgroundColor: "#fff",
        padding: 10,
        elevation: 5,
        width: '85%',
    },
    dots: {

    }
})
