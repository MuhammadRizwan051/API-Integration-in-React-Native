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
  <Tab.Navigator screenOptions={{ headerShown: false, tabBarShowLabel: false }}>
    <Tab.Screen name="All" component={StackNavigator} options={{
      tabBarIcon: ({ focused }) => (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image style={{ width: 22, height: 22, tintColor: focused ? 'royalblue' : 'black' }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/25/25694.png' }} />
          <Text style={{ marginTop: 1, fontSize: 12, color: focused ? 'royalblue' : 'black' }}>HOME</Text>
        </View>
      )
    }} />
    <Tab.Screen name="SignIn" component={SignIn} options={{
      tabBarIcon: ({ focused }) => (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image style={{ width: 22, height: 22, tintColor: focused ? 'royalblue' : 'black' }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/181/181549.png' }} />
          <Text style={{ marginTop: 1, fontSize: 12, color: focused ? 'royalblue' : 'black' }}>SIGNIN</Text>
        </View>
      )
    }} />
    <Tab.Screen name="SignUp" component={SignUp} options={{
      tabBarIcon: ({ focused }) => (
        <View style={{ alignItems: 'center', justifyContent: 'center' }}>
          <Image style={{ width: 22, height: 22, tintColor: focused ? 'royalblue' : 'black' }} source={{ uri: 'https://cdn-icons-png.flaticon.com/512/152/152533.png' }} />
          <Text style={{ marginTop: 1, fontSize: 12, color: focused ? 'royalblue' : 'black' }}>SIGNUP</Text>
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