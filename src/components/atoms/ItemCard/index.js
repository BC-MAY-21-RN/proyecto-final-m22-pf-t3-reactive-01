import React from 'react';
import {View, Text} from 'react-native';
import RNBounceable from '@freakycoder/react-native-bounceable';
import Styles from './Styles';

const ItemCard = props => {
  const {alias, holder, month, year, index, selected, onPress, disable} = props;
  const waitAnimationBounceable = () => setTimeout(onPress, 50);
  return (
    <RNBounceable
      disable
      style={
        selected === index
          ? [
              Styles.AddressContainer,
              {
                backgroundColor: 'rgba(65,137,230,.15)',
              },
            ]
          : Styles.AddressContainer
      }
      onPress={waitAnimationBounceable}>
      <View style={[Styles.row, {maxWidth: 300}]}>
        <Text style={Styles.title}>{alias} ➣ </Text>
        <Text>Holder: </Text>
        <Text style={Styles.desc}>{holder}</Text>
        <Text>| Expiration:</Text>
        <Text style={Styles.desc}>
          {month}/{year}
        </Text>
      </View>
    </RNBounceable>
  );
};

export default ItemCard;
