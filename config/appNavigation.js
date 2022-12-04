// In App.js in a new project

import * as React from 'react';
// import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import Product from '../screens/Product';
import SignUp from '../screens/SignUp';
import SignIn from '../screens/SignIn';


// function HomeScreen() {
//   return (
//     <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
//       <Text>Home Screen</Text>
//     </View>
//   );
// }

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer> 
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Product" component={Product} />
        <Stack.Screen name="SignIn" component={SignIn} />
        <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigation;

// NavigationContainer -----> Router
// Stack.Navigator -----> Routes
// Stack.Screen -----> Route
// name -------> path