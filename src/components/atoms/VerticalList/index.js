import React from 'react';
import {FlatList, View} from 'react-native';
import ListItem from '../ListItem';
import SellerItem from '../SellerItem';
import VerticalStyles from './VerticalStyles';

const VerticalList = props => {
  const {data, seller, isModalVisible} = props;
  const renderItem = ({item, index}) => (
    <ListItem
      name={item.name}
      price={item.price}
      condition={item.condition}
      description={item.description}
    />
  );
  const renderItem2 = ({item, index}) => (
    <SellerItem
      id={item.documentId}
      name={item.name}
      price={item.price}
      condition={item.condition}
      description={item.description}
    />
  );
  return (
    <View style={VerticalStyles.container}>
      <FlatList data={data} renderItem={seller ? renderItem2 : renderItem} />
    </View>
  );
};

export default VerticalList;
