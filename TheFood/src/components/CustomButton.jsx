import {
  Text,
  TextInput,
  View,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import {scaleX, scaleY, normalize} from '../helperFunction';
import CUSTOM_COLOR from '../assets/constants/colors';

class CustomButton extends Component {
  render() {
    return (
      <TouchableOpacity
        style={[
          styles.customInputContainer,
          {
            height: scaleY(70),
            backgroundColor:
              this.props.type === 'primary'
                ? CUSTOM_COLOR.WHITE
                : CUSTOM_COLOR.VERMILION,
          },
        ]}
        onPress={this.props.onPress}>
        <Text
          style={{
            fontFamily: 'FontsFree-Net-Abel-Regular',
            color:
              this.props.type === 'primary'
                ? CUSTOM_COLOR.VERMILION
                : CUSTOM_COLOR.WHITE,
            fontSize: normalize(17),
          }}>
          {this.props.title}
        </Text>
      </TouchableOpacity>
    );
  }
}

const styles = StyleSheet.create({
  customInputContainer: {
    width: scaleX(314),
    alignItems: 'center',
    alignSelf: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',
    borderRadius: normalize(30),
  },
});

export default CustomButton;
