import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

function SignUp({ navigation }) {
    let move = () => {
        navigation.navigate('SignIn')
    }
    return (
        <>
            <View style={{ backgroundColor: '#10A19D', height: '100%' }}>
                <ImageBackground style={{ height: '100%', width: '100%' }} source={{ uri: 'https://ashisheditz.com/wp-content/uploads/2022/08/best-new-snapseed-background.jpg' }}>
                    <View style={{ justifyContent: 'center', height: '100%' }}>
                        <View style={{ backgroundColor: 'rgba(255, 255, 255, 0.9)', marginHorizontal: 25, paddingVertical: 35, borderRadius: 40, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 26, textAlign: 'center', color: '#10A19D', fontWeight: 'bold' }}>SIGN UP</Text>
                            <View style={{ alignItems: 'center', marginVertical: 10 }}>
                                {/* <Image style={{ height: 70, width: 70 }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/74/74472.png' }} /> */}
                                <Icon name="person" size={70} color="black" />
                            </View>
                            <View style={{ paddingHorizontal: 25 }}>
                                <Text style={{ fontSize: 16, marginTop: 20, marginBottom: 5, color: 'black' }}>Email</Text>
                                <TextInput placeholderTextColor='grey' placeholder='abc@gmail.com' style={{ paddingHorizontal: 10, borderWidth: 1, paddingVertical: 4, borderRadius: 10 }} />
                            </View>
                            <View style={{ paddingHorizontal: 25 }}>
                                <Text style={{ fontSize: 16, marginTop: 20, marginBottom: 5, color: 'black' }}>Password</Text>
                                <TextInput placeholderTextColor='grey' placeholder='...........' style={{ paddingHorizontal: 10, borderWidth: 1, paddingVertical: 4, borderRadius: 10 }} />
                            </View>
                            <View>
                                <TouchableOpacity style={{ paddingHorizontal: 25, marginTop: 30 }}>
                                    <Text style={{ backgroundColor: '#F06292', color: 'white', fontWeight: 'bold', fontSize: 18, textAlign: 'center', paddingVertical: 10, borderRadius: 10 }}>SIGN UP</Text>
                                </TouchableOpacity>
                                <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ textAlign: 'center', fontSize: 16 }}>Already a user? </Text>
                                    <TouchableOpacity onPress={move} style={{ justifyContent: 'flex-start', alignItems: 'baseline' }}><Text style={{ color: 'black', fontWeight: 'bold', fontSize: 16 }}>LOGIN</Text></TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </>
    )
}

export default SignUp

