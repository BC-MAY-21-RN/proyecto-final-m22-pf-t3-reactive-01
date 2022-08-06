import React from 'react';
import {FlatList, View} from 'react-native';
import ListItem from '../ListItem';
import SellerItem from '../SellerItem';
import VerticalStyles from './VerticalStyles';

const VerticalList = props => {
  const {data, seller, navigation} = props;
  const renderItem = ({item, index}) => (
    <ListItem
      id={item.documentId}
      userId={item.uid}
      navigation={navigation}
      name={item.name}
      price={item.price}
      condition={item.condition}
      description={item.description}
      category={item.category}
      stock={item.stock}
      image={item.image}
      like={item.like}
    />
  );
  const renderItem2 = ({item, index}) => (
    <SellerItem
      id={item.documentId}
      userId={item.uid}
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
