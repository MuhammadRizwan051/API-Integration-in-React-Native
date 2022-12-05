import React, { useEffect, useState } from 'react'
import { Text, View, ActivityIndicator, TextInput, TouchableOpacity, Image, ScrollView } from 'react-native'
// import AppNavigation from './config/appNavigation'
import { GlobalStyle } from '../GlobalStyle'


function Home({ navigation }) {
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

    let searchItem = (val) => {

        setFilterList(myData.filter((e) => e.category == val))
    };
    console.log(filterList)


    // setFilterList([...search]);
    // console.log(filterList)
    // console.log(value)


    let move = (e) => {
        navigation.navigate('Product', e)
    }


    return (
        <>
            <Text style={GlobalStyle.header}>List of Products</Text>
            {isLoaded ? <View style={{ justifyContent: 'center', alignItems: 'center', height: '100%' }}><ActivityIndicator size='large' color="#242948" /></View>
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
                        <View style={{ backgroundColor: '#A5D3EB', width: '100%', height: '100%', flexWrap: 'wrap', flexDirection: 'row', }}>
                            {/* <Text style={GlobalStyle.headingAllItems}>All Items</Text> */}
                            {myData && myData.map((e, i) => (
                                <TouchableOpacity key={i} onPress={() => move(e)} style={GlobalStyle.mainScreen}>
                                    <View key={i} style={GlobalStyle.card}>
                                        <View style={GlobalStyle.cardHeader}>
                                            <Text style={GlobalStyle.cardHeadingText}>Id: {e.id}</Text>
                                        </View>
                                        <View style={GlobalStyle.cardImageContainer}>
                                            <Image source={{ uri: e.image }} style={GlobalStyle.cardImage} />
                                        </View>
                                        <View style={GlobalStyle.cardBodyContainer}>
                                            {/* <Text style={GlobalStyle.cardBodyHeadings}>Category</Text> */}
                                            <Text style={[GlobalStyle.cardBodyPara, {textAlign:'center'}]}>{e.category.slice(0, 1).toUpperCase() + e.category.slice(1)}</Text>
                                            {/* <Text style={GlobalStyle.cardBodyHeadings}>Title</Text> */}
                                            <Text style={GlobalStyle.cardBodyPara}>{e.title.slice(0, 25) + ' .....'}</Text>
                                            {/* <Text style={GlobalStyle.cardBodyHeadings}>Rate</Text>
                                            <Text style={GlobalStyle.cardBodyPara}>{e.rating.rate}</Text>
                                            <Text style={GlobalStyle.cardBodyHeadings}>Count</Text>
                                            <Text style={GlobalStyle.cardBodyPara}>{e.rating.count}</Text>
                                            <Text style={GlobalStyle.cardBodyHeadings}>Description</Text>
                                            <Text style={[GlobalStyle.cardBodyPara, { textAlign: 'justify' }]}>{e.description}</Text> */}
                                            {/* <Text style={GlobalStyle.cardBodyHeadings}>Price</Text> */}
                                            <Text style={[GlobalStyle.cardBodyPara, {textAlign:'center'}]}>{e.price} USD</Text>
                                        </View>
                                    </View>
                                </TouchableOpacity>
                            ))}
                        </View>
                    </ScrollView>
                </>
            }
        </>
    )
}

export default Home