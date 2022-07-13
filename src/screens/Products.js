import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import InputContainer from '../components/atoms/TextInput';
import CustomButton from '../components/atoms/register/CustomButton';
import {ProductsStyles} from './styles';
import {addProduct} from '../auth/authFirestore';

const Products = ({navigation}) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [condition, setCondition] = useState('');
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState('');
  return (
    <View style={ProductsStyles.container}>
      <InputContainer
        styles={ProductsStyles.input}
        placeholder="Name of the product"
        maxLength={30}
        onChangeText={a => setName(a)}
      />
      <InputContainer
        styles={ProductsStyles.input}
        placeholder="Category"
        onChangeText={a => setCategory(a)}
      />
      <InputContainer
        styles={ProductsStyles.input}
        placeholder="Price"
        keyboardType="numeric"
        onChangeText={a => setPrice(a)}
      />
      <InputContainer
        styles={ProductsStyles.input}
        placeholder="Condition"
        onChangeText={a => setCondition(a)}
      />
      <InputContainer
        styles={ProductsStyles.textarea}
        placeholder="Description"
        maxLength={200}
        multiline={true}
        onChangeText={a => setDescription(a)}
      />
      <InputContainer
        styles={ProductsStyles.input}
        placeholder="Stock"
        keyboardType="numeric"
        onChangeText={a => setStock(a)}
      />
      <CustomButton
        title="Add Product"
        onPress={() => {
          addProduct(name, category, price, condition, description, stock);
        }}
      />
    </View>
  );
};

export default Products;