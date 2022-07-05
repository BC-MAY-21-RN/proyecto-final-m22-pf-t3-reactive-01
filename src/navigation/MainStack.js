import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Register from '../screens/Register';
import Home from '../screens/Home';
import Compras from '../screens/Compras';
import Favoritos from '../screens/Favoritos';
import Cuenta from '../screens/Cuenta';
import Carrito from '../screens/Carrito';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';

const Drawer = createDrawerNavigator();

const MainStack = () => {
  const isSigned = false;
  return (
    <NavigationContainer>
      <Drawer.Navigator
        drawerPosition="left"
        drawerType="front"
        screenOptions={{
          swipeEnabled: false,
          headerTitleStyle: {color: 'white', fontSize: 25, fontWeight: 'bold'},
          headerStyle: {backgroundColor: '#0016FF'},
        }}>
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
            <Drawer.Screen
              name="Home"
              component={Home}
              options={{
                drawerIcon: ({focused}) => (
                  <FontAwesome5
                    name="btc"
                    size={focused ? 25 : 20}
                    color="#900"
                  />
                ),
              }}
            />
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

export default MainStack;
