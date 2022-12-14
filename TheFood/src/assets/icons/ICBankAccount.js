import * as React from 'react';
import Svg, {Path} from 'react-native-svg';

const SvgComponent = props => (
  <Svg
    width="14"
    height="16"
    viewBox="0 0 14 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <Path
      d="M7 0L0 4V5H14V4L7 0ZM2 6L1.8 13H4.3L4 6H2ZM6 6L5.8 13H8.3L8 6H6ZM10 6L9.8 13H12.3L12 6H10ZM0 16H14V14H0V16Z"
      fill="white"
    />
  </Svg>
);

export default SvgComponent;
