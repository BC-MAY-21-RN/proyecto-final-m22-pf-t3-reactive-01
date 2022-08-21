import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import {ToastAndroid} from 'react-native';
import {setOneDocumentSync, getOneDocumenByUid} from './cloudFirestore';

const Toas = MSG => ToastAndroid.show(MSG, ToastAndroid.SHORT);
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
    auth()
      .currentUser.updateEmail(value)
      .then(() => {
        console.log('Email updated!');
      })
      .catch(error => {
        console.log(`An error occurred ${error}`);
      });
    await firestore()
      .collection('Users')
      .doc(uID)
      .update({
        email: value,
      })
      .then(() => {
        Toas(`${inputName.toLowerCase()} is changed`);
      })
      .catch(err => {
        Toas(err);
      });
  } else if (inputName === 'Usertype') {
    await firestore()
      .collection('Users')
      .doc(uID)
      .update({
        userType: value,
      })
      .then(() => {
        Toas(`${inputName.toLowerCase()} is changed`);
      })
      .catch(err => {
        Toas(err);
      });
  } else if (inputName === 'Fullname') {
    await firestore()
      .collection('Users')
      .doc(uID)
      .update({
        fullName: value,
      })
      .then(() => {
        Toas(`${inputName.toLowerCase()} is changed`);
      })
      .catch(err => {
        Toas(err);
      });
  } else if (inputName === 'Cel') {
    await firestore()
      .collection('Users')
      .doc(uID)
      .update({
        cel: value,
      })
      .then(() => {
        Toas(`${inputName.toLowerCase()} is changed`);
      })
      .catch(err => {
        Toas(err);
      });
  } else if (inputName === 'Address') {
    await firestore()
      .collection('Users')
      .doc(uID)
      .update({
        address: value,
      })
      .then(() => {
        Toas(`${inputName.toLowerCase()} is changed`);
      })
      .catch(err => {
        Toas(err);
      });
  } else if (inputName === 'Country') {
    await firestore()
      .collection('Users')
      .doc(uID)
      .update({
        country: value,
      })
      .then(() => {
        Toas(`${inputName.toLowerCase()} is changed`);
      })
      .catch(err => {
        Toas(err);
      });
  } else if (inputName === 'State') {
    await firestore()
      .collection('Users')
      .doc(uID)
      .update({
        state: value,
      })
      .then(() => {
        Toas(`${inputName.toLowerCase()} is changed`);
      })
      .catch(err => {
        Toas(err);
      });
  } else if (inputName === 'Image') {
    await firestore()
      .collection('Users')
      .doc(uID)
      .update({
        image: value,
      })
      .then(() => {
        Toas(`${inputName.toLowerCase()} is changed`);
      })
      .catch(err => {
        Toas(err);
      });
  } else {
    Toas('error input or input value ');
  }
};

export const deleteAccount = async uID => {
  await firestore()
    .collection('Users')
    .doc(uID)
    .delete()
    .then(() => {
      auth()
        .currentUser.delete()
        .then(() => {
          Toas('Delete account');
          logout();
        })
        .catch(err => {
          Toas(err);
        });
    })
    .catch(err => {
      Toas(err);
    });
};
export const deleteCamp = async (input, uID) => {
  const inputName = input;

  if (inputName === 'Fullname') {
    await firestore()
      .collection('Users')
      .doc(uID)
      .update({
        fullName: '',
      })
      .then(() => {
        Toas(`${inputName.toLowerCase()} is deleted`);
      })
      .catch(err => {
        Toas(err);
      });
  } else if (inputName === 'Cel') {
    await firestore()
      .collection('Users')
      .doc(uID)
      .update({
        cel: '',
      })
      .then(() => {
        Toas(`${inputName.toLowerCase()} is deleted`);
      })
      .catch(err => {
        Toas(err);
      });
  } else if (inputName === 'Address') {
    await firestore()
      .collection('Users')
      .doc(uID)
      .update({
        address: '',
      })
      .then(() => {
        Toas(`${inputName.toLowerCase()} is deleted`);
      })
      .catch(err => {
        Toas(err);
      });
  } else if (inputName === 'Country') {
    await firestore()
      .collection('Users')
      .doc(uID)
      .update({
        country: '',
      })
      .then(() => {
        Toas(`${inputName.toLowerCase()} is deleted`);
      })
      .catch(err => {
        Toas(err);
      });
  } else if (inputName === 'State') {
    await firestore()
      .collection('Users')
      .doc(uID)
      .update({
        state: '',
      })
      .then(() => {
        Toas(`${inputName.toLowerCase()} is deleted`);
      })
      .catch(err => {
        Toas(err);
      });
  } else if (inputName === 'Image') {
    await firestore()
      .collection('Users')
      .doc(uID)
      .update({
        image: '',
      })
      .then(() => {
        Toas(`${inputName.toLowerCase()} is deleted`);
      })
      .catch(err => {
        Toas(err);
      });
  } else {
    Toas('error action of delte camp ');
  }
};

export const restorePassword = async email => {
  Toas(`link sent to ${email}`);
  return await auth().sendPasswordResetEmail(email);
};

export const getDataBySeller = (productUid, setData) => {
  getOneDocumenByUid('Products', productUid)
    .then(doc => {
      const uidUser = doc.uidUser;

      getOneDocumenByUid('Users', uidUser)
        .then(doc => {
          setData(doc);
        })
        .catch(err => {
          Toas(err);
        });
    })
    .catch(err => {
      Toas(err);
    });
};
