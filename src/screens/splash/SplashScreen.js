import { Image, ImageBackground, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

const SplashScreen = ({ navigation }) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('Login')
        }, 1000);

    }, [])


    return (
        <View style={styles.container}>
            <ImageBackground
                source={require('../../assets/images/splash/splash_bg.png')}
                style={{height:'100%', width:'100%'}}
            >
                <View style={styles.innerContainer}>
                    <Image
                        source={require('../../assets/images/splash/splash_logo.png')}
                        style={{alignSelf:'center', resizeMode:'center'}}
                    />
                </View>
            </ImageBackground>
        </View>
    )
}

export default SplashScreen

const styles = StyleSheet.create({
    container: {
        flex: 1
    },
    innerContainer: {
        flex: 1,
        justifyContent: 'center',
        // alignItems: 'center'
    }
})