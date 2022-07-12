import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import InputContainer from '../components/atoms/TextInput';
import CustomButton from '../components/atoms/register/CustomButton';
import {ProductsStyles} from './styles';

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
      <InputContainer styles={ProductsStyles.input} placeholder="Condition" />
      <InputContainer
        styles={ProductsStyles.textarea}
        placeholder="Description"
        maxLength={200}
        multiLine={true}
        onChangeText={a => setDescription(a)}
      />
      <InputContainer
        styles={ProductsStyles.input}
        placeholder="Stock"
        keyboardType="numeric"
        onChangeText={a => setStock(a)}
      />
      <CustomButton title="Add Product" onPress={() => console.log('hola')} />
    </View>
  );
};

export default Products;
