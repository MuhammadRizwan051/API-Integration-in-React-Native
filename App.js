import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView, RefreshControl } from 'react-native'
import { GlobalStyle } from './GlobalStyle';

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
      <Text style={GlobalStyle.header}>List of Products</Text>
      <ScrollView>
        {myData.map((e, i) => (
          <View key={i} style={GlobalStyle.mainScreen}>
            <View key={i} style={GlobalStyle.card}>
              <View style={GlobalStyle.cardHeader}>
                <Text style={GlobalStyle.cardHeadingText}>Id: {e.id}</Text>
              </View>
              <View style={GlobalStyle.cardImageContainer}>
                <Image source={{ uri: e.image }} style={GlobalStyle.cardImage} />
              </View>
              <View style={GlobalStyle.cardBodyContainer}>
                <Text style={GlobalStyle.cardBodyHeadings}>Title</Text>
                <Text style={GlobalStyle.cardBodyPara}>{e.title}</Text>
                <Text style={GlobalStyle.cardBodyHeadings}>Category</Text>
                <Text style={GlobalStyle.cardBodyPara}>{e.category}</Text>
                <Text style={GlobalStyle.cardBodyHeadings}>Rate</Text>
                <Text style={GlobalStyle.cardBodyPara}>{e.rating.rate}</Text>
                <Text style={GlobalStyle.cardBodyHeadings}>Count</Text>
                <Text style={GlobalStyle.cardBodyPara}>{e.rating.count}</Text>
                <Text style={GlobalStyle.cardBodyHeadings}>Description</Text>
                <Text style={[GlobalStyle.cardBodyPara, { textAlign: 'justify' }]}>{e.description}</Text>
                <Text style={GlobalStyle.cardBodyHeadings}>Price</Text>
                <Text style={GlobalStyle.cardBodyPara}>{e.price} USD</Text>
              </View>
            </View>
          </View>
        ))}
      </ScrollView>
    </>
  )
}

export default App