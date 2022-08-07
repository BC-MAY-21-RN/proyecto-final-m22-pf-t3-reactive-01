import React from 'react';
import {FlatList, View} from 'react-native';
import ListItem from '../ListItem';
import SellerItem from '../SellerItem';
import VerticalStyles from './VerticalStyles';

const VerticalList = ({data, seller, navigation}) => {
  const renderItem = ({item, index}) => (
    <ListItem
      uid={item.uid}
      uidUser={item.uidUser}
      like={item.like}
      navigation={navigation}
      name={item.name}
      price={item.price}
      condition={item.condition}
      description={item.description}
      category={item.category}
      stock={item.stock}
      image={item.image}
    />
  );
  const renderItem2 = ({item, index}) => (
    <SellerItem
      uid={item.uid}
      uidUser={item.uidUser}
      like={item.like}
      navigation={navigation}
      name={item.name}
      price={item.price}
      condition={item.condition}
      description={item.description}
      category={item.category}
      stock={item.stock}
      image={item.image}
    />
  );
  return (
    <View style={VerticalStyles.container}>
      <FlatList data={data} renderItem={seller ? renderItem2 : renderItem} />
    </View>
  );
};

export default VerticalList;
