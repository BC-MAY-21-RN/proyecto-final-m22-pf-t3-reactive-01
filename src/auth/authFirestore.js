import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {setOneDocumentSync, getOneDocumenByUid} from './cloudFirestore';
export const SignUp = async ({userName, suscribe, email, password}) => {
  try {
    const Auth = await auth().createUserWithEmailAndPassword(email, password);
    const {uid, photoURL, displayName} = Auth.user;
    const User = await setOneDocumentSync(
      {
        userName,
        suscribe,
        email,
        userType: 'client',
        image: photoURL,
        fullName: displayName,
      },
      'Users',
      uid,
    );
    return User;
  } catch (error) {
    if (
      error?.message ===
      '[auth/email-already-in-use] The email address is already in use by another account.'
    ) {
      alert('The email address is already in use by another account.');
    }
    console.log(error);
  }
};

export const SignIn = async (email, password) => {
  try {
    const Auth = await auth().signInWithEmailAndPassword(email, password);
    const User = await getOneDocumenByUid('Users', Auth.user.uid);
    return User;
  } catch (error) {
    alert('Usuario y/o contraseña incorrectos');
  }
};

export const logout = async () => {
  try {
    await auth().signOut();
  } catch (error) {
    console.log(error);
  }
};

export const getUserInfo = async (currentUser, setUserInfo) => {
  try {
    const Document = await getOneDocumenByUid('Users', currentUser.uid);
    setUserInfo(Document);
  } catch (error) {
    console.log(error);
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

export const addInfo = async (info, uID) => {
  const inputName = info.input;
  const value = info.inputValue;

  if (inputName === 'User') {
    await firestore().collection('Users').doc(uID).update({
      userName: value,
    });
  } else if (inputName === 'Email') {
    await firestore().collection('Users').doc(uID).update({
      email: value,
    });
  } else if (inputName === 'Usertype') {
    await firestore().collection('Users').doc(uID).update({
      userType: value,
    });
  } else if (inputName === 'Fullname') {
    await firestore().collection('Users').doc(uID).update({
      fullName: value,
    });
  } else if (inputName === 'Cel') {
    await firestore().collection('Users').doc(uID).update({
      cel: value,
    });
  } else if (inputName === 'Dni') {
    await firestore().collection('Users').doc(uID).update({
      dni: value,
    });
  } else if (inputName === 'Image') {
    await firestore().collection('Users').doc(uID).update({
      image: value,
    });
  } else {
    console.log('error input or input value ');
  }
};

export const deleteAccount = async uID => {
  await firestore()
    .collection('Users')
    .doc(uID)
    .delete()
    .then(() => {
      logout();
    })
    .catch(err => {
      console.log(err);
    });
};
export const deleteCamp = async (input, uID) => {
  const inputName = input;

  if (inputName === 'Fullname') {
    await firestore().collection('Users').doc(uID).update({
      fullname: '',
    });
  } else if (inputName === 'Cel') {
    await firestore().collection('Users').doc(uID).update({
      cel: '',
    });
  } else if (inputName === 'Dni') {
    await firestore().collection('Users').doc(uID).update({
      dni: '',
    });
  } else if (inputName === 'Image') {
    await firestore().collection('Users').doc(uID).update({
      image: '',
    });
  } else {
    console.log('error action of delte camp ');
  }
};
