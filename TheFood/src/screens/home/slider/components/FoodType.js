import {
  Text,
  StyleSheet,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React, {Component} from 'react';
import styles from '../styles';
import color from '../../../../assets/constants/colors';

export default class FoodType extends Component {
  render() {
    return (
      <TouchableOpacity
        style={[
          styles.typeOfFoods.foodTypeContainer,
          this.props.selected === this.props.index
            ? {borderBottomColor: color.VERMILION, borderBottomWidth: 3}
            : {},
        ]}
        onPress={() => this.props.onSelectedFoodType(this.props.index)}>
        <Text style={styles.typeOfFoods.foodTypeContainer.foodType}>
          {this.props.typeName}
        </Text>
      </TouchableOpacity>
    );
  }
}
