import React from 'react';
import IconFontAwesome from 'react-native-vector-icons/FontAwesome';
import IconFontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import IconIon from 'react-native-vector-icons/Ionicons';
import IconEvilIcons from 'react-native-vector-icons/EvilIcons';

const Icon = ({directory, name, size, color, style}) => {
  const props = {name, size, color, style};
  switch (directory) {
    case 'Ionicons':
      return <IconIon {...props} />;
    case 'EvilIcons':
      return <IconEvilIcons {...props} />;
    case 'FontAwesome5':
      return <IconFontAwesome5 {...props} />;
    default:
      return <IconFontAwesome {...props} />;
  }
};

export default Icon;
