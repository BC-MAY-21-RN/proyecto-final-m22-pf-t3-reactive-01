import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

export const logIn = async (firstname, check, email, password, navigation) => {
  await auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User creado');
      const current = auth().currentUser;
      addUserInfo(firstname, check, email, current.uid, 'client', navigation);
    })
    .catch(err => {
      if (
        err?.message ===
        '[auth/email-already-in-use] The email address is already in use by another account.'
      ) {
        alert('The email address is already in use by another account.');
      }
    });
};

export const SignIn = async (email, password, navigation) => {
  await auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => navigation.navigate('Home'))
    .catch(error => {
      alert('Usuario y/o contraseña incorrectos');
    });
};

export const addUserInfo = async (
  firstname,
  suscribe,
  email,
  uid,
  usertype,
  navigation,
) => {
  await firestore()
    .collection('Users')
    .add({
      firstname: firstname,
      suscribe: suscribe,
      email: email,
      uid: uid,
      usertype: usertype,
    })
    .then(() => {
      navigation.navigate('Home');
    })
    .catch();
};

export const getUserInfo = async (currentUser, setUserInfo) => {
  await firestore()
    .collection('Users')
    .where('uid', '==', currentUser.uid)
    .get()
    .then(querySnapshot => {
      querySnapshot.forEach(documentSnapshot => {
        setUserInfo(documentSnapshot.data());
      });
    })
    .catch();
};

export const addProduct = async (
  name,
  category,
  price,
  condition,
  description,
  stock,
) => {
  const current = auth().currentUser.uid;
  await firestore()
    .collection('Products')
    .add({
      name: name,
      category: category,
      price: parseFloat(price),
      condition: condition,
      description: description,
      stock: parseInt(stock),
      uid: current,
    })
    .then(() => {
      alert('The product has been added successfully!');
    })
    .catch();
};

export const editProduct = async (
  id,
  name,
  category,
  price,
  condition,
  description,
  stock,
  navigation,
) => {
  const current = auth().currentUser.uid;
  await firestore()
    .collection('Products')
    .doc(id)
    .update({
      name: name,
      category: category,
      price: parseFloat(price),
      condition: condition,
      description: description,
      stock: parseInt(stock),
      uid: current,
    })
    .then(() => {
      alert('The product has been updated successfully!');
      navigation.navigate('Manage', {myParam: undefined});
    })
    .catch();
};

export const deleteProduct = async (collection, document) => {
  await firestore()
    .collection(collection)
    .doc(document)
    .delete()
    .then(() => {
      alert('Successful removal!');
    });
};
