import * as React from 'react';
import {
  createDrawerNavigator,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Register from '../screens/Register';
import Home from '../screens/Home';
import Compras from '../screens/Compras';
import Favoritos from '../screens/Favoritos';
import Cuenta from '../screens/Cuenta';
import Carrito from '../screens/Carrito';
import Products from '../screens/Products';
import {Text, View, Image} from 'react-native';
import MenuStyles from './MenuStyles';
import MenuButtom from '../components/atoms/MenuButtom';
import auth from '@react-native-firebase/auth';
import {getUserInfo} from '../auth/authFirestore';

const Drawer = createDrawerNavigator();

const MainStack = () => {
  const current = auth().currentUser;
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={current ? 'Home' : 'Register'}
        screenOptions={{
          swipeEnabled: false,
          headerTitleStyle: {color: 'white', fontSize: 25, fontWeight: 'bold'},
          headerTintColor: '#FFF443',
          headerStyle: {backgroundColor: '#0016FF'},
        }}
        drawerContent={props => <MenuItems {...props} />}>
        <Drawer.Screen
          name="Register"
          component={Register}
          options={{headerShown: false}}
        />
        <Drawer.Screen name="Home" component={Home} />
        <Drawer.Screen name="Shopping" component={Compras} />
        <Drawer.Screen name="Favourites" component={Favoritos} />
        <Drawer.Screen name="Account" component={Cuenta} />
        <Drawer.Screen name="Cart" component={Carrito} />
        <Drawer.Screen name="Products" component={Products} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const MenuItems = ({navigation}) => {
  const handleLogout = async () => {
    await auth().signOut();
    navigation.reset({
      index: 0,
      routes: [{name: 'Register'}],
    });
  };
  const current = auth().currentUser;
  const [userInfo, setUserInfo] = React.useState('');
  React.useEffect(() => {
    getUserInfo(current, setUserInfo);
  }, [current]);
  return (
    <DrawerContentScrollView style={MenuStyles.container}>
      <View style={MenuStyles.header}>
        <Image
          source={{
            uri: 'https://www.freeiconspng.com/thumbs/retail-store-icon/retail-store-icon-6.png',
          }}
          style={{height: 80, width: 80}}
        />
        <View style={MenuStyles.columna}>
          <Text style={MenuStyles.title}> Bright Shop </Text>
          <Text style={MenuStyles.subtitle}>
            {' '}
            {userInfo ? userInfo.firstname : 'username'}{' '}
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
          <MenuButtom
            text="New product"
            name="plus"
            onPress={() => navigation.navigate('Products')}
          />
        ) : null}
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
          text="Account"
          name="user"
          onPress={() => navigation.navigate('Account')}
        />
        <MenuButtom
          text="Cart"
          name="shopping-cart"
          onPress={() => navigation.navigate('Cart')}
        />
        <MenuButtom text="Log Out" name="sign-out-alt" onPress={handleLogout} />
      </View>
    </DrawerContentScrollView>
  );
};

export default MainStack;
