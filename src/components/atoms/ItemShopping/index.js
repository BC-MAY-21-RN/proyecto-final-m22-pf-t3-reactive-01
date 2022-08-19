import React, {useState, useEffect} from 'react';
import {View} from 'react-native';
import Item from '../Item';
import ShowMore from '../ShowMore';
import {getOneDocumenByUid} from '../../../auth/cloudFirestore';

const ItemShopping = props => {
  const {index, item} = props;
  const address = item.address;
  const payment = item.payment;
  const order = item.order;
  const [product, setProduct] = useState();
  const [selected, setSelected] = useState(false);
  useEffect(() => {
    getOneDocumenByUid('Products', order.productID).then(doc => {
      setProduct(doc);
    });
  }, [order.productID]);
  return (
    <View>
      {product ? (
        <Item product={product} selected={selected} setSelected={setSelected} />
      ) : null}
      {selected ? <ShowMore address={address} payment={payment} /> : null}
    </View>
  );
};

export default ItemShopping;
