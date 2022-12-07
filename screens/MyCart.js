import React, { useState } from 'react'
import { View, Text, Image } from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialIcons';


function MyCart({ navigation, route }) {
    let obj = [route.params]

    let [disabled, setDisabled] = useState(true)
    let [value, setValue] = useState(1)

    let increase = () => {
        setValue(value + 1)
    }
    let decrease = () => {
        if (value >= 1) {
            setDisabled(false)
            setValue(value - 1)
        }
        else {
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
                        <View style={{ justifyContent: 'center',  width: '55%', paddingHorizontal: 10 }}>
                            <Text style={{ color: 'black', fontSize: 14 }}>{e.title.slice(0, 35) + (e.title.length > 35 ? ' ....' : "")}</Text>
                            <Text style={{ color: 'black', fontWeight: 'bold', marginTop:5 }}>$ {e.price}</Text>
                        </View>
                        <View style={{ justifyContent: 'center', alignItems: 'center',  width: '20%' }}>
                            <Icon onPress={increase} name="add" size={15} color="white" style={{ textAlign: 'center', backgroundColor: 'black', width: '100%', padding: 3, backgroundColor: 'black' }} />
                            <Text style={{ fontSize: 18, color: 'black' }}>{value}</Text>
                            <Icon disabled={disabled} onPress={decrease} name="remove" size={15} color="white" style={{ textAlign: 'center', backgroundColor: 'black', width: '100%', padding: 3, backgroundColor: 'black' }} />
                        </View>
                    </View>
                </View>
            ))}
        </>
    )
}
export default MyCart