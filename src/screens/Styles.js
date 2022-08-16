import {StyleSheet} from 'react-native';
import colors from '../constants/colors';
import sizes from '../constants/sizes';
export const RegisterStyle = StyleSheet.create({
  MainContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  SvgComponent: {position: 'absolute'},
  ScrollContainer: {
    flexDirection: 'column',
    backgroundColor: 'transparent',
    flexGrow: 1,
    justifyContent: 'center',
  },
  Title: {
    fontSize: 40,
    color: colors.TXT_SECONDARY_COLOR,
    fontWeight: 'bold',
    paddingVertical: 15,
    textAlign: 'center',
  },
  ContainerRow: {
    marginVertical: 25,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  Text: {
    color: colors.TXT_PRIMARY_COLOR,
  },
  ChangeScreenBtn: {
    width: 60,
    height: 30,
    marginTop: 0,
    backgroundColor: 'transparent',
  },
  Link: {
    color: 'blue',
    textDecorationLine: 'underline',
  },
  Btn: {
    elevation: 4,
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
    flex: 1,
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
    flexGrow: 1,
    justifyContent: 'center',
    paddingVertical: 10,
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
    maxWidth: 400,
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
  Gray: {color: 'gray'},
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
    borderColor: '#3140C2',
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
    color: 'black',
  },
  textarea: {
    height: 150,
    width: 300,
    textAlignVertical: 'top',
    marginTop: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    borderColor: '#3140C2',
    borderWidth: 1,
    padding: 10,
    fontSize: 20,
    color: 'black',
  },
  switch: {
    width: 300,
    marginTop: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 20,
    color: 'black',
  },
});

export const CuentaStyle = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffff',
  },

  containerSettings: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    marginTop: 10,
  },
  DataContainer: {
    backgroundColor: '#ffff',
    elevation: 5,
    borderRadius: 20,
    marginBottom: 20,
    marginHorizontal: 10,
  },
  titleDataContainer: {
    color: '#3140C2',
    fontSize: 20,
    marginLeft: 15,
    marginTop: 10,
  },

  buttonDeleteAccount: {
    backgroundColor: '#ffff',
    borderEndWidth: 3,
    borderStartWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 3,
    borderColor: '#D40C1C',
    padding: 10,
    borderRadius: 10,
    marginTop: -10,
    paddingHorizontal: 36,
    elevation: 3,
  },
  buttonRestorePassword: {
    backgroundColor: '#ffff',
    borderEndWidth: 3,
    borderStartWidth: 1,
    borderTopWidth: 1,
    borderBottomWidth: 3,
    borderColor: '#047C74',
    padding: 10,
    borderRadius: 10,
    marginTop: -10,
    paddingHorizontal: 36,
    elevation: 3,
  },

  textDeleteAccount: {
    textAlign: 'center',
    color: '#D40C1C',
  },
  textRestorePassword: {
    textAlign: 'center',
    color: '#047C74',
  },
});

export const ProductDetailsStyles = StyleSheet.create({
  MainContainer: {flex: 1},
  ScrollContainer: {
    flexDirection: 'column',
    backgroundColor: colors.BACKGROUND_COLOR,
    padding: 10,
  },
  ImageContainer: {
    width: '100%',
    height: 250,
  },
  Image: {
    height: 250,
    resizeMode: 'contain', // cover, contain, stretch, repeat, center
  },
  ImageIndicator: {
    backgroundColor: colors.ICON_BACKGROUND_SECONDARY_COLOR,
    top: 0,
    left: 0,
    position: 'absolute',
    borderRadius: 10,
    paddingHorizontal: 6,
    color: colors.TXT_PRIMARY_COLOR,
    fontWeight: '600',
  },
  ImageSocialContainer: {
    position: 'absolute',
    flexDirection: 'row',
    bottom: 0,
    right: 0,
  },
  ImageBtn: {
    backgroundColor: colors.ICON_BACKGROUND_SECONDARY_COLOR,
    borderRadius: 20,
    marginRight: 5,
    borderWidth: 0,
    width: 40,
    height: 40,
  },
  Red: {color: 'red'},
  Black: {color: 'black'},
  Condition: {color: colors.TXT_LIGHT_PRIMARY_COLOR},
  Name: {color: colors.TXT_PRIMARY_COLOR, fontSize: 16, fontWeight: '600'},
  DescriptionTitle: {fontSize: 18, paddingBottom: 5},
  Description: {
    color: colors.TXT_PRIMARY_COLOR,
    fontSize: 14,
    paddingVertical: 10,
  },
  StockContainer: {
    flexDirection: 'row',
    paddingVertical: 10,
    justifyContent: 'space-evenly',
  },
  StockItem: {
    alignItems: 'center',
  },
  StockText: {
    color: colors.TXT_PRIMARY_COLOR,
    fontSize: 17,
    fontWeight: '400',
  },
  Price: {
    fontSize: 25,
    color: colors.TXT_PRIMARY_COLOR,
    fontWeight: '600',
    padding: 10,
  },
  CartBtn: {
    backgroundColor: colors.BTN_PRIMARY_COLOR,
    marginTop: 0,
    height: 50,
    width: sizes.ScreenWidth - 20,
    borderRadius: 5,
    marginBottom: 10,
  },
  CartBtnText: {
    color: colors.BTN_TXT_PRIMARY_COLOR,
    letterSpacing: 1,
    fontSize: 15,
    fontWeight: '600',
  },
  AddToCartBtn: {
    backgroundColor: colors.BTN_LIGHT_PRIMARY_COLOR,
    marginBottom: 30,
  },
  AddToCartBtnText: {color: colors.BTN_TXT_LIGHT_PRIMARY_COLOR},
  InputAskValue: {paddingTop: 0},
  InputAskMainContainer: {paddingBottom: 20},
  CommentsMainContainer: {paddingBottom: 30},
  CommentsContainer: {flexDirection: 'row', paddingBottom: 10},
  CommentsBox: {
    borderColor: 'gray',
    borderBottomWidth: 1,
    width: 15,
    height: 15,
    borderLeftWidth: 1,
    marginHorizontal: 10,
  },
  CommentsAnswer: {color: 'gray', paddingRight: 30},
  Separator: {
    height: 0.9,
    backgroundColor: colors.DIVIDER_COLOR,
  },
});

export const WishStyles = StyleSheet.create({
  container: {
    padding: 20,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    fontWeight: '500',
    marginTop: 50,
    color: 'black',
  },
  text2: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    marginTop: 30,
    maxWidth: 200,
    fontStyle: 'italic',
    color: colors.TXT_PRIMARY_COLOR,
  },
  ImageBtn: {
    backgroundColor: colors.ICON_BACKGROUND_SECONDARY_COLOR,
    borderRadius: 50,
    padding: 5,
    width: 70,
    height: 70,
    top: 20,
    right: '40%',
  },
  Black: {
    color: 'black',
  },
});

export const Purchase = StyleSheet.create({
  MainContainer: {flex: 1},
  ScrollContainer: {
    flexDirection: 'column',
    backgroundColor: colors.BACKGROUND_COLOR,
    padding: 10,
  },
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  Separator: {
    height: 0.9,
    backgroundColor: colors.DIVIDER_COLOR,
  },
  ShowMore: {
    margin: 10,
    alignItems: 'center',
    borderWidth: 2,
    borderColor: colors.DIVIDER_COLOR,
    borderRadius: 10,
    padding: 10,
  },
  ShowMore2: {
    padding: 20,
    alignItems: 'flex-start',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  Button: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
    padding: 5,
  },
  Text: {
    fontSize: 18,
    fontStyle: 'italic',
    color: 'black',
  },
  TextSelect: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.HEADER_COLOR,
  },
  purchaseContainer: {
    margin: 20,
    padding: 10,
    width: '70%',
    alignSelf: 'center',
    borderWidth: 2,
    borderColor: colors.DIVIDER_COLOR,
    borderRadius: 10,
  },
  purchaseTitle: {
    color: 'black',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 16,
    margin: 10,
  },
  purchaseOrder: {
    margin: 2,
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  total: {
    color: '#BC2828',
    fontWeight: 'bold',
    fontSize: 16,
    margin: 10,
  },
  ImageBtn: {
    borderRadius: 50,
    position: 'relative',
    padding: 10,
    height: 45,
    width: 45,
    margin: 10,
    borderColor: '#cccccc',
    borderWidth: 1,
    alignItems: 'center',
  },
  ImageBtn2: {
    backgroundColor: colors.ICON_BACKGROUND_SECONDARY_COLOR,
    borderRadius: 50,
    padding: 5,
    width: 70,
    height: 70,
    top: 20,
    right: '40%',
  },
  image: {
    height: 150,
    width: 110,
  },
  delivery: {
    padding: 10,
    maxWidth: 120,
    height: '100%',
    alignContent: 'center',
    borderLeftWidth: 1,
    borderLeftColor: colors.DIVIDER_COLOR,
  },
  infoContainer: {
    alignItems: 'center',
    padding: 5,
  },
  desc: {
    fontSize: 14,
    maxWidth: 120,
    textAlign: 'center',
    fontStyle: 'italic',
  },
  estimated: {
    fontSize: 13,
    marginTop: 5,
    textAlign: 'center',
    fontWeight: 'bold',
    color: 'green',
  },
  row: {
    flexDirection: 'row',
    padding: 5,
  },
  title: {
    fontSize: 14,
    color: 'black',
    fontWeight: 'bold',
  },
  title2: {
    fontSize: 20,
    color: '#36A655',
    fontWeight: 'bold',
  },
  text2: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: '400',
    marginTop: 30,
    maxWidth: 200,
    fontStyle: 'italic',
    color: colors.TXT_PRIMARY_COLOR,
  },
});

export const ProductsSellerStyle = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
  containerLoad: {},
  imageLoadContainer: {
    backgroundColor: '#3140C2',

    position: 'absolute',
    width: 505,
    height: 105,

    top: 0,
    left: 0,
    elevation: 5,
  },
  imageLoad: {
    backgroundColor: '#E4E4E4',
    color: '#E4E4E4',
    position: 'absolute',
    width: 85,
    height: 85,
    borderRadius: 100,
    top: 10,
    left: 45,
    elevation: 5,
  },
  containerTop: {
    backgroundColor: '#3140C2',

    elevation: 75,
  },
  containerImageAndName: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginVertical: 7,
    marginHorizontal: 20,
    padding: 5,
    marginTop: 7,
    borderRadius: 20,
  },
  image: {
    width: 85,
    height: 85,
    borderRadius: 100,
    elevation: 45,
    zIndex: 5,
    marginLeft: 5,
  },

  containerLabels: {
    marginLeft: 20,

    width: 315,
    paddingStart: 80,
    paddingVertical: 20,
    position: 'absolute',
    left: -14,
    top: 1,
    zIndex: 0,

    borderRadius: 100,
  },
  labelName: {
    color: '#fff',
    marginLeft: 60,
    fontSize: 25,
    textTransform: 'capitalize',
  },
  labelUserType: {
    color: '#fff',
    marginLeft: 60,
    fontSize: 20,
    textTransform: 'capitalize',
  },
});

export const Shopping = StyleSheet.create({
  image: {
    width: 130,
    height: 130,
  },
  itemContainer: {
    flexDirection: 'row',
    padding: 7,
    margin: 10,
    borderWidth: 1,
    borderRadius: 10,
    borderColor: colors.DIVIDER_COLOR,
    justifyContent: 'space-around',
  },
  ScrollContainer: {
    height: 700,
    margin: 10,
  },
  ImageBtn: {
    borderColor: 'transparent',
    borderRadius: 20,
    marginRight: 5,
    borderWidth: 2,
    width: 45,
    height: 45,
  },
  title: {
    fontSize: 18,
    maxWidth: 100,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    top: 30,
  },
  title2: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'black',
    textAlign: 'center',
    margin: 10,
  },
  btnContainer: {
    justifyContent: 'center',
    padding: 5,
  },
  ShowMore: {
    margin: 10,
    padding: 10,
    justifyContent: 'center',
    borderRadius: 10,
    borderColor: colors.BTN_LIGHT_PRIMARY_COLOR,
    borderWidth: 2,
  },
});
