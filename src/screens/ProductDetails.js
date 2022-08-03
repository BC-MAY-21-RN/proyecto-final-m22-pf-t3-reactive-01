import React, {useState} from 'react';
import {View, Text, Image, SafeAreaView, ScrollView} from 'react-native';
import {money} from '../utils/format';
import {useCart} from '../utils/cart';
import shallow from 'zustand/shallow';
import BtnIcon from '../components/atoms/btnIcon';
import Header from '../components/atoms/Header';
import CounterInput from '../components/atoms/CounterInput';
import CustomButton from '../components/atoms/Form/CustomButton';
import auth from '@react-native-firebase/auth';
import {ProductDetailsStyles as Styles} from './Styles';

const ProductDetails = ({route: {params}, navigation}) => {
  const userId = auth().currentUser.uid;
  const {id, like, name, description, image, condition, stock, price} =
    params.item;
  const {addItem} = useCart(state => ({addItem: state.addItem}), shallow);
  const [quantity, setquantity] = useState(1);
  const onDecrease = () => (quantity > 1 ? setquantity(quantity - 1) : null);
  const onIncrease = () => setquantity(quantity + 1);
  const BuyItem = () => addItem({...params.item, quantity});
  const [liked, setLiked] = useState();
  if (like.includes(userId)) {
    setLiked(true);
  }
  const handleLike = () => {
    setLiked(!liked);
  };
  return (
    <SafeAreaView style={Styles.MainContainer}>
      <Header
        name="Product"
        icon="cart"
        onPress={() => navigation.navigate('Cart')}
        BackBtn
      />
      <ScrollView style={Styles.ScrollContainer}>
        <View style={Styles.ImageContainer}>
          <Image style={Styles.Image} source={{uri: image}} />
          <Text style={Styles.ImageIndicator}>1 / 8</Text>
          <View style={Styles.ImageSocialContainer}>
            <BtnIcon
              iconName={'heart'}
              size={20}
              style={Styles.ImageBtn}
              styleIcon={liked ? Styles.Red : Styles.Black}
              onPress={handleLike}
            />
            <BtnIcon
              iconName={'share-social-outline'}
              directory={'Ionicons'}
              size={20}
              styleIcon={Styles.Black}
              style={Styles.ImageBtn}
              onPress={() => {}}
            />
          </View>
        </View>
        <Text style={Styles.Condition}>{condition}</Text>
        <Text style={Styles.Name}>{name}</Text>
        <Separator />
        <Text style={[Styles.Description, Styles.DescriptionTitle]}>
          Acerca de este artículo
        </Text>
        <Text style={Styles.Description}>{description}</Text>
        <Separator />
        <View style={Styles.StockContainer}>
          <View style={Styles.StockItem}>
            <Text style={Styles.StockText}>Disponibles: </Text>
            <Text style={Styles.StockText}>{stock}</Text>
          </View>
          <View style={Styles.StockItem}>
            <Text style={Styles.StockText}>Cantidad</Text>
            <CounterInput
              onDecrease={onDecrease}
              onIncrease={onIncrease}
              quantity={quantity}
            />
          </View>
        </View>
        <Separator />
        <Text style={Styles.Price}>{money(price)}</Text>
        <CustomButton
          style={Styles.CartBtn}
          styleText={Styles.CartBtnText}
          onPress={BuyItem}
          title={'Comprar ahora'}
        />
        <CustomButton
          style={[Styles.CartBtn, Styles.AddToCartBtn]}
          styleText={[Styles.CartBtnText, Styles.AddToCartBtnText]}
          onPress={BuyItem}
          title={'Agregar al carrito'}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const Separator = () => {
  return <View style={Styles.Separator} />;
};
export default ProductDetails;
