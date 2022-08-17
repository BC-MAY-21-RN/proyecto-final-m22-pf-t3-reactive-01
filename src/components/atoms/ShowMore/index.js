import React from 'react';
import {View, Text} from 'react-native';
import ItemAddress from '../ItemAddress';
import ItemCard from '../ItemCard';
import Styles from './Styles';

const ShowMore = props => {
  const {address, payment} = props;
  return (
    <View style={Styles.ShowMore}>
      <View>
        <Text style={Styles.title2}>Address information</Text>
        <ItemAddress
          name={address.name}
          street={address.street}
          state={address.state}
          code={address.code}
          country={address.country}
          phone={address.phone}
          disable
        />
      </View>
      <View>
        <Text style={Styles.title2}>Payment method</Text>
        <ItemCard
          alias={payment.alias}
          holder={payment.holder}
          month={payment.month}
          year={payment.year}
          disable
        />
      </View>
    </View>
  );
};

export default ShowMore;
