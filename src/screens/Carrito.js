import React from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  ScrollView,
  Pressable,
} from 'react-native';
import {useCart, cartTotal, cartQuantity} from '../utils/cart';
import CounterInput from '../components/atoms/CounterInput';
import {CarritoStyle} from './Styles';
import shallow from 'zustand/shallow';
import BtnIcon from '../components/atoms/btnIcon';
import CustomButton from '../components/atoms/Form/CustomButton';
import {money, moneyUnid} from '../utils/format';
import Header from '../components/atoms/Header';
import useModalOptions from '../components/atoms/ModalOptions';
let nav = null;

const Carrito = ({navigation}) => {
  const {cart, clearCart, addQuantity, removeItem, removeQuantity} = useCart(
    state => ({
      cart: state.cart,
      clearCart: state.clearCart,
      addQuantity: state.addQuantity,
      removeItem: state.removeItem,
      removeQuantity: state.removeQuantity,
    }),
    shallow,
  );
  const {MVisible, ModalOptions} = useModalOptions();
  nav = navigation;
  const isEmpty = cart.length === 0;
  if (isEmpty) {
    return EmptyComponent();
  }
  const Options = [
    {
      title: 'Borrar Carrito',
      iconName: 'trash',
      onPress: () => {
        clearCart();
        MVisible(false);
      },
    },
  ];
  return (
    <SafeAreaView style={CarritoStyle.Maincontainer}>
      <Header
        name="Carrito"
        icon={'ellipsis-vertical'}
        onPress={() => MVisible(true)}
        BackBtn
      />
      <ModalOptions Options={Options} />
      <FlatList
        data={cart}
        ItemSeparatorComponent={Separator}
        renderItem={item =>
          renderItem({item: item.item, removeQuantity, addQuantity, removeItem})
        }
        keyExtractor={item => item.uid}
        ListFooterComponent={() => FooterTotal({items: cart})}
      />
      <FooterSticky items={cart} navigation={nav} />
    </SafeAreaView>
  );
};
const renderItem = ({removeQuantity, addQuantity, removeItem, item}) => {
  const {uid, name, price, image, quantity} = item;
  return (
    <Pressable
      onPress={() => {
        nav.push('ProductDetails', {item});
      }}>
      <View style={CarritoStyle.Item}>
        <Image style={CarritoStyle.ItemImage} source={{uri: image}} />
        <View style={CarritoStyle.ItemContainerColumn}>
          <Text style={CarritoStyle.ItemName}>{name}</Text>
          <View style={CarritoStyle.ItemContainerRow}>
            <CounterInput
              onDecrease={() => removeQuantity(uid)}
              onIncrease={() => addQuantity(uid)}
              quantity={quantity}
            />
            <View style={CarritoStyle.ItemContainerPrice}>
              <Text style={CarritoStyle.ItemPriceTotal}>
                {money(price * quantity)}
              </Text>
              <Text style={CarritoStyle.ItemPriceUnid}>{moneyUnid(price)}</Text>
            </View>
            <BtnIcon
              iconName={'trash-o'}
              size={20}
              styleIcon={CarritoStyle.Gray}
              onPress={() => removeItem(uid)}
            />
          </View>
        </View>
      </View>
    </Pressable>
  );
};
const EmptyComponent = () => {
  return (
    <SafeAreaView style={CarritoStyle.Maincontainer}>
      <Header name="Carrito" BackBtn />
      <ScrollView contentContainerStyle={CarritoStyle.EmptyContainer}>
        <Image
          style={CarritoStyle.EmptyImage}
          source={require('../assets/img/shopping-cart.png')}
        />
        <Text style={CarritoStyle.EmptyTitle}>Your Cart is Empty</Text>
        <Text style={CarritoStyle.EmptySubTitle}>
          Looks like you haven't add any item to your cart yet
        </Text>
        <CustomButton
          style={CarritoStyle.EmptyBtn}
          styleText={CarritoStyle.EmptyBtnText}
          onPress={() => nav.navigate('Home')}
          title={'SHOP NOW'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};
const Separator = () => {
  return <View style={CarritoStyle.Separator} />;
};
const FooterTotal = ({items}) => (
  <>
    <Separator />
    <View style={CarritoStyle.FootercontainerColumn}>
      <Text style={[CarritoStyle.FooterText, CarritoStyle.FooterTextBold]}>
        {cartQuantity(items)} articulo(s)
      </Text>
      <FooterSubText
        style={CarritoStyle.FooterText}
        text={'Subtotal'}
        text2={money(cartTotal(items))}
      />
      <FooterSubText
        style={CarritoStyle.FooterText}
        text={'Costo de Envio'}
        text2={money(0) + '.00'}
      />
      <FooterSubText
        style={CarritoStyle.FooterText}
        text={'Descuento'}
        text2={money(0) + '.00'}
      />
      <FooterSubText
        style={[CarritoStyle.FooterTitle, CarritoStyle.FooterTextBold]}
        text={'Total a pagar'}
        text2={money(cartTotal(items))}
      />
    </View>
  </>
);
const FooterSubText = ({text, text2, style}) => (
  <View style={CarritoStyle.FootercontainerRow}>
    <Text style={style}>{text}</Text>
    <Text style={style}> {text2}</Text>
  </View>
);
const FooterSticky = ({items}) => {
  const item = {...items[0]}
  return (
    <View style={CarritoStyle.FooterStickycontainerRow}>
      <View style={CarritoStyle.FooterStickycontainerColumn}>
        <Text style={CarritoStyle.FooterStickySubText}>Total:</Text>
        <Text style={CarritoStyle.FooterStickyTitle}>
          {money(cartTotal(items))}
        </Text>
      </View>
      <CustomButton
        style={CarritoStyle.FooterStickyBtn}
        styleText={CarritoStyle.FooterStickyBtnText}
        onPress={() => { nav.navigate('Purchase',{item:item,cantidad:item.quantity})}}
        title={'Proceed with the purchase'}
      />
    </View>
  );
};

export default Carrito;
