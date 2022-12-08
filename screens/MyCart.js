import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialIcons';


function MyCart({ navigation, route }) {
    let obj = [route.params]

    let [value, setValue] = useState(1)
    let [price, setPrice] = useState([])
    let [quantity, setQuantity] = useState([])

    let increase = () => {
        setValue(value + 1)
    }
    let decrease = () => {
        if (value > 1) {
            setValue(value - 1)
        }
    }
    return (
        <>
            {obj.map((e, i) => (
                <View key={i} style={{ backgroundColor: 'lightblue', height: '100%', paddingVertical: 20, paddingHorizontal: 10 }}>
                    <View key={i} style={{ minHeight: 100, maxHeight: 100, maxWidth: '100%', borderRadius: 15, flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 10, backgroundColor: 'white' }}>
                        <View style={{ width: '25%', alignItems: 'center', justifyContent: 'center' }}>
                            <Image source={{ uri: e.image }} resizeMode='stretch' style={{ height: 70, width: 70 }} />
                        </View>
                        <View style={{ justifyContent: 'center', width: '55%', paddingHorizontal: 10 }}>
                            <Text style={{ color: 'black', fontSize: 14 }}>{e.title.slice(0, 35) + (e.title.length > 35 ? ' ....' : "")}</Text>
                            <Text style={{ color: 'black', fontWeight: 'bold', marginTop: 2 }}>$ {e.price}</Text>
                            <Text style={{ color: 'black', marginTop: 5, borderTopWidth: 1 }}>{e.price} * {value} = $ {e.price * value}</Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center', width: '20%' }}>
                            <Icon onPress={increase} name="add" size={15} color="white" style={{ textAlign: 'center', backgroundColor: 'black', width: '100%', padding: 3, backgroundColor: 'black' }} />
                            <Text style={{ fontSize: 18, color: 'black' }}>{value}</Text>
                            <Icon onPress={decrease} name="remove" size={15} color="white" style={{ textAlign: 'center', backgroundColor: 'black', width: '100%', padding: 3, backgroundColor: 'black' }} />
                        </View>
                    </View>
                </View>
            ))}
        </>
    )
}
export default MyCart