import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView, RefreshControl, TextInput, Touchable } from 'react-native'
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
    } catch (error) {
      console.log(error)
    }
  };

  // console.log(myData)

  useEffect(() => {
    getData();
  }, []);
  
  // let [value, setValue] = useState('')

  let [filterList, setFilterList] = useState([])

  let searchItem = (val) => {
    console.log(val)
    let search = myData.filter(x => x.id === 2)
    console.log(filterList)
    setFilterList(search)
  };

  
  // setFilterList([...search]);
  // console.log(filterList)
  // console.log(value)


  return (
    <>
      <Text style={GlobalStyle.header}>List of Products</Text>
      <View style={{ flexDirection: 'row', borderWidth: 2, borderColor: '#242948', borderRadius: 25, marginHorizontal: 10, marginVertical: 10 }}>
        <TextInput placeholder='Search...' placeholderTextColor={'#242948'} onChangeText={(e) => searchItem(e)} style={{ width: '85%', color: '#242948', fontSize: 18, fontFamily: 'sans-serif', paddingHorizontal: 20 }} />
        <TouchableOpacity
          // onPress={searchItem}
          style={{ width: '15%', justifyContent: 'center', alignItems: 'center', }}
        >
          <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/6711/6711443.png' }} style={{ width: 40, height: 40 }} />
        </TouchableOpacity>
      </View>
      <ScrollView>
        <View style={{ backgroundColor: '#A5D3EB', }}>
          <Text style={{ textAlign: 'center', color: '#242948', fontSize: 30, fontWeight: 'bold', fontStyle: 'italic', textDecorationLine: 'underline' }}>All Items</Text>
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
        </View>
      </ScrollView>
    </>
  )
}

export default App