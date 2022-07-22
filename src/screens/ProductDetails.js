import React from 'react';
import {
  View,
  Text,
  Pressable,
  Image,
  Icon,
  SafeAreaView,
  ScrollView,
} from 'react-native';
import BtnIcon from '../components/atoms/btnIcon';
import Header from '../components/atoms/Header';
import {ProductDetailsStyles} from './Styles';
const json = {
  id: 1,
  name: 'sdfdsdf',
  description: 'sdfsdf',
  image:
    'https://ddtech.mx/assets/uploads/thumb_c25ba6722c213cbf0287d4dd2bc94bf8.png',
  condition: 'usado',
  stock: 4545,
  price: 154445.56,
  like: ['123456', '152346'],
};

const ProductDetails = ({navigation}) => {
  const {id, name, description, image, condition, stock, price} = json;
  return (
    <SafeAreaView>
      <Header name="Product D" navigation={navigation} BackBtn />
      <ScrollView>
        <View style={ProductDetailsStyles.MainContainer}>
          <View style={ProductDetailsStyles.ImageContainer}>
            <Image style={ProductDetailsStyles.Image} source={{uri: image}} />
            <View style={ProductDetailsStyles.ImageSocialContainer}>
              <BtnIcon
                name={'heart'}
                size={20}
                styles={ProductDetailsStyles.ImageBtn}
                color={'red'}
                onPress={() => {}}
              />
              <BtnIcon
                name={'heart'}
                size={20}
                styles={ProductDetailsStyles.ImageBtn}
                color={'black'}
                onPress={() => {}}
              />
            </View>
          </View>
          <View style={ProductDetailsStyles.viewPressablesImage}>
            <Pressable style={ProductDetailsStyles.pressablesImage}>
              <Text>like</Text>
            </Pressable>
            <Pressable style={ProductDetailsStyles.pressablesImage}>
              <Text>save</Text>
            </Pressable>
            <Pressable style={ProductDetailsStyles.pressablesImage}>
              <Text>share</Text>
            </Pressable>
          </View>
          <Text style={ProductDetailsStyles.container}>
            Estado del producto:{condition}
          </Text>
          <Text style={ProductDetailsStyles.text}>{name}</Text>
          <Text style={ProductDetailsStyles.text}>{description}</Text>
          <View style={ProductDetailsStyles.viewPropsProduct}>
            <Text style={ProductDetailsStyles.text}>{stock}</Text>
            <Pressable style={ProductDetailsStyles.pressable}>
              <Text>Comprar</Text>
            </Pressable>
          </View>
          <Text style={ProductDetailsStyles.text}>${price}</Text>
          <Pressable style={ProductDetailsStyles.pressableBuy}>
            <Text>Comprar ahora</Text>
          </Pressable>
          <Pressable style={ProductDetailsStyles.pressableAddToCart}>
            <Text>Agregar al carrito</Text>
          </Pressable>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default ProductDetails;
