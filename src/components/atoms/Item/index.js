import React from 'react';
import {View, Image, Text} from 'react-native';
import BtnIcon from '../btnIcon';
import Styles from './Styles';
import {WishStyles} from '../../../screens/Styles';

const Item = props => {
  const {product, selected, setSelected} = props;
  const {name, image} = product;
  return (
    <View style={Styles.itemContainer}>
      <Image
        source={{
          uri: image,
        }}
        style={Styles.image}
      />
      <Text style={Styles.title}>{name}</Text>
      <View style={Styles.btnContainer}>
        <BtnIcon
          iconName={selected ? 'keyboard-arrow-down' : 'keyboard-arrow-right'}
          directory={'MaterialIcons'}
          size={30}
          styleIcon={WishStyles.Black}
          style={
            selected
              ? [Styles.ImageBtn, {borderColor: 'rgba(65,137,230,.15)'}]
              : Styles.ImageBtn
          }
          onPress={() => setSelected(!selected)}
        />
      </View>
    </View>
  );
};

export default Item;
