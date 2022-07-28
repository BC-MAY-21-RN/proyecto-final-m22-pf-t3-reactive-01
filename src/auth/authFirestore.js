import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';
import React, {useState} from 'react';

export const logIn = async (firstname, check, email, password) => {
  await auth()
    .createUserWithEmailAndPassword(email, password)
    .then(() => {
      console.log('User creado');
      const current = auth().currentUser;
      addUserInfo(firstname, check, email, current.uid, 'client');
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

export const SignIn = async (email, password) => {
  await auth()
    .signInWithEmailAndPassword(email, password)
    .then(() => {})
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
    .then(() => {})
    .catch(error => console.log(error));
};
export const logout = async () => {
  try {
    await auth().signOut();
  } catch (error) {
    console.log(error);
  }
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
  uri,
  image,
) => {
  const current = await auth().currentUser.uid;
  await firestore()
    .collection('Products')
    .add({
      name: name,
      category: category,
      price: parseFloat(price),
      condition: condition,
      description: description,
      stock: parseInt(stock),
      image: image,
      uid: current,
    })
    .then(() => {
      uploadImage(uri, current, image);
    })
    .catch();
};

const uploadImage = async (uri, uid, image) => {
  const task = storage()
    .ref('Products/' + uid + '/' + image)
    .putFile(uri);
  try {
    await task;
  } catch (e) {
    alert('The image cannot be uploaded');
  }
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

export const addInfo = async (info, uID) => {


  const inputName = info.input;
  const value = info.inputValue;

 
  
  
  if (inputName === 'User') {
     await firestore().collection('Users').doc(uID).update({
       firstname: value,
   });
   } else if (inputName === 'Email') {
     await firestore().collection('Users').doc(uID).update({
       email: value,
     });
   } else if (inputName === 'Usertype') {
    await firestore().collection('Users').doc(uID).update({
      usertype: value,
    });
   } else if (inputName === 'Fullname') {
     await firestore().collection('Users').doc(uID).update({
      fullname: value,
    });
  } else if (inputName === 'Cel') {
     await firestore().collection('Users').doc(uID).update({
       cel: value,
    });
   } else if (inputName === 'Dni') {
     await firestore().collection('Users').doc(uID).update({
       dni: value,
     })
   } else if (inputName === 'Image') {
     await firestore().collection('Users').doc(uID).update({
       image: value,
     });
   } else {
     console.log('errrr ');}
};
export const userID = async (uID, setUID) => {
  const querySnapshot = await firestore()
    .collection('Users')
    .where('uid', '==', uID)
    .get();
  querySnapshot.forEach(doc => {
    setUID(doc.id);
    console.log('ddddd  ///   '+doc.id)
  });
};
