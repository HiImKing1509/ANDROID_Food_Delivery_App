import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import {scaleX, scaleY, normalize} from '../../../helperFunction';
import colors from '../../../assets/constants/colors';
import CUSTOM_COLOR from '../../../assets/constants/colors';

const styles = StyleSheet.create({
  container: {},

  typeOfFoods: {
    foodTypeContainer: {
      paddingHorizontal: scaleX(20),

      foodType: {
        paddingBottom: scaleY(10),
        fontSize: normalize(17),
        color: CUSTOM_COLOR.BLACK,
        fontFamily: 'FontsFree-Net-Abel-Regular',
      },
    },
  },

  foodCardsContainer: {
    marginBottom: scaleY(59),
  },

  foodCard: {
    marginHorizontal: scaleX(29),
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',

    imgSection: {
      width: Math.min(scaleX(180), scaleY(180)),
      height: Math.min(scaleX(180), scaleY(180)),

      borderRadius: 100,
      backgroundColor: colors.VERMILION,

      position: 'absolute',
      top: 0,
      marginTop: scaleY(54.51),
      zIndex: 1,
      objectFit: 'cover',
      aspectRatio: 1,
    },

    cardBg: {
      height: scaleY(270),
      backgroundColor: colors.WHITE,
      width: scaleX(220),
      borderRadius: normalize(30),
      marginTop: scaleY(115),

      justifyContent: 'center',
      alignItems: 'center',

      foodName: {
        marginTop: scaleY(145),
        fontSize: normalize(22),
        lineHeight: normalize(22.29),
        marginHorizontal: scaleX(45),
        height: scaleY(52),
        textAlign: 'center',
        color: colors.BLACK,
        fontFamily: 'FontsFree-Net-Abel-Regular',
      },

      foodPrice: {
        marginTop: scaleY(15),
        fontSize: normalize(17),
        color: colors.VERMILION,
        fontFamily: 'FontsFree-Net-Abel-Regular',
      },
    },
  },
});

export default styles;
