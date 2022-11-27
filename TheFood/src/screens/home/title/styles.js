import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {scaleX, scaleY, normalize} from '../../../helperFunction';
import colors from '../../../assets/constants/colors';

const styles = StyleSheet.create({
  title: {
    marginLeft: scaleX(50),
  },
  text: {
    fontFamily: 'FontsFree-Net-Abel-Regular',
    fontSize: normalize(34),
    lineHeight: normalize(41),
    color: colors.BLACK,
  },
});

export default styles;
