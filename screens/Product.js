import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

function Product({ navigation, route }) {
    console.log(route.params)
    return (
        <>
            <View style={{height:'100%'}}>
                <View style={{ paddingHorizontal: 30, paddingVertical: 20, backgroundColor: 'white', height:'50%' }}>
                    <Text style={{color:'black', fontSize:15}}>{route.params.category.slice(0,1).toUpperCase() + route.params.category.slice(1)}</Text>
                    <Text style={{color:'black', fontSize:22, fontWeight:'bold', fontStyle:'italic', textDecorationLine:'underline'}}>{route.params.title}</Text>
                    <View style={{alignItems: 'center', justifyContent: 'center', height:'80%'}}>
                        <Image source={{ uri: route.params.image }} style={{ resizeMode: 'contain', width: '100%', height: 200 }} />
                    </View>
                </View>
                <View style={{ paddingHorizontal: 30, paddingVertical: 20, backgroundColor: 'black', height: '50%', borderTopRightRadius: 40, borderTopLeftRadius: 40, }}>
                    <Text style={{ color: 'grey', fontSize:20 }}>$ {route.params.price}</Text>
                    <Text style={{ color: 'grey' , marginVertical:30, fontStyle:'italic', textAlign:'justify' }}>{route.params.description.slice(0,1).toUpperCase() + route.params.description.slice(1)}</Text>
                    <Text style={{ color: 'lightgrey' }}>Product ID: {route.params.id}</Text>
                    <Text style={{ color: 'white' }}>In Stock: {route.params.rating.count}</Text>
                    <Text style={{ color: 'white' }}>Rating: {route.params.rating.rate}</Text>
                    <TouchableOpacity style={{backgroundColor:'white', alignItems:'center', justifyContent:'flex-end', paddingVertical:10, borderRadius:15, marginTop:'30%'}}>
                        <Text style={{color:'black', fontWeight:'bold', fontSize:18, fontStyle:'italic', fontFamily:'sans-serif'}}>Add to Cart</Text>
                    </TouchableOpacity>
                </View>
            </View>
            {/* <View>
            </View> */}
        </>
    )
}

export default Product