import { StyleSheet } from "react-native";

const ModalPassStyle = StyleSheet.create({

    containerModalWarning: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 0,
        backgroundColor: '#0000099e',
        height: 800,
      },
      containerView: {
        paddingBottom: 30,
        paddingTop: 10,
        paddingHorizontal: 10,
        borderRadius: 20,
        backgroundColor: '#F4F4F4',
        elevation: 5,
        maxWidth: 400,
        marginBottom: 160,
        borderEndWidth: 3,
        borderStartWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 3,
      },
      pressableGoBack: {
        backgroundColor: '#F4F4F4',
        borderColor: '#3140C2',
        marginHorizontal: 10,
        borderEndWidth: 3,
        borderStartWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 3,
        padding: 10,
        elevation: 3,
    
        borderRadius: 10,
      },
      pressableDeleteAccount: {
        backgroundColor: '#F4F4F4',
        borderColor: '#047C74',
        marginHorizontal: 10,
        borderEndWidth: 3,
        borderStartWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 3,
        padding: 10,
        elevation: 3,
        borderRadius: 10,
      },
      textWarning: {
        color: 'black',
        textAlign: 'center',
        marginRight: 10,
        marginVertical: 10,
        fontSize: 17,
      },
      textPressableGoBack: {
        color: '#3140C2',
      },
      textPressableDeleteAccount: {
        color: '#047C74',
      },
      containerPressables: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10,
      },
      textAd:{
        color:"#047C74"
      },
      textErrorRestore:{
        color:'#FC6404'
      },
      pressableGoBackError:{
        backgroundColor: '#F4F4F4',
        borderColor: '#FC6404',
        marginHorizontal: 40,
        borderEndWidth: 3,
        borderStartWidth: 1,
        borderTopWidth: 1,
        borderBottomWidth: 3,
        padding: 10,
        elevation: 3,
    marginTop:20,
        borderRadius: 10,
        paddingStart:70
      },
      textPressableGoBackError: {
        color: '#FC6404',
      },
})


export default ModalPassStyle;