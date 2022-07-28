import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text} from 'react-native';
import InputContainer from '../components/atoms/TextInput';
import CustomButton from '../components/atoms/register/CustomButton';
import {ProductsStyles} from './Styles';
import {editProduct, addProduct} from '../auth/authFirestore';
import Picker from '../components/atoms/ImagePicker';
import Header from '../components/atoms/Header';
import useBusyIndicator from '../components/atoms/register/BusyIndicator';
import SwitchSelector from 'react-native-switch-selector';

const Products = ({route: {params}, navigation}) => {
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [category, setCategory] = useState('');
  const [condition, setCondition] = useState('');
  const [description, setDescription] = useState('');
  const [stock, setStock] = useState('');
  const [url, setUrl] = useState();
  const [image, setImage] = useState();
  const BusyIndicator = useBusyIndicator();
  const categories = [
    {
      label: 'Home',
      value: 'Home',
    },
    {
      label: 'Super',
      value: 'Supermarket',
    },
    {
      label: 'Fashion',
      value: 'Fashion',
    },
    {
      label: 'Tech',
      value: 'Technology',
    },
    {
      label: 'Games',
      value: 'Games',
    },
  ];
  const conditions = [
    {
      label: 'New',
      value: 'New',
    },
    {
      label: 'Preowned',
      value: 'Preowned',
    },
    {
      label: 'Used',
      value: 'Used',
    },
  ];

  useEffect(() => {
    setName(params?.name);
    setPrice(params?.price);
    setCategory(params?.category);
    setCondition(params?.condition);
    setDescription(params?.description);
    setStock(params?.stock);
  }, [params]);

  const newProduct = async () => {
    try {
      BusyIndicator.Visible(true);
      await addProduct(
        name,
        category,
        price,
        condition,
        description,
        stock,
        url,
        image,
      );
      setName('');
      setCategory('');
      setPrice('');
      setCondition('');
      setDescription('');
      setStock('');
      setUrl('');
      BusyIndicator.Visible(false);
      alert('The product has been added successfully!');
    } catch {
      alert('The product has not be added successfully');
    }
  };

  return (
    <ScrollView>
      <Header
        name={params ? 'Edit Products' : 'Add Products'}
        navigation={navigation}
        icon={params ? 'close' : null}
        onPress={() => navigation.navigate('Manage')}
        BackBtn
      />
      <View style={ProductsStyles.container}>
        <InputContainer
          styles={ProductsStyles.input}
          placeholder="Name of the product"
          maxLength={30}
          onChangeText={a => setName(a)}
          value={name}
        />
        <Text style={ProductsStyles.text}>Select a category : </Text>
        <SwitchSelector
          options={categories}
          initial={0}
          onPress={a => setCategory(a)}
          fontSize={16}
          textColor="#3140C2"
          borderColor="#3140C2"
          buttonColor="#3140C2"
          hasPadding
          height={50}
          style={ProductsStyles.switch}
        />
        <InputContainer
          styles={ProductsStyles.input}
          placeholder="Price"
          keyboardType="numeric"
          onChangeText={a => setPrice(a)}
          value={params ? String(price) : price}
        />
        <Text style={ProductsStyles.text}>Select the condition: </Text>
        <SwitchSelector
          options={conditions}
          initial={0}
          onPress={a => setCondition(a)}
          fontSize={16}
          textColor="#3140C2"
          borderColor="#3140C2"
          buttonColor="#3140C2"
          hasPadding
          height={50}
          style={ProductsStyles.switch}
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
          value={params ? String(stock) : stock}
        />
        <Picker url={url} setUrl={setUrl} setImage={setImage} />
        <CustomButton
          title={params ? 'Edit Product' : 'Add Product'}
          onPress={() => {
            params
              ? editProduct(
                  params.documentId,
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
      {BusyIndicator.Component}
    </ScrollView>
  );
};

export default Products;
