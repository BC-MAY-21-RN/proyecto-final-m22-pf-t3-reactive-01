import {StyleSheet} from 'react-native';

const InputStyle = StyleSheet.create({
    containerLabelInfo: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        margin: 10,
        backgroundColor: '#ffff',
        padding: 10,
        borderRadius: 10,
        elevation: 0.5,
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
        left: 260,
      
}})

export default InputStyle
