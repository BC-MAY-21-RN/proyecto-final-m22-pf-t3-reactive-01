import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Image,
  SafeAreaView,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import {money} from '../utils/format';
import {useCart} from '../utils/cart';
import shallow from 'zustand/shallow';
import BtnIcon from '../components/atoms/btnIcon';
import Header from '../components/atoms/Header';
import CounterInput from '../components/atoms/CounterInput';
import CustomButton from '../components/atoms/Form/CustomButton';
import {useUser} from '../utils/user';
import {ProductDetailsStyles as Styles} from './Styles';
import {addLike, removeLike} from '../auth/cloudFirestore';
import Input from '../components/atoms/Form/Input';
const ProductDetails = ({route: {params}, navigation}) => {
  const user = useUser(state => state.user);
  const {uid, like, name, description, image, condition, stock, price} =
    params.item;
  const {addItem} = useCart(state => ({addItem: state.addItem}), shallow);
  const [quantity, setquantity] = useState(1);
  const onDecrease = () => (quantity > 1 ? setquantity(quantity - 1) : null);
  const onIncrease = () =>
    quantity < stock ? setquantity(quantity + 1) : null;
  const BuyItem = () => addItem({...params.item, quantity});
  const Purchase = () =>
    navigation.navigate('Purchase', {
      item: {
        ...params.item,
      },
      cantidad: quantity,
    });
  const [liked, setLiked] = useState();
  useEffect(() => {
    if (like.includes(user.uid)) {
      setLiked(true);
    } else {
      setLiked(false);
    }
  }, [like, user]);
  const handleLike = () => {
    if (liked) {
      removeLike(uid, user.uid);
      Toas('The product was removed to your Wish List!');
    } else {
      addLike(uid, user.uid);
      Toas('The product was added to your Wish List!');
    }
    setLiked(!liked);
  };
  const Toas = MSG => ToastAndroid.show(MSG, ToastAndroid.SHORT);

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
          onPress={Purchase}
          title={'Comprar ahora'}
        />
        <CustomButton
          style={[Styles.CartBtn, Styles.AddToCartBtn]}
          styleText={[Styles.CartBtnText, Styles.AddToCartBtnText]}
          onPress={BuyItem}
          title={'Agregar al carrito'}
        />
        <Separator />
        <Text style={[Styles.Description, Styles.DescriptionTitle]}>
          Preguntas y Respuestas
        </Text>
        <Input
          title="Escribe Tu Pregunta"
          multiline
          styleMainContainer={{paddingVertical: 10}}
        />
      </ScrollView>
    </SafeAreaView>
  );
};

const Separator = () => {
  return <View style={Styles.Separator} />;
};
export default ProductDetails;
