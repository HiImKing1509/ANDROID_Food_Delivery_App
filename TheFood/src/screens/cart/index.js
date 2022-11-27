import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import React from 'react';
import CustomBreadcrumbNavigation from '../../components/CustomBreadcrumbNavigation';
import {normalize, scaleX, scaleY} from '../../helperFunction';
import {ICHeartSmall, ICSwipe} from '../../assets/icons';
import colors from '../../assets/constants/colors';
import {useState} from 'react';
import {SwipeListView, SwipeRow} from 'react-native-swipe-list-view';
import SCREEN_NAME from '../../assets/constants/screens';
import CustomButton from '../../components/CustomButton';

const data = [
  {
    _id: 0,
    name: 'Veggie tomato mix',
    price: '1,900',
    quantity: 0,
    icon: require('../../assets/images/foods/Veggie_tomato_mix/image_2.png'),
    active: true,
  },
  {
    _id: 1,
    name: 'Fishwith mix orange juice',
    price: '1,900',
    quantity: 0,
    icon: require('../../assets/images/foods/Veggie_tomato_mix/image_2.png'),
    active: true,
  },
  {
    _id: 2,
    name: 'Veggie tomato mix',
    price: '1,900',
    quantity: 0,
    icon: require('../../assets/images/foods/Veggie_tomato_mix/image_2.png'),
    active: true,
  },
];

const CartScreen = props => {
  const [st, setSt] = useState(0);
  const [slted, setSlted] = useState();

  const onMinus = (index, sign) => {
    if (sign === '-') {
      data[index].quantity - 1 >= 0
        ? (data[index].quantity -= 1)
        : (data[index].quantity = 0);
      setSt(data[index].quantity);
    } else data[index].quantity += 1;
  };

  const onDelelteItem = () => {
    data.splice(slted, 1);
    setSt(st + 1);
  };

  const {navigation} = props;
  return (
    <>
      <CustomBreadcrumbNavigation
        title={'Cart'}
        onBack={() => navigation.goBack()}
      />
      <View style={styles.container}>
        <View style={styles.swipeNoticeContainer}>
          <ICSwipe />
          <Text style={styles.swipeNoticeContainer.text}>
            swipe on an item to delete
          </Text>
        </View>

        <SwipeListView
          style={styles.flatList}
          data={data}
          keyExtractor={item => item._id}
          renderItem={({item, index}) => {
            return (
              <View
                style={styles.cartItem}
                onTouchStart={() => setSlted(index)}>
                <Image source={item.icon} style={styles.cartItem.img} />
                <View style={styles.cartItem.info}>
                  <Text style={styles.cartItem.name}>{item.name}</Text>
                  <Text style={styles.cartItem.price}>#{item.price}</Text>
                  <View style={styles.cartItem.button}>
                    <TouchableOpacity
                      style={{paddingHorizontal: scaleY(10)}}
                      onPress={() => {
                        onMinus(index, '-');
                        // setSt(st - 1);
                      }}>
                      <Text>-</Text>
                    </TouchableOpacity>
                    <Text>{data[index].quantity}</Text>
                    <TouchableOpacity
                      style={{paddingHorizontal: scaleY(10)}}
                      onPress={() => {
                        onMinus(index, '+');
                        setSt(st + 1);
                      }}>
                      <Text>+</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            );
          }}
          renderHiddenItem={({item, index}) => {
            return (
              <View style={styles.hiddenCartItem} onTouchStart>
                <View style={styles.hiddenCartItem.container}>
                  <TouchableOpacity
                    style={[
                      styles.hiddenCartItem.icon,
                      {marginRight: scaleX(15)},
                    ]}>
                    <ICHeartSmall />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.hiddenCartItem.icon}>
                    <ICHeartSmall />
                  </TouchableOpacity>
                </View>
                <View style={styles.hiddenCartItem.container}>
                  <TouchableOpacity
                    style={[
                      styles.hiddenCartItem.icon,
                      {marginRight: scaleX(15)},
                    ]}>
                    <ICHeartSmall />
                  </TouchableOpacity>
                  <TouchableOpacity style={styles.hiddenCartItem.icon}>
                    <ICHeartSmall />
                  </TouchableOpacity>
                </View>
              </View>
            );
          }}
          leftOpenValue={scaleX(130)}
          leftActivationValue={scaleX(130) + 50}
          rightOpenValue={scaleX(-130)}
          rightActivationValue={scaleX(-130) - 50}
          onLeftActionStatusChange={onDelelteItem}
          onRightActionStatusChange={onDelelteItem}
        />

        <View style={styles.button}>
          <CustomButton
            type="secondary"
            title="Complete order"
            onPress={() =>
              navigation.navigate(SCREEN_NAME.CHECKOUT_DELIVERY_SCREEN)
            }
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
  },

  swipeNoticeContainer: {
    display: 'flex',
    flexDirection: 'row',
    marginTop: scaleY(55),
    text: {
      color: colors.BLACK,
      fontSize: normalize(16),
      fontFamily: 'FontsFree-Net-Abel-Regular',
    },
  },

  flatList: {
    width: '100%',
    marginTop: scaleY(22),
  },

  cartItem: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: colors.WHITE,
    padding: Math.max(scaleX(16), scaleY(16)),
    marginBottom: scaleY(14),
    borderRadius: normalize(20),
    marginHorizontal: scaleX(50),

    img: {
      width: Math.max(scaleX(70), scaleY(70)),
      height: Math.max(scaleX(70), scaleY(70)),
      borderRadius: 100,
      overflow: 'hidden',
    },

    info: {
      display: 'flex',
      justifyContent: 'space-evenly',
      marginLeft: Math.max(scaleX(16), scaleY(16)),
      position: 'relative',
      flexGrow: 1,
    },

    name: {
      color: colors.BLACK,
      fontFamily: 'FontsFree-Net-Abel-Regular',
      fontSize: normalize(17),
    },

    price: {
      color: colors.VERMILION,
      fontFamily: 'FontsFree-Net-Abel-Regular',
      fontSize: normalize(15),
    },

    button: {
      backgroundColor: colors.VERMILION,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      right: 0,
      bottom: 0,

      position: 'absolute',
      paddingVertical: scaleY(2),
      borderRadius: normalize(30),
      zIndex: 1,
    },
  },

  completeButton: {
    backgroundColor: colors.VERMILION,
    paddingVertical: scaleY(25),
    borderRadius: normalize(30),
    paddingHorizontal: scaleX(100),
    position: 'absolute',
    bottom: 0,
    marginBottom: scaleY(40),

    text: {
      fontFamily: 'FontsFree-Net-Abel-Regular',
      width: '100%',
    },
  },

  hiddenCartItem: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: scaleY(14),
    borderRadius: normalize(20),
    marginHorizontal: scaleX(50),

    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-evenly',
    },

    icon: {
      padding: scaleY(16),
      backgroundColor: colors.VERMILION,
      borderRadius: 100,
      marginVertical: scaleY(25),
    },
  },
  button: {
    position: 'absolute',
    bottom: scaleY(36),
    alignSelf: 'center',
  },
});

export default CartScreen;
