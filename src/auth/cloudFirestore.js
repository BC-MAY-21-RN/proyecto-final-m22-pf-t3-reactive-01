import firestore from '@react-native-firebase/firestore';
import storage from '@react-native-firebase/storage';

export const addOneDocumentSync = async (Document, Collection) => {
  const Snapshot = await firestore().collection(Collection).add(Document);
  return {...Document, uid: Snapshot.id};
};

export const addOneDocumentAsync = async (Document, Collection) => {
  const batch = firestore().batch();
  const Ref = firestore().collection(Collection).doc();
  batch.set(Ref, Document);
  await batch.commit();
};

export const setOneDocumentSync = async (Document, Collection, uid) => {
  await firestore().collection(Collection).doc(uid).set(Document);
  return {...Document, uid};
};

export const getOneDocumenByUid = async (Collection, uid) => {
  var docRef = await firestore().collection(Collection).doc(uid);
  const document = await docRef.get();
  if (document.exists) {
    return {...document.data(), uid};
  } else {
    throw new Error('No such document!');
  }
};

export const uploadImage = async (Path, uri) => {
  await storage().ref(Path).putFile(uri);
  const Url = await storage().ref(Path).getDownloadURL();
  return Url;
};

export const deleteDocumentByUid = async (collection, uid) => {
  await firestore().collection(collection).doc(uid).delete();
};

export const subscriberUserId = (uid, storeUser) => {
  return firestore()
    .collection('Users')
    .doc(uid)
    .onSnapshot(documentSnapshot => {
      storeUser({...documentSnapshot.data(), uid});
    });
};
export const subscriberMyProducts = (uidUser, setProducts) => {
  return firestore()
    .collection('Products')
    .where('uidUser', '==', uidUser)
    .onSnapshot(querySnapshot => {
      const array = [];
      querySnapshot.forEach(documentSnapshot => {
        array.push({uid: documentSnapshot.id, ...documentSnapshot.data()});
      });
      setProducts(array);
    });
};

export const subscriberMyWishList = (uidUser, setProducts, setEmpty) => {
  return firestore()
    .collection('Products')
    .where('like', 'array-contains', uidUser)
    .onSnapshot(querySnapshot => {
      const array = [];
      querySnapshot.forEach(documentSnapshot => {
        array.push({uid: documentSnapshot.id, ...documentSnapshot.data()});
      });
      setProducts(array);
      if (array.length !== 0) {
        setEmpty(false);
      } else {
        setEmpty(true);
      }
    });
};

export const updateLikes = async (docID, userID, array) => {
  let uidArrayUnion;
  if (array) {
    uidArrayUnion = array;
  } else {
    uidArrayUnion = firestore.FieldValue.arrayUnion(userID);
  }
  await firestore()
    .collection('Products')
    .doc(docID)
    .update({like: uidArrayUnion});
};
