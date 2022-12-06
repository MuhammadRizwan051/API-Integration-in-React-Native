import React from 'react'
import { View, Text, TextInput, TouchableOpacity, Image } from 'react-native'

function SignIn() {
    return (
        <>
            <View style={{ backgroundColor: '#10A19D', height: '100%' }}>
                <View style={{ backgroundColor: 'white', height: '60%', marginTop: '40%', paddingVertical: 25, marginHorizontal: 25, borderRadius: 60 }}>
                    <Text style={{ fontSize: 26, textAlign: 'center', color: '#10A19D', fontWeight: 'bold' }}>LOG IN</Text>
                    <View style={{ alignItems: 'center', marginVertical: 10 }}>
                        <Image style={{ height: 70, width: 70 }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/74/74472.png' }} />
                    </View>
                    <View style={{ paddingHorizontal: 25, }}>
                        <Text style={{ fontSize: 16, marginTop: 20, marginBottom: 5, color: 'black' }}>Email</Text>
                        <TextInput placeholderTextColor='grey' placeholder='abc@gmail.com' style={{ paddingHorizontal: 10, borderWidth: 1, paddingVertical: 4, borderRadius: 10 }} />
                    </View>
                    <View style={{ paddingHorizontal: 25, }}>
                        <Text style={{ fontSize: 16, marginTop: 20, marginBottom: 5, color: 'black' }}>Password</Text>
                        <TextInput placeholderTextColor='grey' placeholder='...........' style={{ paddingHorizontal: 10, borderWidth: 1, paddingVertical: 4, borderRadius: 10 }} />
                    </View>
                    <View>
                        <TouchableOpacity style={{ paddingHorizontal: 25, marginTop: 30 }}>
                            <Text style={{ backgroundColor: '#F06292', color: 'white', fontWeight: 'bold', fontSize: 18, textAlign: 'center', paddingVertical: 10, borderRadius: 10 }}>LOGIN</Text>
                        </TouchableOpacity>
                        <View style={{ marginTop: 20 }}>
                            <Text style={{ textAlign: 'center', fontSize: 16 }}>Need an account? SIGN UP </Text>
                        </View>
                    </View>
                </View>
            </View>
        </>
    )
}

export default SignIn