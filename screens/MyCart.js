import React from 'react'
import { View, Text, Image } from 'react-native'

function MyCart({ navigation, route }) {
    let obj = [route.params]
    return (
        <>
            {obj.map((e, i) => (
                <View style={{ backgroundColor: 'lightblue', height: '100%', paddingVertical: 25, width:'100%' }}>
                    <View key={i} style={{ borderRadius: 20, flexDirection: 'row', paddingHorizontal: 25, paddingVertical: 5, marginHorizontal: 20, backgroundColor: 'white' }}>
                        <View>
                            <Image source={{ uri: e.image }} resizeMode='contain' style={{ height: 70, width: 70 }} />
                        </View>
                        <View style={{ justifyContent: 'center', marginHorizontal: 15 }}>
                            <Text style={{ color: 'black', fontSize: 16 }}>{e.title}</Text>
                            <Text style={{ color: 'black', fontWeight: 'bold', fontStyle: 'italic' }}>$ {e.price}</Text>
                        </View>
                        <View style={{ justifyContent: 'center', flexDirection:'row', alignItems:'center'}}>
                            <Text>+</Text>
                            <Text>1</Text>
                            <Text>-</Text>
                        </View>
                    </View>
                </View>
            ))}
        </>
    )
}
export default MyCart