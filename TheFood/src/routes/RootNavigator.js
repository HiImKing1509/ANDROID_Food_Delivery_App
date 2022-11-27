import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import SCREEN_NAME from '../assets/constants/screens';
import OnBoardingScreen from '../screens/onboarding';
import LoginScreen from '../screens/auth';
import LoaderScreen from '../screens/loader';
import NoFoundItemScreen from '../screens/notFoundItem';
import NoInternetScreen from '../screens/noInternet';
import HomeScreen from '../screens/home';
import ProfileScreen from '../screens/profile';
import MyProfileScreen from '../screens/myProfile';
import HistoryScreen from '../screens/history';
import CartScreen from '../screens/cart';
import SearchScreen from '../screens/search';
import CheckoutDeliveryScreen from '../screens/delivery';
import CheckoutPaymentScreen from '../screens/payment';
import DetailScreen from '../screens/detailItem';

// import {useDispatch} from 'react-redux'
import {useEffect} from 'react';
import {getFoodData} from '../redux/actions';

const Stack = createNativeStackNavigator();

const RootNavigator = props => {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(getFoodData());
  // });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name={SCREEN_NAME.LOADING_SCREEN}
          component={LoaderScreen}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name={SCREEN_NAME.ONBOARDING_SCREEN}
          component={OnBoardingScreen}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name={SCREEN_NAME.DETAIL_SCREEN}
          component={DetailScreen}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name={SCREEN_NAME.CHECKOUT_PAYMENT_SCREEN}
          component={CheckoutPaymentScreen}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name={SCREEN_NAME.CHECKOUT_DELIVERY_SCREEN}
          component={CheckoutDeliveryScreen}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name={SCREEN_NAME.HISTORY_SCREEN}
          component={HistoryScreen}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name={SCREEN_NAME.MYPROFILE_SCREEN}
          component={MyProfileScreen}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name={SCREEN_NAME.SEARCH_SCREEN}
          component={SearchScreen}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name={SCREEN_NAME.CART_SCREEN}
          component={CartScreen}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name={SCREEN_NAME.PROFILE_SCREEN}
          component={ProfileScreen}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name={SCREEN_NAME.NO_FOUND_ITEM_SCREEN}
          component={NoFoundItemScreen}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name={SCREEN_NAME.HOME_SCREEN}
          component={HomeScreen}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name={SCREEN_NAME.NO_INTERNET}
          component={NoInternetScreen}
          options={{headerShown: false}}></Stack.Screen>
        <Stack.Screen
          name={SCREEN_NAME.LOGIN_SCREEN}
          component={LoginScreen}
          options={{headerShown: false}}></Stack.Screen>
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigator;

// const styles = StyleSheet.create({});
