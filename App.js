import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity, Image, ScrollView, RefreshControl, TextInput, ActivityIndicator } from 'react-native'
import { GlobalStyle } from './GlobalStyle';

function App() {
  const [myData, setMyData] = useState([]);
  const [isLoaded, setIsLoaded] = useState(true);


  let getData = async () => {
    try {
      const response = await fetch(
        "https://fakestoreapi.com/products"
      )
      const data = await response.json()
      setMyData(data)
      setIsLoaded(false)
    } catch (error) {
      setIsLoaded(false)
      console.log(error)
    }
  };


  useEffect(() => {
    getData();
  }, []);


  let [filterList, setFilterList] = useState([])
  let [value, setValue] = useState('')

  let searchItem = (val) => {
    setValue(val)
    console.log(value)
    let search = myData && myData.filter(x => x.category === value)
    setFilterList([...search])
  };
  console.log(filterList)


  // setFilterList([...search]);
  // console.log(filterList)
  // console.log(value)


  return (
    <>
      <Text style={GlobalStyle.header}>List of Products</Text>
      {isLoaded ? <View style={{justifyContent:'center', alignItems:'center', height:'100%'}}><ActivityIndicator size='large' color="#242948"  /></View>
        : 
          <>
            <View style={GlobalStyle.inputContainer}>
              <TextInput placeholder='Search...' placeholderTextColor={'#242948'} onChangeText={(e) => searchItem(e)} style={GlobalStyle.inputField} />
              <TouchableOpacity
                // onPress={searchItem}
                style={{ width: '15%', justifyContent: 'center', alignItems: 'center', }}
              >
                <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/6711/6711443.png' }} style={{ width: 40, height: 40 }} />
              </TouchableOpacity>
            </View>
            <ScrollView>
              <View style={{ backgroundColor: '#A5D3EB'}}>
                <Text style={GlobalStyle.headingAllItems}>All Items</Text>
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
      }
    </>
  )
}

export default App