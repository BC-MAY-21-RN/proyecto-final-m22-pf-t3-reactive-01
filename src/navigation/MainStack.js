/* ----- library ----- */
import React, {useEffect, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {Drawer} from './DrawerNavigation';
/* ----- screens ----- */
import Carrito from '../screens/Carrito';
import Products from '../screens/Products';
import Register from '../screens/Register';
import ProductDetails from '../screens/ProductDetails';
//https://reactnavigation.org/docs/nesting-navigators
const MainStack = () => {
  const [user, setUser] = useState();
  const onAuthStateChanged = userStateChanged => setUser(userStateChanged);
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  return user ? App() : Login();
};

const LoginStack = createNativeStackNavigator();
const Login = () => {
  return (
    <NavigationContainer>
      <LoginStack.Navigator screenOptions={{headerShown: false}}>
        <LoginStack.Screen name="Register" component={Register} />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
};

const AppStack = createNativeStackNavigator();
const App = () => {
  return (
    <NavigationContainer>
      <AppStack.Navigator screenOptions={{headerShown: false}}>
        <AppStack.Screen name="Drawer" component={Drawer} />
        <AppStack.Screen name="ProductDetails" component={ProductDetails} />
        <AppStack.Screen name="Cart" component={Carrito} />
        <AppStack.Screen name="Products" component={Products} />
      </AppStack.Navigator>
    </NavigationContainer>
  );
};

export default MainStack;
