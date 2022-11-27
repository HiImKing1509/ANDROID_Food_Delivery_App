import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {normalize, scaleX, scaleY} from '../../../helperFunction';
import CUSTOM_COLOR from '../../../assets/constants/colors';

const styles = StyleSheet.create({
  container: {
    backgroundColor: CUSTOM_COLOR.GALLERY,
    flexDirection: 'row',
    marginHorizontal: scaleX(50),
    borderRadius: normalize(30),
  },
  icsearch: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: scaleX(35),
    marginRight: scaleX(16),
  },
  input: {
    width: '100%',
    fontFamily: 'FontsFree-Net-Abel-Regular',
    color: CUSTOM_COLOR.BLACK,
  },
});

export default styles;
