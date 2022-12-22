import React, { useState } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialIcons';
import AsyncStorage from '@react-native-async-storage/async-storage';


function Product({ navigation, route }) {
    // let [product, setProduct] = useState()
    let obj = route.params

    let addToCart = (e) => {
        // console.log('Product Added')
        const storeData = async () => {
            try {
                const jsonValue = JSON.stringify(obj)
                await AsyncStorage.setItem('orderProduct', jsonValue)
                console.log('item', jsonValue)
            } catch (e) {
                console.log(e)
            }
        }
        storeData()
        // setProduct(e)
    }
    // console.log(product)

    return (
        <>
            <ScrollView style={{ height: '100%', marginTop: 10, marginBottom: 10 }}>
                <Text style={{ marginHorizontal: 10, backgroundColor: '#344D67', fontWeight: 'bold', textAlign: 'center', paddingVertical: 5, color: 'white', fontStyle: 'italic', fontSize: 18, borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}>{obj.category.slice(0, 1).toUpperCase() + obj.category.slice(1)}</Text>
                <View style={{ paddingHorizontal: 30, paddingVertical: 30, backgroundColor: 'white', height: '40%' }}>
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', fontStyle: 'italic', textDecorationLine: 'underline', textAlign: 'center', marginTop: 0 }}>{obj.title}</Text>
                    <View style={{ alignItems: 'center', justifyContent: 'center', height: '80%' }}>
                        <Image source={{ uri: obj.image }} style={{ resizeMode: 'contain', width: '100%', height: 150 }} />
                    </View>
                </View>
                <View style={{ marginHorizontal: 10, paddingHorizontal: 15, paddingTop: 30, paddingBottom: 50, backgroundColor: '#344D67', borderTopRightRadius: 40, borderRadius: 40 }}>
                    <Text style={{ color: 'white', fontSize: 20 }}>$ {obj.price}</Text>
                    <Text style={{ color: 'white', marginVertical: 15, fontStyle: 'italic', textAlign: 'justify' }}>{obj.description.slice(0, 1).toUpperCase() + obj.description.slice(1)}</Text>
                    <Text style={{ color: 'white' }}>Product ID: {obj.id}</Text>
                    <Text style={{ color: 'white' }}>In Stock: {obj.rating.count}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 30 }}>{obj.rating.rate}</Text>
                        <Icon name="star" size={25} color="white" />
                    </View>
                    <View style={{ marginBottom: 50, marginTop: 20 }}>
                        <TouchableOpacity onPress={() => addToCart(obj)} style={{ backgroundColor: 'white', paddingVertical: 10, borderRadius: 15, alignItems: 'center' }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18, fontStyle: 'italic', fontFamily: 'sans-serif' }}>Add to Cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </ScrollView>
        </>
    )
}

export default Product