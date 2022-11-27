import {Text, StyleSheet, View} from 'react-native';
import React, {Component} from 'react';
import SCREEN_NAME from '../../assets/constants/screens';

import Header from './header';
import Title from './title';
import Search from './search';
import Slider from './slider';
import Footer from './footer';
import styles from './styles';

const HomeScreen = props => {
  const {navigation} = props;
  const onTransitToCart = () => {
    props.navigation.navigate(SCREEN_NAME.CART_SCREEN);
  };

  const onTransitToSearch = () => {
    props.navigation.navigate(SCREEN_NAME.SEARCH_SCREEN);
  };

  return (
    <View style={styles.container}>
      {/* Header Section */}
      <View style={styles.header}>
        <Header onTransitToCart={onTransitToCart} />
      </View>

      {/* Title Section */}
      <View style={styles.title}>
        <Title />
      </View>

      {/* Seach Section */}
      <View style={styles.search}>
        <Search onTransitToSearch={onTransitToSearch} />
      </View>

      {/* Slider Section */}
      <View style={styles.slider}>
        <Slider onNavigation={navigation}/>
      </View>

      {/* Footer Section */}
      <View style={styles.footer}>
        <Footer onNavigation={navigation} />
      </View>
    </View>
  );
};

export default HomeScreen;
