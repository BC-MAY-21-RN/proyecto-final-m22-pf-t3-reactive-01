import React from 'react';
import {
  View,
  Text,
  FlatList,
  SafeAreaView,
  Image,
  Pressable,
} from 'react-native';
import {useCart, cartTotal, cartQuantity} from '../utils/cart';
import CounterInput from '../components/atoms/CounterInput';
import {CarritoStyle} from './Styles';
import shallow from 'zustand/shallow';
import BtnIcon from '../components/atoms/btnIcon';
import CustomButton from '../components/atoms/register/CustomButton';
import {money, moneyUnid} from '../utils/format';
import Header from '../components/atoms/Header';

const Carrito = ({navigation}) => {
  const {cart, clearCart, addItem, removeItem, removeQuantity} = useCart(
    state => ({
      cart: state.cart,
      clearCart: state.clearCart,
      addItem: state.addItem,
      removeItem: state.removeItem,
      removeQuantity: state.removeQuantity,
    }),
    shallow,
  );
  const isEmpty = cart.length === 0;

  const renderItem = props => {
    const {id, name, price, imageRef, quantity} = props.item;
    return (
      <Pressable
        onPress={() => {
          navigation.navigate('ProductExample');
        }}>
        <View style={CarritoStyle.Item}>
          <Image style={CarritoStyle.ItemImage} source={{uri: imageRef}} />
          <View style={CarritoStyle.ItemContainerColumn}>
            <Text style={CarritoStyle.ItemName}>{name}</Text>
            <View style={CarritoStyle.ItemContainerRow}>
              <CounterInput
                onDecrease={() => removeQuantity(id)}
                onIncrease={() => addItem(props.item)}
                quantity={quantity}
              />
              <View style={CarritoStyle.ItemContainerPrice}>
                <Text style={CarritoStyle.ItemPriceTotal}>
                  {money(price * quantity)}
                </Text>
                <Text style={CarritoStyle.ItemPriceUnid}>
                  {moneyUnid(price)}
                </Text>
              </View>
              <BtnIcon
                name={'trash-o'}
                size={20}
                color={'gray'}
                onPress={() => removeItem(id)}
              />
            </View>
          </View>
        </View>
      </Pressable>
    );
  };

  const Separator = () => <View style={CarritoStyle.Separator} />;

  const FooterTotal = ({items}) => (
    <View>
      <Separator />
      <View style={CarritoStyle.FootercontainerColumn}>
        <Text style={[CarritoStyle.FooterText, CarritoStyle.FooterTextBold]}>
          {cartQuantity(cart)} articulo(s)
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
    </View>
  );
  const FooterSticky = ({items}) => (
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
        onPress={() => {}}
        title={'Proceed with the purchase'}
      />
    </View>
  );
  const FooterSubText = ({text, text2, style}) => (
    <View style={CarritoStyle.FootercontainerRow}>
      <Text style={style}>{text}</Text>
      <Text style={style}> {text2}</Text>
    </View>
  );

  if (isEmpty) {
    return (
      <SafeAreaView>
        <Header name="Carrito" navigation={navigation} BackBtn />
        <View style={CarritoStyle.EmptyContainer}>
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
            onPress={() => {
              navigation.navigate('ProductDetails');
            }}
            title={'SHOP NOW'}
          />
        </View>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={CarritoStyle.Maincontainer}>
      <Header
        name="Carrito"
        navigation={navigation}
        icon={'ellipsis-vertical'}
        BackBtn
      />
      <FlatList
        data={cart}
        ItemSeparatorComponent={() => <Separator />}
        renderItem={renderItem}
        keyExtractor={item => item.id}
        ListFooterComponent={() => <FooterTotal items={cart} />}
      />
      <FooterSticky items={cart} />
    </SafeAreaView>
  );
};

export default Carrito;
