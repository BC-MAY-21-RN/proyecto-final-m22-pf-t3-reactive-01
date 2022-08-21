import React from 'react';
import {FlatList,View} from 'react-native';
import ListItemProducts from '../ListItemProducts';
import ContainerProductsStyles from './ContainerProductsStyles';

const ContainerProducts = ({data,  navigation,loaded}) => {
  const renderItem = ({item, index}) => (
    <ListItemProducts
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
      loaded={loaded}
    />
  );

 
  return (
    <View style={loaded? ContainerProductsStyles.containerLoad :ContainerProductsStyles.container}>
      <FlatList data={data} numColumns={2} renderItem={renderItem} />
    </View>
  );
};

export default ContainerProducts;
