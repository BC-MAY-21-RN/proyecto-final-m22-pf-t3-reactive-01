import React from 'react';
import {FlatList, View} from 'react-native';
import ListItem from '../ListItem';
import VerticalStyles from './VerticalStyles';

const VerticalList = props => {
  const {data} = props;
  const renderItem = ({item, index}) => (
    <ListItem
      name={item.name}
      price={item.price}
      condition={item.condition}
      description={item.description}
    />
  );
  return (
    <View style={VerticalStyles.container}>
      <FlatList data={data} renderItem={renderItem} />
    </View>
  );
};

export default VerticalList;
