import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import InputContainer from '../components/atoms/TextInput';
import CustomButton from '../components/atoms/register/CustomButton';
import {ProductsStyles} from './styles';
import {editProduct, addProduct} from '../auth/authFirestore';
import Header from '../components/atoms/Header';

const Products = ({route, navigation}) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [condition, setCondition] = useState('');
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState('');

  useEffect(() => {
    setName(route.params?.name);
    setPrice(route.params?.price);
    setCategory(route.params?.category);
    setCondition(route.params?.condition);
    setDescription(route.params?.description);
    setStock(route.params?.stock);
  }, [route.params]);

  const newProduct = () => {
    addProduct(name, category, price, condition, description, stock);
    setName('');
    setCategory('');
    setPrice('');
    setCondition('');
    setDescription('');
    setStock('');
  };

  return (
    <View>
      <Header
        name={route.params ? 'Edit Products' : 'Add Products'}
        navigation={navigation}
        optional={route.params ? true : false}
        icon="close"
        onPress={() => navigation.navigate('Manage')}
      />
      <View style={ProductsStyles.container}>
        <InputContainer
          styles={ProductsStyles.input}
          placeholder="Name of the product"
          maxLength={30}
          onChangeText={a => setName(a)}
          value={name}
        />
        <InputContainer
          styles={ProductsStyles.input}
          placeholder="Category"
          onChangeText={a => setCategory(a)}
          value={category}
        />
        <InputContainer
          styles={ProductsStyles.input}
          placeholder="Price"
          keyboardType="numeric"
          onChangeText={a => setPrice(a)}
          value={route.params ? String(price) : price}
        />
        <InputContainer
          styles={ProductsStyles.input}
          placeholder="Condition"
          onChangeText={a => setCondition(a)}
          value={condition}
        />
        <InputContainer
          styles={ProductsStyles.textarea}
          placeholder="Description"
          maxLength={200}
          multiline={true}
          onChangeText={a => setDescription(a)}
          value={description}
        />
        <InputContainer
          styles={ProductsStyles.input}
          placeholder="Stock"
          keyboardType="numeric"
          onChangeText={a => setStock(a)}
          value={route.params ? String(stock) : stock}
        />
        <CustomButton
          title={route.params ? 'Edit Product' : 'Add Product'}
          onPress={() => {
            route.params
              ? editProduct(
                  route.params.documentId,
                  name,
                  category,
                  price,
                  condition,
                  description,
                  stock,
                  navigation,
                )
              : newProduct();
          }}
        />
      </View>
    </View>
  );
};

export default Products;
