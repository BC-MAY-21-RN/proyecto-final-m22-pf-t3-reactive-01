import React, {useEffect} from 'react';
import Home from '../screens/Home';
import Cuenta from '../screens/Cuenta';
import Compras from '../screens/Compras';
import Favoritos from '../screens/Favoritos';
import MyProducts from '../screens/MyProducts';
import Category from '../screens/Category';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import MenuStyles from './MenuStyles';
import MenuButtom from '../components/atoms/MenuButtom';
import {Text, View, Image} from 'react-native';
import {subscriberUserId} from '../auth/cloudFirestore';
import {logout} from '../auth/authFirestore';
import {useUser} from '../utils/user';
const DrawerStack = createDrawerNavigator();
export const Drawer = () => {
  return (
    <DrawerStack.Navigator
      initialRouteName={'Home'}
      screenOptions={{swipeEnabled: false, headerShown: false}}
      drawerContent={props => MenuItems({...props})}>
      <DrawerStack.Screen name="Home" component={Home} />
      <DrawerStack.Screen name="Manage" component={MyProducts} />
      <DrawerStack.Screen name="Account" component={Cuenta} />
      <DrawerStack.Screen name="Shopping" component={Compras} />
      <DrawerStack.Screen name="WishList" component={Favoritos} />
      <DrawerStack.Screen name="Category" component={Category} />
    </DrawerStack.Navigator>
  );
};
const MenuItems = ({navigation}) => {
  const user = useUser(state => state.user);
  const storeUser = useUser(state => state.storeUser);
  let {image, userName, userType, uid} = user;

  useEffect(() => {
    const subscriber = subscriberUserId(uid, storeUser);

    return () => subscriber();
  }, [uid, storeUser]);
  return (
    <DrawerContentScrollView style={MenuStyles.container}>
      <View style={MenuStyles.header}>
        <Image
          style={MenuStyles.Image}
          source={{
            uri: image
              ? image
              : 'https://cdn-icons-png.flaticon.com/512/3237/3237472.png',
          }}
        />
        <View style={MenuStyles.columna}>
          <Text style={MenuStyles.title}>Bright Shop</Text>
          <Text style={MenuStyles.subtitle}>
            {userName ? userName : 'username'}
          </Text>
        </View>
      </View>
      <View style={MenuStyles.content}>
        <MenuButtom
          text="Home"
          name="home"
          onPress={() => navigation.navigate('Home')}
        />
        <MenuButtom
          text="Shopping"
          name="shopping-bag"
          onPress={() => navigation.navigate('Shopping')}
        />
        <MenuButtom
          text="WishList"
          name="heart"
          onPress={() => navigation.navigate('WishList')}
        />
        <MenuButtom
          text="Cart"
          name="shopping-cart"
          onPress={() => navigation.navigate('Cart')}
        />
        {userType === 'Seller' && (
          <>
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
          </>
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
