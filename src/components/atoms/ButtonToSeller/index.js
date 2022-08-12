import {useEffect, useState} from 'react';
import {Text, View, Pressable, Image} from 'react-native';
import ButtonToSellerStyle from './ButtonToSellerStyles';

const ButtonToSeller = props => {
  const {sellerData, loading, navigation} = props;
  const [userInfo, setUserInfo] = useState('');

  useEffect(() => {
    if (sellerData) {
      setUserInfo(sellerData);
    }
  }, [sellerData]);
  return (
    <>
      {loading ? (
        <>
          <Pressable style={ButtonToSellerStyle.container}>
            <Text style={ButtonToSellerStyle.textInfo}>
              Informacion del vendedor
            </Text>
            <View style={ButtonToSellerStyle.containerImageAndName}>
              <View style={ButtonToSellerStyle.imageLoading} />
              <View style={ButtonToSellerStyle.containerLoandLabels}>
                <View style={ButtonToSellerStyle.containerLabels}>
                  <Text style={ButtonToSellerStyle.labelNameLoading}>name</Text>
                  <Text style={ButtonToSellerStyle.labelUserTypeLoading}>
                    userType
                  </Text>
                  <Text style={ButtonToSellerStyle.labelUserTypeLoading}>
                    userType
                  </Text>
                  <Text style={ButtonToSellerStyle.labelUserTypeLoading}>
                    userType
                  </Text>
                </View>
              </View>
            </View>
          </Pressable>
        </>
      ) : (
        <>
          {userInfo ? (
            <>
              <Pressable
                style={ButtonToSellerStyle.container}
                onPress={() => {
                  navigation.navigate('ProductsSeller', {
                    uid: userInfo.uid,
                  });
                  console.log('sfdsaddasdsa');
                }}>
                <Text style={ButtonToSellerStyle.textInfo}>
                  Informacion del vendedor
                </Text>
                <View style={ButtonToSellerStyle.containerImageAndName}>
                  <Image
                    source={{
                      uri: userInfo.image
                        ? userInfo.image
                        : 'https://cdn-icons-png.flaticon.com/512/3237/3237472.png',
                    }}
                    style={ButtonToSellerStyle.image}
                  />

                  <View style={ButtonToSellerStyle.containerLabels}>
                    <Text style={ButtonToSellerStyle.labelName}>
                      {userInfo.userName}
                    </Text>
                    <Text style={ButtonToSellerStyle.labelUserType}>
                      {userInfo.userType}
                    </Text>
                  </View>
                </View>
              </Pressable>
            </>
          ) : (
            <>
              <View></View>
            </>
          )}
        </>
      )}
    </>
  );
};

export default ButtonToSeller;
