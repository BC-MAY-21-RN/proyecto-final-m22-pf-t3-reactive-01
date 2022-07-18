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
import MyProducts from '../screens/MyProducts';
import {Text, View, Image} from 'react-native';
import MenuStyles from './MenuStyles';
import MenuButtom from '../components/atoms/MenuButtom';
import auth from '@react-native-firebase/auth';
import {getUserInfo} from '../auth/authFirestore';

const Drawer = createDrawerNavigator();

const MainStack = () => {
  return (
    <NavigationContainer>
      <Drawer.Navigator
        initialRouteName={auth().currentUser ? 'Home' : 'Register'}
        screenOptions={{
          swipeEnabled: false,
          headerShown: false,
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
        <Drawer.Screen name="Manage" component={MyProducts} />
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const MenuItems = ({navigation}) => {
  const current = auth().currentUser;
  const [userInfo, setUserInfo] = React.useState('');
  const handleLogout = async () => {
    await auth().signOut();
    navigation.reset({
      index: 0,
      routes: [{name: 'Register'}],
    });
  };
  React.useEffect(() => {
    if (current) {
      getUserInfo(current, setUserInfo);
    }
  }, [current]);
  return (
    <DrawerContentScrollView style={MenuStyles.container}>
      <View style={MenuStyles.header}>
        <Image
          source={{
            uri: 'https://www.freeiconspng.com/thumbs/retail-store-icon/retail-store-icon-6.png',
          }}
          style={{height: 100, width: 100}}
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
        <MenuButtom text="Log Out" name="sign-out" onPress={handleLogout} />
      </View>
    </DrawerContentScrollView>
  );
};

export default MainStack;
