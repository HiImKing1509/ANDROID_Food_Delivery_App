import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import React from 'react';
import CUSTOM_COLOR from '../../assets/constants/colors';
import SCREEN_NAME from '../../assets/constants/screens';
import {scaleX, scaleY, normalize} from '../../helperFunction';
import {ICNoSearch, ICOnBack} from '../../assets/icons';
import CustomBreadcrumbNavigation from '../../components/CustomBreadcrumbNavigation';

const NoFoundItemScreen = props => {
  const {navigation} = props;

  return (
    <View style={styles.container}>
      <CustomBreadcrumbNavigation
        title="Spicy chieckns"
        onBack={() => navigation.goBack()}
      />
      <View style={styles.info}>
        <View style={styles.icnosearch}>
          <ICNoSearch />
        </View>
        <View style={styles.text}>
          <Text style={styles.text.error}>Item not found</Text>
          <Text style={styles.text.solve}>
            Try searching the item with a different keyword.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: scaleY(60),
  },
  info: {
    marginTop: scaleY(210),
  },
  icnosearch: {
    alignSelf: 'center',
  },
  text: {
    alignSelf: 'center',
    alignItems: 'center',
    width: scaleX(200),
    fontFamily: 'FontsFree-Net-Abel-Regular',
    error: {
      marginTop: scaleY(30),
      color: CUSTOM_COLOR.BLACK,
      fontSize: normalize(28),
      textAlign: 'center',
    },
    solve: {
      textAlign: 'center',
      color: CUSTOM_COLOR.SILVER,
      fontSize: normalize(17),
      marginTop: scaleY(14),
    },
  },
});

export default NoFoundItemScreen;
