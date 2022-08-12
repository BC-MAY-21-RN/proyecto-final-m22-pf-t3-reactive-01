import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';

import {money} from '../../../utils/format';
import ListStyles from './ListStyles';
const ListItemProducts = ({
  name,
  price,
  condition,
  description,
  uid,
  like,
  navigation,
  category,
  stock,
  uidUser,
  image,
}) => {
  return (
    <Pressable
      style={ListStyles.container}
      onPress={() => {
        navigation.navigate('ProductDetails', {
          item: {
            uid,
            like,
            name,
            description,
            image,
            uidUser,
            condition,
            stock,
            price,
          },
        });
      }}>
      
      <View style={ListStyles.content}>
      <Image
          source={{
            uri: image,
          }}
          style={ListStyles.image}
        />
        <Text style={ListStyles.title}>{name}</Text>
        <Text style={ListStyles.description}>{description}</Text>
        <Text style={ListStyles.price}>{money(price)}</Text>
        <Text style={ListStyles.condition}>{condition}</Text>
      </View>
    </Pressable>
  );
};

export default ListItemProducts;
