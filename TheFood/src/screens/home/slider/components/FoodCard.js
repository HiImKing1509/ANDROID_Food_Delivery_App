import React, {Component} from 'react';
import {
  View,
  Text,
  Image,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Alert,
} from 'react-native';
import SCREEN_NAME from '../../../../assets/constants/screens';
import styles from '../styles';

export default class FoodCard extends Component {
  render() {
    return (
      <TouchableWithoutFeedback
        onPress={() => this.props.onNav.navigate(SCREEN_NAME.DETAIL_SCREEN)}>
        <View style={styles.foodCard}>
          <Image
            source={this.props.img}
            resizeMode="cover"
            style={styles.foodCard.imgSection}
          />
          <View style={styles.foodCard.cardBg}>
            <Text style={styles.foodCard.cardBg.foodName}>
              {this.props.foodName}
            </Text>
            <Text style={styles.foodCard.cardBg.foodPrice}>
              {this.props.price}
            </Text>
          </View>
        </View>
      </TouchableWithoutFeedback>
    );
  }
}
