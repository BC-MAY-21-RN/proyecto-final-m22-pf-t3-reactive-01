import React, {useState, useEffect} from 'react';
import {View, Text, Pressable, Image} from 'react-native';
import ListItemStyles from './ListItemStyles';
import Icon from 'react-native-vector-icons/Ionicons';
import storage from '@react-native-firebase/storage';

const ListItem = props => {
  const {
    name,
    price,
    condition,
    description,
    id,
    navigation,
    category,
    stock,
    userId,
    image,
  } = props;
  const [url, setUrl] = useState(null);
  const getUri = async path => {
    const consult = await storage().ref(path).getDownloadURL();
    try {
      setUrl(consult);
    } catch (e) {
      setUrl(null);
    }
  };
  useEffect(() => {
    getUri(`Products/${userId}/${image}`);
  }, [userId, image]);
  return (
    <Pressable
      style={ListItemStyles.container}
      /*onPress={() => {
        navigation.navigate('ProductDetails', {
          like: null,
          name: name,
          description: description,
          image: url
            ? url
            : 'https://www.shutterstock.com/search/not-uploaded-yet',
          condition: condition,
          stock: stock,
          price: price,
        });
      }}*/
    >
      <View>
        <Image
          source={{
            uri: url
              ? url
              : 'https://cdn.shopify.com/s/files/1/0070/7032/files/how-to-price-a-product.jpg?v=1611727768&width=1024',
          }}
          style={ListItemStyles.image}
        />
      </View>
      <View style={ListItemStyles.content}>
        <Text style={ListItemStyles.title}>{name}</Text>
        <Text>{description}</Text>
        <Text style={ListItemStyles.price}>${price}</Text>
        <Text style={ListItemStyles.condition}>{condition}</Text>
      </View>
    </Pressable>
  );
};

export default ListItem;
