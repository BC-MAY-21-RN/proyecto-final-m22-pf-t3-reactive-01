import React, {useState} from 'react';
import {View, Text, Pressable, Image, Modal, TextInput} from 'react-native';
import Styles from './styles';
import BtnIcon from '../btnIcon';
import InputContainer from '../TextInput';
import CustomButton from '../Form/CustomButton';
import {addOneDocumentAsync} from '../../../auth/cloudFirestore';
import {useUser} from '../../../utils/user';

const PaymentModal = props => {
  const {
    isModalVisible,
    setModalVisible,
    card,
    productID,
    adress,
    setAddAddress,
  } = props;
  const user = useUser(state => state.user);
  //Address info
  const addressInfo = {
    name: '',
    country: '',
    state: '',
    street: '',
    code: null,
    phone: null,
    instruccions: '',
    uid: user.uid,
  };
  const [addressForm, setAddressForm] = useState(addressInfo);
  //Card info
  const cardInfo = {
    alias: '',
    cvc: null,
    holder: '',
    month: null,
    number: null,
    uid: user.uid,
    year: null,
  };
  const [cardForm, setCardForm] = useState(cardInfo);
  return (
    <Modal animationType="fade" visible={isModalVisible} transparent>
      <View style={Styles.containerModal}>
        <View style={Styles.modalStyle}>
          <View style={[Styles.row, Styles.header]}>
            {adress ? (
              <Text style={Styles.title}>Add a new address</Text>
            ) : (
              <Text style={Styles.title}>
                {card ? 'Add a credit or debit card' : 'Cash deposit'}
              </Text>
            )}

            <BtnIcon
              iconName={'close-fullscreen'}
              directory={'MaterialIcons'}
              size={25}
              styleIcon={{color: 'black'}}
              style2={Styles.ImageBtn}
              onPress={() => {
                setModalVisible(!isModalVisible);
                setAddAddress(false);
              }}
            />
          </View>
          {adress ? (
            <View>
              <NewInputQuestion
                text="Recipient's name"
                placeholder="A first and last name"
                maxLength={30}
                onChangeText={value =>
                  setAddressForm({...addressForm, name: value})
                }
              />
              <NewInputQuestion
                text="Country"
                placeholder="Enter your country"
                maxLength={20}
                onChangeText={value =>
                  setAddressForm({...addressForm, country: value})
                }
              />
              <NewInputQuestion
                text="Municipality/State"
                placeholder="Municipality, State"
                maxLength={50}
                onChangeText={value =>
                  setAddressForm({...addressForm, state: value})
                }
              />
              <NewInputQuestion
                text="Street"
                placeholder="Street and number"
                maxLength={50}
                onChangeText={value =>
                  setAddressForm({...addressForm, street: value})
                }
              />
              <NewInputQuestion
                text="Postal code"
                placeholder="For example, 28289"
                numeric
                maxLength={5}
                onChangeText={value =>
                  setAddressForm({...addressForm, code: value})
                }
              />
              <NewInputQuestion
                text="Phone Number"
                placeholder="XXXXXXXXXX"
                numeric
                maxLength={10}
                onChangeText={value =>
                  setAddressForm({...addressForm, phone: value})
                }
              />
              <Text style={[Styles.text, {textAlign: 'center', margin: 30}]}>
                Any additional instructions on how to find your address?
              </Text>
              <NewInputQuestion
                text="Instruccions"
                placeholder="Add brief instructions"
                maxLength={50}
                onChangeText={value =>
                  setAddressForm({...addressForm, instruccions: value})
                }
              />
            </View>
          ) : (
            <View>
              {card ? (
                <View>
                  <NewInputQuestion
                    text="Alias"
                    placeholder="Enter an alias"
                    maxLength={30}
                    onChangeText={value =>
                      setCardForm({...cardForm, alias: value})
                    }
                  />
                  <NewInputQuestion
                    text="Number of card"
                    placeholder="0000-0000-0000-0000"
                    numeric
                    maxLength={16}
                    onChangeText={value =>
                      setCardForm({...cardForm, number: value})
                    }
                  />
                  <NewInputQuestion
                    text="Cardholder"
                    placeholder="Enter the full name"
                    maxLength={50}
                    onChangeText={value =>
                      setCardForm({...cardForm, holder: value})
                    }
                  />
                  <NewInputQuestion
                    text="CVC"
                    placeholder="XXX"
                    numeric
                    maxLength={3}
                    onChangeText={value =>
                      setCardForm({...cardForm, cvc: value})
                    }
                  />
                  <Text
                    style={[Styles.text, {textAlign: 'center', margin: 30}]}>
                    Expiration date
                  </Text>
                  <NewInputQuestion
                    text="Month"
                    placeholder="MM"
                    numeric
                    maxLength={2}
                    onChangeText={value =>
                      setCardForm({...cardForm, month: value})
                    }
                  />
                  <NewInputQuestion
                    text="Year"
                    placeholder="YYYY"
                    numeric
                    maxLength={4}
                    onChangeText={value =>
                      setCardForm({...cardForm, year: value})
                    }
                  />
                </View>
              ) : (
                <View>
                  <Text
                    style={[
                      Styles.text,
                      {textAlign: 'center', marginBottom: 20},
                    ]}>
                    Pleade deposit to this account Number:
                  </Text>
                  <Text
                    style={[
                      Styles.input,
                      {textAlign: 'center', alignSelf: 'center'},
                    ]}>
                    0000-0000-0000-0000
                  </Text>
                </View>
              )}
            </View>
          )}
          {adress ? (
            <CustomButton
              onPress={() => {
                addOneDocumentAsync(addressForm, 'Addresses');
                alert('Address added!');
                setModalVisible(!isModalVisible);
                setAddAddress(false);
              }}
              title="Add address"
            />
          ) : (
            <CustomButton
              onPress={() => {
                card
                  ? addOneDocumentAsync(cardForm, 'Payment')
                  : alert('Proceed with the deposit');
                setModalVisible(!isModalVisible);
              }}
              title={card ? 'Add card' : 'Proceed with the deposit'}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

const NewInputQuestion = props => {
  const {placeholder, numeric, maxLength, text, onChangeText} = props;
  return (
    <View style={Styles.row}>
      <Text style={Styles.text}>{text}</Text>
      <InputContainer
        placeholder={placeholder}
        styles={Styles.input}
        keyboardType={numeric ? 'numeric' : null}
        maxLength={maxLength}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default PaymentModal;
