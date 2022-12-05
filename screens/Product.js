import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import Icon from 'react-native-vector-icons/dist/MaterialIcons';


function Product({ navigation, route }) {
    console.log(route.params)
    return (
        <>
            <View style={{ height: '100%' }}>
                <Text style={{ marginHorizontal: 10, backgroundColor: '#344D67', fontWeight: 'bold', textAlign: 'center', paddingVertical: 5, color: 'white', fontStyle: 'italic', fontSize: 18, borderBottomRightRadius: 20, borderBottomLeftRadius: 20 }}>{route.params.category.slice(0, 1).toUpperCase() + route.params.category.slice(1)}</Text>
                <View style={{ paddingHorizontal: 30, paddingVertical: 20, backgroundColor: 'white', height: '40%' }}>
                    <Text style={{ color: 'black', fontSize: 20, fontWeight: 'bold', fontStyle: 'italic', textDecorationLine: 'underline', textAlign: 'center', marginTop: 0 }}>{route.params.title}</Text>
                    <View style={{ alignItems: 'center', justifyContent: 'center', height: '80%' }}>
                        <Image source={{ uri: route.params.image }} style={{ resizeMode: 'contain', width: '100%', height: 150 }} />
                    </View>

                </View>
                <View style={{ marginHorizontal: 10, paddingHorizontal: 15, paddingVertical: 10, backgroundColor: '#344D67', height: '60%', borderTopRightRadius: 30, borderTopLeftRadius: 30 }}>
                    <Text style={{ color: 'white', fontSize: 20 }}>$ {route.params.price}</Text>
                    <Text style={{ color: 'white', marginVertical: 15, fontStyle: 'italic', textAlign: 'justify' }}>{route.params.description.slice(0, 1).toUpperCase() + route.params.description.slice(1)}</Text>
                    <Text style={{ color: 'white' }}>Product ID: {route.params.id}</Text>
                    <Text style={{ color: 'white' }}>In Stock: {route.params.rating.count}</Text>
                    <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                        <Text style={{ color: 'white', fontSize: 30 }}>{route.params.rating.rate}</Text>
                        <Icon name="star" size={25} color="white" />
                    </View>
                    <View style={{ justifyContent: 'flex-end' }}>
                        <TouchableOpacity style={{ backgroundColor: 'white', paddingVertical: 10, borderRadius: 15, alignItems: 'center', marginTop: '2%' }}>
                            <Text style={{ color: 'black', fontWeight: 'bold', fontSize: 18, fontStyle: 'italic', fontFamily: 'sans-serif' }}>Add to Cart</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </View>
        </>
    )
}

export default Product