import React from 'react'
import { View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialIcons';


function MyCart({ navigation, route }) {
    let obj = [route.params]
    return (
        <>
            {obj.map((e, i) => (
                <View key={i} style={{ backgroundColor: 'lightblue', height: '100%', paddingVertical: 25, paddingHorizontal:10 }}>
                    <View key={i} style={{ maxWidth:'100%', borderWidth:1, flexDirection: 'row', paddingVertical: 5, paddingHorizontal:15, backgroundColor: 'white' }}>
                        <View style={{borderWidth:1, width:'20%'}}>
                            <Image source={{ uri: e.image }} resizeMode='contain' style={{ height: 70, width: 80 }} />
                        </View>
                        <View style={{ justifyContent: 'center', borderWidth:1, width:'60%' }}>
                            <Text style={{ color: 'black', fontSize: 16 }}>{e.title}</Text>
                            <Text style={{ color: 'black', fontWeight: 'bold', fontStyle: 'italic' }}>$ {e.price}</Text>
                        </View>
                        <View style={{ justifyContent: 'center', flexDirection:'row', alignItems:'center', borderWidth:1, width:'20%'}}>
                            {/* <Icon name="add" size={15} color="white" style={{borderRadius:5, padding:3, backgroundColor:'black'}} /> */}
                            <Text style={{fontSize:18}}>1</Text>
                            <Text style={{fontSize:18}}>1</Text>
                            <Text style={{fontSize:18}}>1</Text>
                            <Text style={{fontSize:18}}>1</Text>
                            <Text style={{fontSize:18}}>1</Text>
                            <Text style={{fontSize:18}}>1</Text>
                            <Text style={{fontSize:18}}>1</Text>
                            {/* <Icon name="remove" size={15} color="white" style={{borderRadius:5, padding:3, backgroundColor:'black'}} /> */}
                        </View>
                    </View>
                </View>
            ))}
        </>
    )
}
export default MyCart