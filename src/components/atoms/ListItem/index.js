import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import ListItemStyles from './ListItemStyles';
import {money} from '../../../utils/format';
const ListItem = ({
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
      style={ListItemStyles.container}
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
      <View>
        <Image
          source={{
            uri: image,
          }}
          style={ListItemStyles.image}
        />
      </View>
      <View style={ListItemStyles.content}>
        <Text style={ListItemStyles.title}>{name}</Text>
        <Text style={ListItemStyles.description}>{description}</Text>
        <Text style={ListItemStyles.price}>{money(price)}</Text>
        <Text style={ListItemStyles.condition}>{condition}</Text>
      </View>
    </Pressable>
  );
};

export default ListItem;
