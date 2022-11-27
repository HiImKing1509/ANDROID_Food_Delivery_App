import {Text, StyleSheet, View} from 'react-native';
import {Dimensions} from 'react-native';
import color from '../../assets/constants/colors.js';
import {scaleX, scaleY} from '../../helperFunction.js';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: color.CONCRETE,
  },
  header: {
    marginTop: scaleY(65),
  },
  title: {
    marginTop: scaleY(43.33),
  },
  search: {
    marginTop: scaleY(28),
  },
  slider: {
    marginTop: scaleY(36),
  },
  footer: {
    position: 'absolute',
    bottom: 0,
    width: Dimensions.get('window').width - 2 * scaleX(53),
    marginHorizontal: scaleX(53),
    marginBottom: scaleY(50),
  },
});

export default styles;
