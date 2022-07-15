import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Pressable,
  FlatList,
  SafeAreaView,
  Image,
} from 'react-native';
import {useCart, cartTotal} from '../utils/cart';
import CounterInput from '../components/atoms/CounterInput';
import {CarritoStyle} from './Style';
import Icon from 'react-native-vector-icons/FontAwesome5';

const data = [
  {
    id: 0,
    name: 'HyperX Cloud Stinger',
    price: 400,
    quantity: 3,
    imageRef: 'https://m.media-amazon.com/images/I/51kxIEmO+ZL._AC_SX355_.jpg',
  },
  {
    id: 1,
    name: 'ODDLOOPS Headphones Gaming Headset',
    price: 500,
    quantity: 4,
    imageRef:
      'https://images-na.ssl-images-amazon.com/images/I/81ChsKL6BYL.__AC_SX300_SY300_QL70_ML2_.jpg',
  },
  {
    id: 2,
    name: 'ODDLOOPS Wired Mouse Gamer, 6400 dpi Gaming Mouse con RGB LED',
    price: 700,
    quantity: 1,
    imageRef: 'https://m.media-amazon.com/images/I/41rAaQToa9S._AC_SY580_.jpg',
  },
];

/*const useStore = create(set => ({
  shopingcart: data,
  increasePopulation: () => set(state => ({shopingcart: state.shopingcart = state})),
  removeAllBears: () => set({bears: 0}),
}));*/

const cart = data;

const Carrito = ({navigation}) => {
  const [carNew, setCartNew] = useState(cart);
  const SumaTotal = items => {
    if (items.length > 0) {
      let Suma = 0;
      for (let i = 0; i < items.length; i++) {
        Suma += items[i].price * items[i].quantity;
      }
      return Suma;
    } else {
      return 0;
    }
  };

  const [sumatotal, setSumatotal] = useState(SumaTotal(cart));
  const Item = ({id, name, price, imageRef, quantity}) => {
    const [cantidad, setCantidad] = useState(quantity);
    const onDecrease = () => {
      cart[id].quantity = cantidad - 1;
      setCantidad(cantidad - 1);
      setSumatotal(SumaTotal(cart));
      setCartNew(cart);
    };
    const onIncrease = () => {
      cart[id].quantity = cantidad + 1;
      setCantidad(cantidad + 1);
      setSumatotal(SumaTotal(cart));
      setCartNew(cart);
    };

    const deleteProduct = () => {
      if (cart.length > 0) {
        cart.splice(id, 1);
        setSumatotal(SumaTotal(cart));
        setCartNew(cart);
      } else {
        cart.splice(id, 1);
        setSumatotal(SumaTotal([]));
        setCartNew([]);
      }
    };

    const totalItem = price * cantidad;

    return (
      <View style={CarritoStyle.item}>
        <Image
          style={CarritoStyle.imageRef}
          source={{
            uri: imageRef,
          }}
        />
        <View style={CarritoStyle.containerColumn}>
          <Text style={CarritoStyle.name}>{name}</Text>
          <View style={CarritoStyle.containerRow}>
            <CounterInput
              onDecrease={onDecrease}
              onIncrease={onIncrease}
              quantity={cantidad}
            />
            <Text style={CarritoStyle.price}>${totalItem}</Text>
          </View>
        </View>
        <Icon
          name={'times'}
          size={20}
          color={'black'}
          onPress={() => {
            deleteProduct();
          }}
        />
      </View>
    );
  };

  const renderItem = ({item}) => (
    <Item
      id={item.id}
      name={item.name}
      price={item.price}
      imageRef={item.imageRef}
      quantity={item.quantity}
    />
  );

  const Separator = () => <View style={CarritoStyle.Separator} />;

  const Footer = ({items}) => (
    <View>
      <Text>{sumatotal}</Text>
    </View>
  );

  return (
    <View style={CarritoStyle.container}>
      <SafeAreaView>
        <FlatList
          data={carNew}
          ItemSeparatorComponent={() => <Separator />}
          renderItem={renderItem}
          keyExtractor={item => item.id}
          ListFooterComponent={() => <Footer items={carNew} />}
        />
      </SafeAreaView>
    </View>
  );
};

export default Carrito;
