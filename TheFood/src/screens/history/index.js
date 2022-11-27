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

const HistoryScreen = props => {
  const data = [
    {
      _id: 0,
      name: 'Or762537',
      price: '1,900',
      quantity: 0,
      icon: require('../../assets/images/foods/Veggie_tomato_mix/image_2.png'),
    },
    // {
    //   _id: 1,
    //   name: 'Or723421',
    //   price: '2,300',
    //   quantity: 0,
    //   icon: require('../../assets/images/foods/Rice/image_3.png'),
    // },
  ];
  const {navigation} = props;
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CustomBreadcrumbNavigation
          onBack={() => navigation.goBack()}
          title="History"
        />
      </View>
      <FlatList
        styles={styles.listItem}
        data={data}
        keyExtractor={item => item._id}
        renderItem={({item, index}) => {
          return (
            <View
              style={styles.cartItem}
              onPress={() => {
                alert(item.name);
              }}>
              <View style={styles.cartItem.image}>
                <Image source={item.icon} style={styles.cartItem.image.img0} />
                <Image source={item.icon} style={styles.cartItem.image.img1} />
                <Image source={item.icon} style={styles.cartItem.image.img2} />
              </View>
              <View style={styles.cartItem.info}>
                <Text style={styles.cartItem.name}>#{item.name}</Text>
                <Text style={styles.cartItem.price}>${item.price}</Text>

                <Text style={styles.cartItem.status}>Processing</Text>
              </View>
            </View>
          );
        }}
      />
      <View style={styles.icHistory}>
        <ICHistory />
      </View>
      <View style={styles.text}>
        <Text style={styles.text.error}>No history yet</Text>
        <Text style={styles.text.solve}>
          Hit the orange button down below to Create an order
        </Text>
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
  cartItem: {
    marginBottom: scaleY(14),
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: CUSTOM_COLOR.WHITE,
    padding: Math.max(scaleX(16), scaleY(16)),
    width: scaleX(315),
    alignSelf: 'center',
    borderRadius: normalize(20),
    shadowColor: '#000',
    elevation: 2,
    image: {
      marginRight: scaleX(24),
      img0: {
        width: Math.max(scaleX(70), scaleY(70)),
        height: Math.max(scaleX(70), scaleY(70)),
        borderRadius: 100,
        overflow: 'hidden',
      },
      img1: {
        width: Math.max(scaleX(70), scaleY(70)),
        height: Math.max(scaleX(70), scaleY(70)),
        borderRadius: 100,
        position: 'absolute',
        top: 0,
        left: 12,
        overflow: 'hidden',
      },
      img2: {
        width: Math.max(scaleX(70), scaleY(70)),
        height: Math.max(scaleX(70), scaleY(70)),
        borderRadius: 100,
        position: 'absolute',
        top: 0,
        left: 24,
        overflow: 'hidden',
      },
    },
    info: {
      display: 'flex',
      justifyContent: 'space-evenly',
      marginLeft: Math.max(scaleX(16), scaleY(16)),
      position: 'relative',
      flexGrow: 1,
    },

    name: {
      color: CUSTOM_COLOR.BLACK,
      fontFamily: 'FontsFree-Net-Abel-Regular',
      fontSize: normalize(17),
    },

    price: {
      color: CUSTOM_COLOR.VERMILION,
      fontFamily: 'FontsFree-Net-Abel-Regular',
      fontSize: normalize(15),
    },

    status: {
      color: CUSTOM_COLOR.PASTEL_GREEN,
      justifyContent: 'space-between',
      left: 80,
      top: 0,
      fontFamily: 'FontsFree-Net-Abel-Regular',
      position: 'absolute',
      paddingVertical: scaleY(11),
      zIndex: 1,
    },
  },
  icHistory: {
    alignSelf: 'center',
    position: 'absolute',
    top: '30%',
  },
  text: {
    alignSelf: 'center',
    alignItems: 'center',
    width: scaleX(177),
    position: 'absolute',
    top: '50%',
    error: {
      fontFamily: 'FontsFree-Net-Abel-Regular',
      color: CUSTOM_COLOR.BLACK,
      fontSize: normalize(28),
      textAlign: 'center',
      marginVertical: scaleY(14),
    },
    solve: {
      fontFamily: 'FontsFree-Net-Abel-Regular',
      textAlign: 'center',
      color: CUSTOM_COLOR.SILVER,
      fontSize: normalize(17),
    },
  },
  button: {
    position: 'absolute',
    bottom: scaleY(36),
    alignSelf: 'center',
  },
});

export default HistoryScreen;
