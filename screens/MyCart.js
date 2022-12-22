import React, { useEffect, useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';
// import { useIsFocused } from '@react-navigation/native';

function MyCart({ navigation, route }) {
    let [value, setValue] = useState(1)
    let [data, setData] = useState([])
    // const isFocused = useIsFocused()


    const getData = async () => {
        try {
            const jsonValue = await AsyncStorage.getItem('orderProduct')
            // return jsonValue != null ? JSON.parse(jsonValue) : null;
            const receiveData = JSON.parse(jsonValue)
            // const arr = []
            // arr.push(receiveData)
            setData([...data,receiveData])
            console.log('local', JSON.parse(jsonValue))
        } catch (e) {
            // error reading value
        }
    }
    console.log('data', data)

    useEffect(() => {
        getData()
    }, [])

    let increase = () => {
        setValue(value + 1)
    }
    let decrease = () => {
        if (value > 1) {
            setValue(value - 1)
        }
    }

    // let obj = route.params
    // console.log(route.params)
    // console.log(obj)


    let clear = () => {
        route.params = []
        console.log(clear)
    }


    return (
        <>
            <View style={{ backgroundColor: '#256D85', height: '100%', paddingVertical: 20, paddingHorizontal: 15 }}>
                {data.length > 0 ? (
                    <>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', fontSize: 18 }}>ORDER</Text>
                            {/* <View> */}
                            <TouchableOpacity onPress={() => clear}>
                                <Text style={{ color: 'white' }}>Clear Cart</Text>
                            </TouchableOpacity>
                            {/* </View> */}
                        </View>
                        <View style={{ maxHeight: '62%', paddingVertical: 10, justifyContent: 'center', alignItems: 'center' }}>
                            <ScrollView>
                                {data && data.map((e, i) => (
                                    // <View key={i} style={{ paddingVertical: 20, paddingHorizontal: 10, }}>
                                    <View key={i} style={{ marginBottom: 10, borderRadius: 15, flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 10, backgroundColor: 'white' }}>
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
                                    // </View>
                                ))}
                            </ScrollView>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, borderColor: 'white' }}>
                            <Text style={{ color: 'white', fontSize: 15 }}>SubTotal</Text>
                            <Text style={{ color: 'white', fontSize: 15 }}>$ 190</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginTop: 20, borderColor: 'white' }}>
                            <Text style={{ color: 'white', fontSize: 15 }}>Shipping</Text>
                            <Text style={{ color: 'white', fontSize: 15 }}>$ 10</Text>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: 'space-between', borderTopWidth: 3, paddingTop: 10, marginTop: 20, borderColor: 'white' }}>
                            <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>Total</Text>
                            <Text style={{ color: 'white', fontSize: 17, fontWeight: 'bold' }}>$ 200</Text>
                        </View>
                        <TouchableOpacity
                            style={{ position: 'absolute', bottom: 20, left: 15, justifyContent: 'center', alignItems: 'center', width: '100%' }}>
                            <Text style={{ backgroundColor: 'white', color: '#256D85', fontWeight: 'bold', fontSize: 20, width: '100%', borderRadius: 10, paddingVertical: 10, textAlign: 'center' }}>PROCEED TO CHECKOUT</Text>
                        </TouchableOpacity>
                    </>
                )
                    :
                    <View style={{ height: '100%', width: '100%', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 25, fontWeight: 'bold' }}>Cart is Empty</Text>
                    </View>
                }
            </View>
        </>
    )
}

export default MyCart