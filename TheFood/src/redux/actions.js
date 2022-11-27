import {Alert} from 'react-native';
import * as api from '../api/index.js';
import {ACTIVE_TYPE} from './actionType.js';

export const getFoodData = () => async dispatch => {
  try {
    const foodList = await api.getFoodList();

    dispatch({
      type: ACTIVE_TYPE.GET_FOOD_DATA,
      payload: foodList,
    });
  } catch (error) {
    Alert.alert(error.message);
  }
};
