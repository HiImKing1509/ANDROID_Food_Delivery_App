import {
  View,
  ScrollView,
  Alert,
  TouchableOpacity,
  TouchableWithoutFeedback,
} from 'react-native';
import React, {Component} from 'react';
import FoodType from './components/FoodType';
import FoodCard from './components/FoodCard';
import styles from './styles';
import {useSelector} from 'react-redux';

const typeOfFood = ['Foods', 'Drinks', 'Snacks', 'Sauces', 'BimBim'];

const foodCards = [
  {
    img: require('../../../assets/images/foods/Veggie_tomato_mix/image_2.png'),
    foodName: 'Veggie tomato mix',
    price: 'N1, 900',
  },
  {
    img: require('../../../assets/images/foods/Spicy_fish_sauce/image_2.png'),
    foodName: 'Spaghetti',
    price: 'N2, 300',
  },
];

export default class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 0,
    };
    foodList = useSelector(state => state.food)
  }

  onSelectedFoodType = index => {
    this.setState({selected: index});
  };

  render() {
    console.log(this.foodList); 
    return (
      <View style={styles.container}>
        <ScrollView
          style={styles.typeOfFoods}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {typeOfFood.map((typeName, index) => {
            return (
              <FoodType
                selected={this.state.selected}
                index={index}
                onSelectedFoodType={this.onSelectedFoodType}
                typeName={typeName}
                key={typeName}
              />
            );
          })}
        </ScrollView>

        <ScrollView
          style={styles.foodCardsContainer}
          horizontal={true}
          showsHorizontalScrollIndicator={false}>
          {foodCards.map((food, index) => {
            return (
              <FoodCard
                key={index}
                foodName={food.foodName}
                price={food.price}
                img={food.img}
                onNav={this.props.onNavigation}
              />
            );
          })}
        </ScrollView>
      </View>
    );
  }
}
