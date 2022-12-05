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
import { Image, View } from 'react-native';
import Icon from 'react-native-vector-icons/dist/MaterialIcons';

const Stack = createNativeStackNavigator();
const StackNavigator = () => (
  <Stack.Navigator>
    <Stack.Screen name='Home' component={Home} options={{ headerShown: false }}  />
    <Stack.Screen name='Product' component={Product} />
  </Stack.Navigator>
)

const Tab = createBottomTabNavigator();
const TabNavigator = () => (
  <Tab.Navigator screenOptions={{ headerShown: false }}>
    <Tab.Screen name="All" style={{color:'black'}} component={StackNavigator} options={{
      tabBarIcon: ({focused}) => (
        <View>
          {/* <Icon name="home" size={25} color="royalblue" tintColor: focused ? '#e32f45':'#748c94' /> */}
          <Image style={{width:25, height:25, tintColor: focused ? '#e32f45':'black'}} source={{uri:'https://cdn-icons-png.flaticon.com/512/25/25694.png'}} />
        </View>
      )
    }}  />
    <Tab.Screen name="SignIn" component={SignIn} options={{
      tabBarIcon: ({focused}) => (
        <View>
          {/* <Icon name="home" size={25} color="royalblue" tintColor: focused ? '#e32f45':'#748c94' /> */}
          <Image style={{width:25, height:25, tintColor: focused ? '#e32f45':'black'}} source={{uri:'https://cdn-icons-png.flaticon.com/512/181/181549.png'}} />
        </View>
      )
    }} />
    <Tab.Screen name="SignUp" component={SignUp} options={{
      tabBarIcon: ({focused}) => (
        <View>
          {/* <Icon name="home" size={25} color="royalblue" tintColor: focused ? '#e32f45':'#748c94' /> */}
          <Image style={{width:25, height:25, tintColor: focused ? '#e32f45':'black'}} source={{uri:'https://cdn-icons-png.flaticon.com/512/152/152533.png'}} />
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