import {StyleSheet} from 'react-native';

const InputStyle = StyleSheet.create({
    containerLabelInfo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10,
        backgroundColor: '#F4F4F4',
        padding: 10,
        borderRadius: 10,
        elevation: 2,
      },
      labelInfo: {
        color: 'black',
        marginHorizontal: 9,
        textTransform: 'capitalize',
      },
      iconData: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
      },
      iconEdit: {
        position: 'absolute',
        left: 280,
      
}})

export default InputStyle
