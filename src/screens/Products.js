import React, {useState, useEffect} from 'react';
import {ScrollView, View, Text} from 'react-native';
import InputContainer from '../components/atoms/TextInput';
import CustomButton from '../components/atoms/Form/CustomButton';
import {ProductsStyles} from './Styles';
import {editProduct} from '../auth/authFirestore';
import Picker from '../components/atoms/ImagePicker';
import Header from '../components/atoms/Header';
import useBusyIndicator from '../components/atoms/Form/BusyIndicator';
import SwitchSelector from 'react-native-switch-selector';
import {useUser} from '../utils/user';
import {addOneDocumentAsync, uploadImage} from '../auth/cloudFirestore';
const Products = ({route: {params}, navigation}) => {
  const user = useUser(state => state.user);
  const {BIVisible, BusyIndicator} = useBusyIndicator();
  const formSkeleton = {
    name: '',
    category: 'Home',
    price: 100,
    condition: 'New',
    like: [],
    description: '',
    stock: 1,
    image: '',
    uri: '',
    uidUser: user.uid,
  };
  const categories = [
    {label: 'Home', value: 'Home'},
    {label: 'Tech', value: 'Technology'},
    {label: 'Games', value: 'Games'},
    {label: 'Super', value: 'Supermarket'},
    {label: 'Fashion', value: 'Fashion'},
  ];
  const conditions = [
    {label: 'New', value: 'New'},
    {label: 'Used', value: 'Used'},
    {label: 'Preowned', value: 'Preowned'},
  ];
  const [formData, setformData] = useState(formSkeleton);

  useEffect(() => {
    if (params) {
      setformData(params);
    } else {
      setformData(formSkeleton);
    }
  }, [params]);
  const newProduct = async () => {
    try {
      BIVisible(true);
      const {uri, categoriesInitial, conditionsInitial, ...document} = formData;
      const Path = `Products/${user.uid}/${formData.image}`;
      const Url = await uploadImage(Path, uri);
      document.image = Url;
      await addOneDocumentAsync(document, 'Products');
      setformData(formSkeleton);
      BIVisible(false);
      alert('The product has been added successfully!');
    } catch (error) {
      console.log(error);
      BIVisible(false);
      alert('The product has not be added successfully');
    }
  };

  return (
    <ScrollView>
      <Header
        name={params ? 'Edit Products' : 'Add Products'}
        icon={params ? 'close' : null}
        onPress={() => navigation.navigate('Manage')}
        BackBtn
      />
      <View style={ProductsStyles.container}>
        <InputContainer
          styles={ProductsStyles.input}
          placeholder="Name of the product"
          maxLength={30}
          onChangeText={value => setformData({...formData, name: value})}
          value={formData.name}
        />
        <Text style={ProductsStyles.text}>Select a category : </Text>
        <SwitchSelector
          options={categories}
          initial={0}
          onPress={value => setformData({...formData, category: value})}
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
          onChangeText={value =>
            setformData({...formData, price: parseFloat(value)})
          }
          value={`${formData.price}`}
        />
        <Text style={ProductsStyles.text}>Select the condition: </Text>
        <SwitchSelector
          options={conditions}
          initial={0}
          onPress={value => setformData({...formData, condition: value})}
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
          onChangeText={value => setformData({...formData, description: value})}
          value={formData.description}
        />
        <InputContainer
          styles={ProductsStyles.input}
          placeholder="Stock"
          keyboardType="numeric"
          onChangeText={value =>
            setformData({...formData, stock: Math.floor(value)})
          }
          value={`${formData.stock}`}
        />
        <Picker
          url={formData.uri}
          setPath={({fileName, uri}) => {
            setformData({...formData, image: fileName, uri});
          }}
        />
        <CustomButton
          title={params ? 'Edit Product' : 'Add Product'}
          onPress={() => {
            params ? editProduct(formData, navigation) : newProduct();
          }}
        />
      </View>
      <BusyIndicator />
    </ScrollView>
  );
};

export default Products;
