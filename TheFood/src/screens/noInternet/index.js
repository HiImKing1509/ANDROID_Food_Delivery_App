import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import CUSTOM_COLOR from '../../assets/constants/colors';
import SCREEN_NAME from '../../assets/constants/screens';
import {scaleX, scaleY, normalize} from '../../helperFunction';
import {ICNoInternet} from '../../assets/icons';
import CustomButton from '../../components/CustomButton';

const NoInternetScreen = props => {
  return (
    <View style={styles.container}>
      <View style={styles.icnosearch}>
        <ICNoInternet />
      </View>
      <View style={styles.text}>
        <Text style={styles.text.error}>No internet Connection</Text>
        <Text style={styles.text.solve}>
          Your internet connection is currently not available please check or
          try again.
        </Text>
      </View>
      <View style={styles.button}>
        <CustomButton type="secondary" title="Try again" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    position: 'relative',
  },
  icnosearch: {
    position: 'absolute',
    alignSelf: 'center',
    top: scaleY(260),
  },
  text: {
    alignSelf: 'center',
    alignItems: 'center',
    width: scaleX(260),
    marginTop: scaleY(220),
    fontFamily: 'FontsFree-Net-Abel-Regular',
    error: {
      color: CUSTOM_COLOR.BLACK,
      fontSize: normalize(28),
      textAlign: 'center',
    },
    solve: {
      textAlign: 'center',
      color: CUSTOM_COLOR.SILVER,
      fontSize: normalize(17),
      marginVertical: scaleY(10),
    },
  },
  button: {
    marginTop: scaleY(50),
  },
});

export default NoInternetScreen;
