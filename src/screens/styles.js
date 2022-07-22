import {Dimensions, StyleSheet} from 'react-native';
import colors from '../constants/colors';
export const RegisterStyle = StyleSheet.create({
  container: {
    backgroundColor: colors.background,
  },
  row: {
    marginTop: 25,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  link: {
    color: 'blue',
    textDecorationLine: 'underline',
    marginBottom: 10,
  },
  view: {
    padding: 10,
  },
  title: {
    fontSize: 40,
    color: '#ffff',
    backgroundColor: '#1600FF',
    fontWeight: 'bold',
    marginBottom: 15,
    textAlign: 'center',
    paddingVertical: 10,
    paddingHorizontal: 50,
  },
});

export const CarritoStyle = StyleSheet.create({
  Maincontainer: {
    flex: 1,
  },
  Item: {
    flexDirection: 'row',
    margin: 10,
  },
  ItemImage: {
    height: 100,
    width: 100,
    borderRadius: 10,
  },
  ItemContainerColumn: {
    flexDirection: 'column',
    paddingHorizontal: 10,
    justifyContent: 'space-between',
    width: Dimensions.get('screen').width - 110,
  },
  ItemName: {
    color: colors.TXT_PRIMARY_COLOR,
  },
  ItemContainerRow: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  ItemContainerPrice: {
    flexDirection: 'column',
    paddingLeft: 10,
  },
  ItemPriceTotal: {
    color: colors.TXT_PRIMARY_COLOR,
    fontWeight: '500',
    fontSize: 16,
  },
  ItemPriceUnid: {
    color: colors.TXT_LIGHT_PRIMARY_COLOR,
    fontSize: 13,
  },
  EmptyContainer: {
    height: Dimensions.get('screen').height - 150,
    justifyContent: 'center',
  },
  EmptyImage: {
    height: 200,
    width: 200,
    alignSelf: 'center',
  },
  EmptyTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.TXT_PRIMARY_COLOR,
    textAlign: 'center',
  },
  EmptySubTitle: {
    fontSize: 18,
    textAlign: 'center',
    color: colors.TXT_PRIMARY_COLOR,
    paddingHorizontal: 50,
  },
  EmptyBtn: {
    backgroundColor: colors.BTN_PRIMARY_COLOR,
    color: colors.BTN_TXT_PRIMARY_COLOR,
  },
  EmptyBtnText: {
    color: colors.BTN_TXT_PRIMARY_COLOR,
    letterSpacing: 5,
  },
  Separator: {
    height: 1.2,
    marginHorizontal: 10,
    backgroundColor: colors.DIVIDER_COLOR,
  },
  FootercontainerColumn: {
    paddingTop: 10,
    flexDirection: 'column',
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  FootercontainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  FooterTextBold: {
    fontWeight: '500',
    color: colors.TXT_PRIMARY_COLOR,
  },
  FooterText: {
    fontSize: 14,
    color: colors.TXT_LIGHT_PRIMARY_COLOR,
  },
  FooterTitle: {
    paddingTop: 10,
    fontSize: 17,
  },
  FooterStickycontainerRow: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    height: 100,
  },
  FooterStickycontainerColumn: {
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    paddingVertical: 20,
  },
  FooterStickyBtn: {
    backgroundColor: colors.BTN_PRIMARY_COLOR,
    marginTop: 0,
    height: 40,
    maxWidth: 240,
    borderRadius: 5,
  },
  FooterStickyBtnText: {
    color: colors.BTN_TXT_PRIMARY_COLOR,
    letterSpacing: 1,
    fontSize: 14,
    fontWeight: '400',
  },
  FooterStickyTitle: {
    color: colors.TXT_PRIMARY_COLOR,
    fontSize: 18,
    fontWeight: '600',
  },
  FooterStickySubText: {
    color: colors.TXT_PRIMARY_COLOR,
  },
});

export const ProductsStyles = StyleSheet.create({
  container: {
    padding: 15,
    alignItems: 'center',
  },
  input: {
    height: 50,
    width: 300,
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'blue',
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
  },
  textarea: {
    height: 150,
    width: 300,
    textAlignVertical: 'top',
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: 'blue',
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
  },
});

export const ProductDetailsStyles = StyleSheet.create({
  MainContainer: {
    flexDirection: 'column',
    margin: 10,
  },
  ImageContainer: {
    width: '100%',
    height: 200,
    backgroundColor: 'red',
  },
  viewPropsProduct: {},
  viewPressablesImage: {},
  Image: {
    height: 200,
    resizeMode: 'stretch',
  },
  ImageSocialContainer: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 0,
    right: 0,
  },
  ImageBtn: {
    backgroundColor: 'white',
    borderRadius: 20,
  },
  text: {
    color: 'black',
  },
  pressablesImage: {
    borderRadius: 10,
  },
  pressableBuy: {},
  pressableAddToCart: {},
});
