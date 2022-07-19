import React, {useState} from 'react';
import {View, Text, Pressable, Image, Modal} from 'react-native';
import IconButton from '../IconButtom';
import SellerItemStyles from './SellerItemStyles';

const SellerItem = props => {
  const {name, price, condition, description} = props;
  return (
    <Pressable
      style={SellerItemStyles.container}
      delayLongPress={1000}
      activeOpacity={0.6}>
      <View>
        <Image
          source={{
            uri: 'https://cdn.shopify.com/s/files/1/0070/7032/files/how-to-price-a-product.jpg?v=1611727768&width=1024',
          }}
          style={SellerItemStyles.image}
        />
      </View>
      <View style={SellerItemStyles.content}>
        <Text style={SellerItemStyles.title}>{name}</Text>
        <Text>{description}</Text>
        <Text style={SellerItemStyles.price}>${price}</Text>
        <Text style={SellerItemStyles.condition}>{condition}</Text>
      </View>
      <View>
        <IconButton
          name="edit"
          onPress={() => {
            alert('hola');
          }}
          color="#50B838"
          size={35}
        />
        <IconButton
          name="trash"
          onPress={() => {
            alert('hola');
          }}
          color="#C15050"
          size={35}
        />
      </View>
    </Pressable>
  );
};

export default SellerItem;
