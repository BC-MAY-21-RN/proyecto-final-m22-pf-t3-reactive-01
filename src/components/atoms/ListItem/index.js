import React from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import ListItemStyles from './ListItemStyles';
import Icon from 'react-native-vector-icons/Ionicons';

const ListItem = props => {
  const {name, price, condition, description} = props;
  return (
    <View style={ListItemStyles.container}>
      <View>
        <Image
          source={{
            uri: 'https://cdn.shopify.com/s/files/1/0070/7032/files/how-to-price-a-product.jpg?v=1611727768&width=1024',
          }}
          style={ListItemStyles.image}
        />
        <Pressable style={ListItemStyles.button}>
          <Icon name="heart" color="blue" size={20} />
        </Pressable>
      </View>
      <View style={ListItemStyles.content}>
        <Text style={ListItemStyles.title}>{name}</Text>
        <Text>{description}</Text>
        <Text style={ListItemStyles.price}>${price}</Text>
        <Text style={ListItemStyles.condition}>{condition}</Text>
      </View>
    </View>
  );
};

export default ListItem;
