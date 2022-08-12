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
  loaded
}) => {
  return (
    <Pressable
      style={loaded? ListStyles.containerLoad:ListStyles.container}
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
      
      <View style={loaded? ListStyles.content:ListStyles.content}>
      {loaded? (<View  style={ ListStyles.image}
        >
        <Text></Text>

        </View>):
      (<Image
          source={{
            uri: image,
          }}
          style={ListStyles.image}
        />)}
        <Text style={ListStyles.title}>{loaded? '':name}</Text>
        <Text style={ListStyles.description}>{loaded? '':description}</Text>
        <Text style={ListStyles.price}>{loaded? '':money(price)}</Text>
        <Text style={ListStyles.condition}>{loaded? '':condition}</Text>
      </View>
    </Pressable>
  );
};

export default ListItemProducts;
