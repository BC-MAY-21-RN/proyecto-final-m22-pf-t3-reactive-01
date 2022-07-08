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
import {Text, View, Image} from 'react-native';
import MenuStyles from './MenuStyles';
import MenuButtom from '../components/atoms/MenuButtom';

const Drawer = createDrawerNavigator();

const MainStack = () => {
  const isSigned = false;
  return (
    <NavigationContainer>
      <Drawer.Navigator
        screenOptions={{
          swipeEnabled: false,
          headerTitleStyle: {color: 'white', fontSize: 25, fontWeight: 'bold'},
          headerTintColor: '#FFF443',
          headerStyle: {backgroundColor: '#0016FF'},
        }}
        drawerContent={props => <MenuItems {...props} />}>
        {isSigned ? (
          <>
            <Drawer.Screen
              name="Register"
              component={Register}
              options={{headerShown: false}}
            />
          </>
        ) : (
          <>
            <Drawer.Screen name="Home" component={Home} />
            <Drawer.Screen name="Compras" component={Compras} />
            <Drawer.Screen name="Favoritos" component={Favoritos} />
            <Drawer.Screen name="Cuenta" component={Cuenta} />
            <Drawer.Screen name="Carrito" component={Carrito} />
          </>
        )}
      </Drawer.Navigator>
    </NavigationContainer>
  );
};

const MenuItems = ({navigation}) => {
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
          <Text style={MenuStyles.subtitle}> Username </Text>
        </View>
      </View>
      <View style={MenuStyles.content}>
        <MenuButtom
          text="Home"
          name="home"
          onPress={() => navigation.navigate('Home')}
        />
        <MenuButtom
          text="Compras"
          name="shopping-bag"
          onPress={() => navigation.navigate('Compras')}
        />
        <MenuButtom
          text="Favoritos"
          name="heart"
          onPress={() => navigation.navigate('Favoritos')}
        />
        <MenuButtom
          text="Cuenta"
          name="user"
          onPress={() => navigation.navigate('Cuenta')}
        />
        <MenuButtom
          text="Carrito"
          name="shopping-cart"
          onPress={() => navigation.navigate('Carrito')}
        />
      </View>
    </DrawerContentScrollView>
  );
};

export default MainStack;
