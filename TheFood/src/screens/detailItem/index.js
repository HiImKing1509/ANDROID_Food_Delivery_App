import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import React from 'react';
import CUSTOM_COLOR from '../../assets/constants/colors';
import SCREEN_NAME from '../../assets/constants/screens';
import {scaleX, scaleY, normalize} from '../../helperFunction';
import {ICNoInternet, ICHistory} from '../../assets/icons';
import CustomButton from '../../components/CustomButton';
import CustomBreadcrumbNavigation from '../../components/CustomBreadcrumbNavigation';
import FoodCard from '../home/slider/components/FoodCard';

const DetailScreen = props => {
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CustomBreadcrumbNavigation
          onBack={() => navigation.goBack()}
          title="History"
        />
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
    position: 'relative',
  },
  header: {
    marginBottom: scaleY(18),
  },
  button: {
    position: 'absolute',
    bottom: scaleY(36),
    alignSelf: 'center',
  },
});

export default DetailScreen;
