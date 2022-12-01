import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView, RefreshControl } from 'react-native'

function App() {
  const [myData, setMyData] = useState([]);
  const [isError, setIsError] = useState("");


  let getData = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products"
      )
      const data = await response.json()
      setMyData(data)
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  };

  // console.log(myData)

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <Text style={{ backgroundColor: '#242948', paddingVertical: 15, color: 'white', fontSize: 30, fontFamily: 'verdana', textAlign: 'center', fontWeight: 'bold' }}>List of Products</Text>
      <ScrollView>
        {myData.map((e, i) => (
          <View style={{ backgroundColor: '#A5D3EB', paddingHorizontal: 40, paddingVertical:15 }}>
            <View key={i} style={{ marginTop: 15, marginBottom: 10 }}>
              <View style={{ backgroundColor: '#353534', paddingHorizontal: 12, paddingVertical: 10 }}>
                <Text style={{ color: 'white', fontSize: 15, fontFamily: 'sans-serif' }}>Id: {e.id}</Text>
              </View>
              <View style={{ borderWidth: 14, borderColor: 'white',  }}>
                <Image source={{ uri: e.image }} style={{ resizeMode: 'stretch', width: '100%', height: 200 }} />
              </View>
              <View style={{ backgroundColor: '#353534', paddingHorizontal: 12, paddingVertical: 20 }}>
                <Text style={{ color: '#E5D9B6', fontSize: 22, marginBottom:2, fontFamily: 'sans-serif', textDecorationLine:'underline', fontStyle:'italic' }}>Title</Text>
                <Text style={{ color: 'white', fontSize: 16, fontFamily: 'cursive', marginBottom:10, }}>{e.title}</Text>
                <Text style={{ color: '#E5D9B6', fontSize: 22, marginBottom:2, fontFamily: 'sans-serif', textDecorationLine:'underline', fontStyle:'italic' }}>Category</Text>
                <Text style={{ color: 'white', fontSize: 16, fontFamily: 'cursive', marginBottom:10, }}>{e.category}</Text>
                <Text style={{ color: '#E5D9B6', fontSize: 22, marginBottom:2, fontFamily: 'sans-serif', textDecorationLine:'underline', fontStyle:'italic' }}>Rate</Text>
                <Text style={{ color: 'white', fontSize: 16, fontFamily: 'cursive', marginBottom:10, }}>{e.rating.rate}</Text>
                <Text style={{ color: '#E5D9B6', fontSize: 22, marginBottom:2, fontFamily: 'sans-serif', textDecorationLine:'underline', fontStyle:'italic' }}>Count</Text>
                <Text style={{ color: 'white', fontSize: 16, fontFamily: 'cursive', marginBottom:10, }}>{e.rating.count}</Text>
                <Text style={{ color: '#E5D9B6', fontSize: 22, marginBottom:2, fontFamily: 'sans-serif', textDecorationLine:'underline', fontStyle:'italic' }}>Description</Text>
                <Text style={{ color: 'white', fontSize: 16, fontFamily: 'cursive', marginBottom:10, }}>{e.description}</Text>
                <Text style={{ color: '#E5D9B6', fontSize: 22, marginBottom:2, fontFamily: 'sans-serif', textDecorationLine:'underline', fontStyle:'italic' }}>Price</Text>
                <Text style={{ color: 'white', fontSize: 16, fontFamily: 'cursive', marginBottom:10, }}>{e.price} USD</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </>
  )
}

export default App