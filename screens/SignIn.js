import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Image, ImageBackground } from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialIcons';


function SignIn({ navigation }) {
    let move = () => {
        navigation.navigate('SignUp')
    }
    return (
        <>
            <View style={{ backgroundColor: '#6D9AC4', height: '100%' }}>
                <ImageBackground style={{ height: '100%', width: '100%' }} source={{ uri: 'https://www.picsartphotoediting.com/wp-content/uploads/2022/01/cb-background.jpg' }}>
                    <View style={{ justifyContent: 'center', height:'100%' }}>
                        <View style={{ borderWidth:2, borderColor:'white', backgroundColor: 'rgba(20, 20, 20, 0.9)', marginHorizontal: 25, paddingVertical: 35, borderRadius: 40, justifyContent: 'center' }}>
                            <Text style={{ fontSize: 26, textAlign: 'center', color: 'white', fontWeight: 'bold' }}>SIGN IN</Text>
                            <View style={{ alignItems: 'center', marginVertical: 10 }}>
                                <Icon name="person" size={70} color="white" />
                            </View>
                            <View style={{ paddingHorizontal: 25 }}>
                                <Text style={{ fontSize: 16, marginTop: 20, marginBottom: 5, color: 'white' }}>Email</Text>
                                <TextInput placeholderTextColor='white' placeholder='abc@gmail.com' style={{ paddingHorizontal: 10, borderWidth: 1, borderColor: 'white', paddingVertical: 4, borderRadius: 10 }} />
                            </View>
                            <View style={{ paddingHorizontal: 25, }}>
                                <Text style={{ fontSize: 16, marginTop: 20, marginBottom: 5, color: 'white' }}>Password</Text>
                                <TextInput placeholderTextColor='white' placeholder='...........' style={{ paddingHorizontal: 10, borderWidth: 1, borderColor: 'white', paddingVertical: 4, borderRadius: 10 }} />
                            </View>
                            <View>
                                <TouchableOpacity style={{ paddingHorizontal: 25, marginTop: 30 }}>
                                    <Text style={{ backgroundColor: '#F06292', color: 'white', fontWeight: 'bold', fontSize: 18, textAlign: 'center', paddingVertical: 10, borderRadius: 10 }}>LOGIN</Text>
                                </TouchableOpacity>
                                <View style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'center' }}>
                                    <Text style={{ textAlign: 'center', fontSize: 16, color: 'lightgrey' }}>Need an account? </Text>
                                    <TouchableOpacity onPress={move} style={{ justifyContent: 'flex-start', alignItems: 'baseline' }}><Text style={{ color: 'white', fontWeight: 'bold', fontSize: 16 }}>SIGN UP</Text></TouchableOpacity>
                                </View>
                            </View>
                        </View>
                    </View>
                </ImageBackground>
            </View>
        </>
    )
}

export default SignIn