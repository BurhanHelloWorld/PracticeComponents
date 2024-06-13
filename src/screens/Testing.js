import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'

const Testing = () => {
    return (
        <View style={{ flex: 1 }}>
            <Text style={{ textAlign: 'center', fontSize: 22, fontWeight: 'bold' }}>
                Welcome to login page
            </Text>
            <View style={{ justifyContent: 'center', flex: 1 }}>
                <TextInput style={{ backgroundColor: '#92fcc2', marginBottom: 10, paddingHorizontal: 10, color: 'white', elevation: 4 }}
                    placeholder='Enter your Username'
                    placeholderTextColor={'white'}
                />
                <TextInput style={{ backgroundColor: 'grey', paddingHorizontal: 10, color: 'white', fontWeight: '800' }}
                    placeholder='******'
                    placeholderTextColor={'white'}
                />
                <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
                    <TouchableOpacity style={{ width: '25%', marginHorizontal: 10, borderRadius: 20, backgroundColor: 'green', marginTop: 10, height: 40, justifyContent: 'center', alignItems: 'center' }}>
                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ color: 'white', fontWeight: 'bold' }}>
                                Login
                            </Text>
                            <Image source={require('../assets/enter.png')} style={{ height: 24, width: 24,marginLeft:5 }} />
                        </View>

                    </TouchableOpacity>
                    <TouchableOpacity style={{ width: '25%', borderRadius: 20, backgroundColor: 'green', marginTop: 10, height: 40, justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontWeight: 'bold' }}>
                            Signup
                        </Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    )
}

export default Testing

const styles = StyleSheet.create({})