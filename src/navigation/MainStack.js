/* ----- library ----- */
import React, {useEffect, useState} from 'react';
import {Text, View, Image} from 'react-native';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {NavigationContainer} from '@react-navigation/native';
import auth from '@react-native-firebase/auth';
import {getUserInfo, logout} from '../auth/authFirestore';
/* ----- screens ----- */
import Home from '../screens/Home';
import Cuenta from '../screens/Cuenta';
import Carrito from '../screens/Carrito';
import Compras from '../screens/Compras';
import Products from '../screens/Products';
import Register from '../screens/Register';
import Favoritos from '../screens/Favoritos';
import MyProducts from '../screens/MyProducts';
import ProductDetails from '../screens/ProductDetails';
/* ----- components and styles ----- */
import MenuStyles from './MenuStyles';
import MenuButtom from '../components/atoms/MenuButtom';

const MainStack = () => {
  const [user, setUser] = useState();
  const onAuthStateChanged = userStateChanged => setUser(userStateChanged);
  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber;
  }, []);
  return user ? Drawer() : Login();
};

const DrawerStack = createDrawerNavigator();
const Drawer = () => {
  return (
    <NavigationContainer>
      <DrawerStack.Navigator
        initialRouteName={'Home'}
        screenOptions={{swipeEnabled: false, headerShown: false}}
        drawerContent={props => MenuItems({...props})}>
        <DrawerStack.Screen name="Home" component={Home} />
        <DrawerStack.Screen name="Cart" component={Carrito} />
        <DrawerStack.Screen name="Manage" component={MyProducts} />
        <DrawerStack.Screen name="Account" component={Cuenta} />
        <DrawerStack.Screen name="Products" component={Products} />
        <DrawerStack.Screen name="Shopping" component={Compras} />
        <DrawerStack.Screen name="Favourites" component={Favoritos} />
        <DrawerStack.Screen name="ProductDetails" component={ProductDetails} />
      </DrawerStack.Navigator>
    </NavigationContainer>
  );
};

const LoginStack = createNativeStackNavigator();
const Login = () => {
  return (
    <NavigationContainer>
      <LoginStack.Navigator>
        <LoginStack.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
      </LoginStack.Navigator>
    </NavigationContainer>
  );
};

const MenuItems = ({navigation}) => {
  const current = auth().currentUser;
  const [userInfo, setUserInfo] = useState('');
  getUserInfo(current, setUserInfo);
  return (
    <DrawerContentScrollView style={MenuStyles.container}>
      <View style={MenuStyles.header}>
        <Image
          style={MenuStyles.header}
          source={{
            uri: 'https://www.freeiconspng.com/thumbs/retail-store-icon/retail-store-icon-6.png',
          }}
        />
        <View style={MenuStyles.columna}>
          <Text style={MenuStyles.title}> Bright Shop </Text>
          <Text style={MenuStyles.subtitle}>
            {userInfo ? ' ' + userInfo.firstname : 'username'}
          </Text>
        </View>
      </View>
      <View style={MenuStyles.content}>
        <MenuButtom
          text="Home"
          name="home"
          onPress={() => navigation.navigate('Home')}
        />
        {userInfo.usertype === 'seller' ? (
          <View>
            <View style={MenuStyles.otheroptions}>
              <Text style={MenuStyles.division}>Seller Options</Text>
            </View>
            <MenuButtom
              text="New product"
              name="plus"
              onPress={() => navigation.navigate('Products')}
            />
            <MenuButtom
              text="Manage my products"
              name="gears"
              onPress={() => navigation.navigate('Manage')}
            />
          </View>
        ) : (
          <View>
            <View style={MenuStyles.otheroptions}>
              <Text style={MenuStyles.division}>User Options</Text>
            </View>
            <MenuButtom
              text="Shopping"
              name="shopping-bag"
              onPress={() => navigation.navigate('Shopping')}
            />
            <MenuButtom
              text="Favourites"
              name="heart"
              onPress={() => navigation.navigate('Favourites')}
            />
            <MenuButtom
              text="Cart"
              name="shopping-cart"
              onPress={() => navigation.navigate('Cart')}
            />
          </View>
        )}
        <View style={MenuStyles.otheroptions}>
          <Text style={MenuStyles.division}>Account Options</Text>
        </View>
        <MenuButtom
          text="Account"
          name="user"
          onPress={() => navigation.navigate('Account')}
        />
        <MenuButtom text="Log Out" name="sign-out" onPress={logout} />
      </View>
    </DrawerContentScrollView>
  );
};

export default MainStack;
