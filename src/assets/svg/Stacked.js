import React from 'react';
import Svg, {G, Path, Defs, Mask} from 'react-native-svg';
import {useWindowDimensions} from 'react-native';
// Para trasnformar un svg a react-native-svg https://react-svgr.com/playground/?native=true
// https://bgjar.com/
const SvgComponent = props => {
  const {height, width} = useWindowDimensions();
  const newHeight = height + 10;
  const newWidth = width + 10;
  if (width > height) {
    return SvgComponent2(newHeight, newWidth);
  }
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={newWidth}
      height={newHeight}
      preserveAspectRatio="none">
      <G mask='url("#a")' fill="none">
        <Path
          fill="rgba(52, 131, 250, 1)"
          d={`M0 0h${newWidth}v${newHeight}H0z`}
        />
        <Path
          d={`M0 71c40 59.4 120 253.8 200 297 80 43.2 160-64.8 ${newWidth}-81v${newHeight}H0z`}
          fill="rgba(255, 255, 255, 1)"
        />
      </G>
      <Defs>
        <Mask id="a">
          <Path fill="#fff" d={`M0 0h${newWidth}v${newHeight}H0z`} />
        </Mask>
      </Defs>
    </Svg>
  );
};
const SvgComponent2 = (height, width) => {
  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      preserveAspectRatio="none">
      <G mask='url("#a")' fill="none">
        <Path fill="rgba(52, 131, 250, 1)" d={`M0 0h${width}v${height}H0z`} />
        <Path
          d={`M0 126c70 27 210 156.4 350 135C490 239.6 630 67.4 ${width} 19v381H0z`}
          fill="rgba(255, 255, 255, 1)"
        />
      </G>
      <Defs>
        <Mask id="a">
          <Path fill="#fff" d={`M0 0h${width}v${height}H0z`} />
        </Mask>
      </Defs>
    </Svg>
  );
};

export default SvgComponent;
