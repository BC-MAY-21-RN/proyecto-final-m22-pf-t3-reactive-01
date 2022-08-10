import React, {useState} from 'react';
import {View, Text, Pressable, Image, Modal, TextInput} from 'react-native';
import Styles from './styles';
import BtnIcon from '../btnIcon';
import InputContainer from '../TextInput';
import CustomButton from '../Form/CustomButton';

const PaymentModal = props => {
  const {
    isModalVisible,
    setModalVisible,
    card,
    productID,
    adress,
    setAddAddress,
  } = props;
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
              />
              <NewInputQuestion
                text="Country"
                placeholder="Enter your country"
                maxLength={20}
              />
              <NewInputQuestion
                text="State/Municipality"
                placeholder="State, Municipality"
                maxLength={50}
              />
              <NewInputQuestion
                text="Postal code"
                placeholder="For example, 28289"
                numeric
                maxLength={5}
              />
              <NewInputQuestion
                text="Phone Number"
                placeholder="XXXXXXXXXX"
                numeric
                maxLength={10}
              />
              <Text style={[Styles.text, {textAlign: 'center', margin: 30}]}>
                Any additional instructions on how to find your address?
              </Text>
              <NewInputQuestion
                text="Instruccions"
                placeholder="Add brief instructions"
                maxLength={50}
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
                  />
                  <NewInputQuestion
                    text="Number of card"
                    placeholder="0000-0000-0000-0000"
                    numeric
                    maxLength={16}
                  />
                  <NewInputQuestion
                    text="Cardholder"
                    placeholder="Enter the full name"
                    maxLength={50}
                  />
                  <NewInputQuestion
                    text="CVC"
                    placeholder="XXX"
                    numeric
                    maxLength={3}
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
                  />
                  <NewInputQuestion
                    text="Year"
                    placeholder="YYYY"
                    numeric
                    maxLength={4}
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
              onPress={() => console.log('hola')}
              title="Add address"
            />
          ) : (
            <CustomButton
              onPress={() => console.log('hola')}
              title={card ? 'Add card' : 'Proceed with the deposit'}
            />
          )}
        </View>
      </View>
    </Modal>
  );
};

const NewInputQuestion = props => {
  const {placeholder, numeric, maxLength, text} = props;
  return (
    <View style={Styles.row}>
      <Text style={Styles.text}>{text}</Text>
      <InputContainer
        placeholder={placeholder}
        styles={Styles.input}
        keyboardType={numeric ? 'numeric' : null}
        maxLength={maxLength}
      />
    </View>
  );
};

export default PaymentModal;
