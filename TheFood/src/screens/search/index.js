import {
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomBreadcrumbNavigation from '../../components/CustomBreadcrumbNavigation';
import colors from '../../assets/constants/colors';
import {normalize, scaleX, scaleY} from '../../helperFunction';

const foodMenu = [
  {
    _id: 0,
    name: 'ABCD',
    price: '1,900',
    quantity: 0,
    icon: require('../../assets/images/foods/Veggie_tomato_mix/image_2.png'),
    active: true,
  },
  {
    _id: 1,
    name: 'DEF',
    price: '1,900',
    quantity: 0,
    icon: require('../../assets/images/foods/Veggie_tomato_mix/image_2.png'),
    active: true,
  },
  {
    _id: 2,
    name: 'GHJ',
    price: '1,900',
    quantity: 0,
    icon: require('../../assets/images/foods/Veggie_tomato_mix/image_2.png'),
    active: true,
  },
  {
    _id: 3,
    name: 'AAA',
    price: '1,900',
    quantity: 0,
    icon: require('../../assets/images/foods/Veggie_tomato_mix/image_2.png'),
    active: true,
  },
  {
    _id: 4,
    name: 'BBB',
    price: '1,900',
    quantity: 0,
    icon: require('../../assets/images/foods/Veggie_tomato_mix/image_2.png'),
    active: true,
  },
  {
    _id: 5,
    name: 'CCC',
    price: '1,900',
    quantity: 0,
    icon: require('../../assets/images/foods/Veggie_tomato_mix/image_2.png'),
    active: true,
  },
  {
    _id: 6,
    name: 'DDD',
    price: '1,900',
    quantity: 0,
    icon: require('../../assets/images/foods/Veggie_tomato_mix/image_2.png'),
    active: true,
  },
  {
    _id: 7,
    name: 'XYZ',
    price: '1,900',
    quantity: 0,
    icon: require('../../assets/images/foods/Veggie_tomato_mix/image_2.png'),
    active: true,
  },
];

const SearchScreen = props => {
  const {navigation} = props;
  const [searchTerm, setSearchTerm] = useState('');
  const [data, setData] = useState(foodMenu);

  useEffect(() => {
    const intervalID = setInterval(() => {
      if (searchTerm === '') setData(foodMenu);
      else {
        const temp = foodMenu.filter(food =>
          food.name.toLowerCase().includes(searchTerm.toLowerCase()),
        );
        setData(temp);
      }
    }, 100);

    return () => clearInterval(intervalID);
  }, [searchTerm]);

  return (
    <View>
      <CustomBreadcrumbNavigation
        searchField={true}
        onBack={() => navigation.goBack()}
        setSearchTerm={setSearchTerm}
        searchTerm={searchTerm}
      />
      <View style={styles.container}>
        <Text style={styles.textFound}>
          {searchTerm
            ? `Found ${data.length} ${data.length === 1 ? 'result' : 'results'}`
            : ''}
        </Text>
        <FlatList
          data={data}
          keyExtractor={item => '#' + item._id}
          renderItem={({item, index}) => {
            return (
              <View
                style={[
                  styles.cartContainer,
                  {marginTop: index % 2 == 1 ? scaleY(52) : scaleY(17)},
                ]}
                key={item._id}>
                <Image source={item.icon} style={styles.cartContainer.img} />
                <View style={styles.cartContainer.info}>
                  <Text style={styles.cartContainer.info.name}>
                    {item.name}
                  </Text>
                  <Text style={styles.cartContainer.info.price}>
                    {item.price}
                  </Text>
                </View>
              </View>
            );
          }}
          numColumns={2}
          columnWrapperStyle={styles.columnStyle}
        />
      </View>
    </View>
  );
};

export default SearchScreen;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: colors.ALABASTER,
    marginTop: scaleY(35),
    height: '100%',
    borderTopLeftRadius: normalize(30),
    borderTopRightRadius: normalize(30),
  },

  textFound: {
    fontSize: normalize(28),
    textAlign: 'center',
    marginTop: scaleY(35),
    fontFamily: 'FontsFree-Net-Abel-Regular',
    color: colors.BLACK,
    marginBottom: scaleY(17),
  },

  columnStyle: {
    display: 'flex',
    justifyContent: 'space-evenly',
  },

  cartContainer: {
    width: scaleX(156),
    img: {
      width: Math.max(scaleX(130), scaleY(130)),
      height: Math.max(scaleX(130), scaleY(130)),
      borderRadius: 100,
      position: 'absolute',
      top: 0,
      zIndex: 1,
      alignSelf: 'center',
    },

    info: {
      paddingHorizontal: scaleX(20),
      backgroundColor: colors.WHITE,
      marginTop: scaleY(47),
      borderRadius: normalize(30),

      name: {
        marginTop: scaleY(108),
        textAlign: 'center',
        color: colors.BLACK,
        fontFamily: 'FontsFree-Net-Abel-Regular',
        fontSize: normalize(22),
      },

      price: {
        marginTop: scaleY(20),
        marginBottom: scaleY(30),
        textAlign: 'center',
        color: colors.VERMILION,
        fontFamily: 'FontsFree-Net-Abel-Regular',
        fontSize: normalize(17),
      },
    },
  },
});
