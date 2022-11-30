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
      <View style={{ paddingHorizontal: 80 }}>
        <ScrollView
          refreshControl={
            <RefreshControl />
          }>
          {myData.map((e, i) => (
            <View key={i} style={{ borderWidth: 2, marginTop: 15, paddingVertical: 15, paddingHorizontal: 10, borderColor: 'red' }}>
              <View>
                <Image source={{ uri: e.image }} resizeMode='contain' style={{ width: '100%', height: 50 }} />
              </View>
              <View>

                <Text>Id: {e.id}</Text>
                <Text>Title: {e.title}</Text>
                <Text style={{ color: 'blue' }}>Category: {e.category}</Text>
                <Text>Rating: {e.rating.rate}</Text>
                <Text>Count: {e.rating.count}</Text>
              </View>
            </View>
          ))}
        </ScrollView>
      </View>
    </>
  )
}

export default App