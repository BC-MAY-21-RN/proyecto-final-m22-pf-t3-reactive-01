import React, {useState} from 'react';
import {View, Text, Image, SafeAreaView, ScrollView} from 'react-native';
import {money} from '../utils/format';
import {useCart} from '../utils/cart';
import shallow from 'zustand/shallow';
import BtnIcon from '../components/atoms/btnIcon';
import Header from '../components/atoms/Header';
import CounterInput from '../components/atoms/CounterInput';
import CustomButton from '../components/atoms/Form/CustomButton';
import {ProductDetailsStyles as Styles} from './Styles';
const userId = '152346';
const json = {
  description:
    'Computadora PRIDE GAMING CRFT DWN / Designed With NZXT / NVIDIA® GeForce RTX™ 3070 Ti / AMD Ryzen 9 5900X / 32GB RAM / 1TB SSD M.2 NVMe / ENF. LIQ. 280MM / 750W 80+ GOLD ',
  image:
    'https://ddtech.mx/assets/uploads/thumb_c25ba6722c213cbf0287d4dd2bc94bf8.png',
  condition: 'Usado',
  stock: 4545,
  price: 154445.56,
  like: ['123456', '152346'],
  id: 0,
  name: 'Monitor Gamer Xzeal XZ4015-1 / Negro / 27" / 1MS / 165HZ / Full HD / VA / G-Sync & Freesync / Frameless / HDMI - DP / 2 años de garantía',
}; // Eliminar hasta terminar

const ProductDetails = ({route: {params}, navigation}) => {
  const {like, name, description, image, condition, stock, price} = params.item;
  const {addItem} = useCart(state => ({addItem: state.addItem}), shallow);
  const [quantity, setquantity] = useState(1);
  const onDecrease = () => (quantity > 1 ? setquantity(quantity - 1) : null);
  const onIncrease = () => setquantity(quantity + 1);
  const BuyItem = () => addItem({...json, quantity});

  return (
    <SafeAreaView style={Styles.MainContainer}>
      <Header
        name="Producto Detalle"
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
              styleIcon={like.includes(userId) ? Styles.Red : Styles.Black}
              onPress={() => {}}
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
