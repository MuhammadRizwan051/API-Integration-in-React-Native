// // In App.js in a new project

// import * as React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import Home from '../screens/Home';
// import Product from '../screens/Product';
// import SignUp from '../screens/SignUp';
// import SignIn from '../screens/SignIn';


// // function HomeScreen() {
// //   return (
// //     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
// //       <Text>Home Screen</Text>
// //     </View>
// //   );
// // }

// const Stack = createNativeStackNavigator();

// function AppNavigation() {
//   return (
//     <NavigationContainer> 
//       <Stack.Navigator>
//         <Stack.Screen name="Home" component={Home} />
//         <Stack.Screen name="Product" component={Product} />
//         <Stack.Screen name="SignIn" component={SignIn} />
//         <Stack.Screen name="SignUp" component={SignUp} />
//       </Stack.Navigator>
//     </NavigationContainer>
//   );
// }

// export default AppNavigation;

// // NavigationContainer -----> Router
// // Stack.Navigator -----> Routes
// // Stack.Screen -----> Route
// // name -------> path



















import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../screens/Home';
import Product from '../screens/Product';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Image, Text, View } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name='Home' component={Home} options={{ headerShown: false }} />
    <Stack.Screen name='Product' component={Product} />
  </Stack.Navigator>
)

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator tabBarOptions={{
    showLabel: false,
    style: {
      position: 'absolute',
      bottom: 25,
      left: 20,
      right: 20,
      height: 100,
      elevation: 0,
      borderRadius: 15,
      backgroundColor: '#ffffff',
      shadowColor: '#7F5DF0',
      shadowOffset: {
        width: 0,
        height: 10
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.5,
      elevation: 5,
    }
  }} screenOptions={{ headerShown: false }}>
    <Tab.Screen name="All" component={StackNavigator} options={{
      tabBarIcon: ({ focused }) => (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image style={{ width: 25, height: 25, tintColor: focused ? 'royalblue' : 'black' }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/25/25694.png' }} />
          <Text style={{ marginTop: 2, fontSize: 12, color: focused ? 'royalblue' : 'black' }}>HOME</Text>
        </View>
      )
    }} />
    <Tab.Screen name="SignIn" component={SignIn} options={{
      tabBarIcon: ({ focused }) => (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image style={{ width: 25, height: 25, tintColor: focused ? 'royalblue' : 'black' }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/181/181549.png' }} />
          <Text style={{ marginTop: 2, fontSize: 12, color: focused ? 'royalblue' : 'black' }}>SIGNIN</Text>
        </View>
      )
    }} />
    <Tab.Screen name="SignUp" component={SignUp} options={{
      tabBarIcon: ({ focused }) => (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image style={{ width: 25, height: 25, tintColor: focused ? 'royalblue' : 'black' }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/152/152533.png' }} />
          <Text style={{ marginTop: 2, fontSize: 12, color: focused ? 'royalblue' : 'black' }}>SIGNUP</Text>
        </View>
      )
    }} />
  </Tab.Navigator>
)

function AppNavigation() {
  return (
    <NavigationContainer>
      <TabNavigator />
    </NavigationContainer>
  );
}

export default AppNavigation