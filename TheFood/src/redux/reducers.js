import {ACTIVE_TYPE} from './actionType';

const foodState = [];

const foodReducer = (state = foodState, action) => {
  switch (action.type) {
    case ACTIVE_TYPE.GET_FOOD_DATA:
      return [...action.payload];

    default:
      return state;
  }
};

export default foodReducer;
