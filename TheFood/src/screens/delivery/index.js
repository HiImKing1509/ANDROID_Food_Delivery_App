import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import CUSTOM_COLOR from '../../assets/constants/colors';
import SCREEN_NAME from '../../assets/constants/screens';
import {scaleX, scaleY, normalize} from '../../helperFunction';
import {ICCard, ICBankAccount, ICPaypal, ICOnBack} from '../../assets/icons';
import CustomBreadcrumbNavigation from '../../components/CustomBreadcrumbNavigation';
import CustomButton from '../../components/CustomButton';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

const CheckoutDeliveryScreen = props => {
  var radio_props = [
    {id: 0, label: 'Door delivery'},
    {id: 1, label: 'Pick up'},
  ];
  const [valueRadioDelivery, setValueRadioDelivery] = useState(0);

  const {navigation} = props;
  return (
    <View style={styles.container}>
      <CustomBreadcrumbNavigation
        title="Checkout"
        onBack={() => navigation.goBack()}
      />
      <Text style={styles.title}>Delivery</Text>
      <View style={styles.information}>
        <View style={styles.information.title}>
          <Text style={styles.information.title.text}>Address Details</Text>
          <TouchableOpacity style={styles.information.title.button}>
            <Text style={styles.information.title.button.text}>change</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.information.profile}>
          <View style={styles.information.profile.info}>
            <Text style={styles.information.profile.info.name}>
              Marvis Kparobo
            </Text>
            <Text style={styles.information.profile.info.address}>
              Km 5 refinery road oppsite re public road, effurun, delta state
            </Text>
            <Text style={styles.information.profile.info.phone}>
              +234 9011039271
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.paymentMethod}>
        <Text style={styles.paymentMethod.text}>Delivery Method</Text>
        <View style={styles.paymentMethod.cards}>
          <RadioForm animation={true} style={styles.paymentMethod.cards.card}>
            {radio_props.map((obj, i) => (
              <React.Fragment key={i}>
                <RadioButton labelHorizontal={true} key={obj.id}>
                  <RadioButtonInput
                    obj={obj}
                    index={obj.id}
                    isSelected={valueRadioDelivery === i}
                    borderWidth={2}
                    initial={0}
                    buttonSize={normalize(10)}
                    buttonOuterSize={normalize(20)}
                    buttonColor={CUSTOM_COLOR.VERMILION}
                    buttonInnerColor={CUSTOM_COLOR.VERMILION}
                    buttonOuterColor={CUSTOM_COLOR.VERMILION}
                    selectedButtonColor={CUSTOM_COLOR.VERMILION}
                    buttonWrapStyle={{
                      marginLeft: scaleX(21),
                      marginTop: scaleY(31),
                    }}
                    onPress={() => setValueRadioDelivery(i)}
                  />
                  <RadioButtonLabel
                    obj={obj}
                    index={obj.id}
                    labelHorizontal={true}
                    labelStyle={{
                      fontFamily: 'FontsFree-Net-Abel-Regular',
                      fontSize: normalize(17),
                      color: CUSTOM_COLOR.BLACK,
                      marginLeft: scaleY(10),
                      marginTop: scaleY(30),
                    }}
                    onPress={() => setValueRadioDelivery(i)}
                  />
                </RadioButton>
                <View
                  style={{
                    alignSelf: 'center',
                    borderBottomWidth: obj.id !== 1 ? 1 : 0,
                    paddingTop: scaleY(16),
                    borderColor: 'rgba(0, 0, 0, 0.5)',
                    width: scaleX(232),
                  }}></View>
              </React.Fragment>
            ))}
          </RadioForm>
        </View>
      </View>
      <View style={styles.total}>
        <Text style={styles.total.text}>Total</Text>
        <Text style={styles.total.cost}>23,000</Text>
      </View>
      <View style={styles.btnUpdate}>
        <CustomButton
          type="secondary"
          title="Proceed to payment"
          onPress={() =>
            navigation.navigate(SCREEN_NAME.CHECKOUT_PAYMENT_SCREEN)
          }
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.ATHENS_GRAY,
    position: 'relative',
  },
  title: {
    fontFamily: 'FontsFree-Net-Abel-Regular',
    color: CUSTOM_COLOR.BLACK,
    fontSize: normalize(34),
    width: normalize(315),
    alignSelf: 'center',
    marginVertical: normalize(46),
  },
  information: {
    width: normalize(315),
    alignSelf: 'center',
    title: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: scaleY(18),
      justifyContent: 'space-between',
      text: {
        color: CUSTOM_COLOR.BLACK,
        fontSize: normalize(17),
        fontFamily: 'FontsFree-Net-Abel-Regular',
      },
      button: {
        text: {
          fontFamily: 'FontsFree-Net-Abel-Regular',
          color: CUSTOM_COLOR.VERMILION,
        },
      },
    },
    profile: {
      display: 'flex',
      flexDirection: 'column',
      height: scaleY(156),
      justifyContent: 'center',
      backgroundColor: CUSTOM_COLOR.WHITE,
      borderRadius: normalize(20),
      info: {
        marginLeft: scaleX(30),
        height: scaleY(100),
        justifyContent: 'space-between',
        name: {
          fontFamily: 'FontsFree-Net-Abel-Regular',
          color: CUSTOM_COLOR.BLACK,
          fontSize: normalize(17),
          borderBottomWidth: 1,
          paddingBottom: scaleY(6),
          marginBottom: scaleY(8),
          borderColor: 'rgba(0, 0, 0, 0.5)',
          width: scaleX(232),
        },
        phone: {
          fontFamily: 'FontsFree-Net-Abel-Regular',
          color: CUSTOM_COLOR.BLACK,
          fontSize: normalize(15),
        },
        address: {
          fontFamily: 'FontsFree-Net-Abel-Regular',
          color: CUSTOM_COLOR.BLACK,
          fontSize: normalize(15),
          borderBottomWidth: 1,
          paddingBottom: scaleY(6),
          marginBottom: scaleY(8),
          borderColor: 'rgba(0, 0, 0, 0.5)',
          width: scaleX(232),
        },
      },
    },
  },
  paymentMethod: {
    width: scaleX(315),
    alignSelf: 'center',
    marginTop: scaleY(42),
    text: {
      fontFamily: 'FontsFree-Net-Abel-Regular',
      color: CUSTOM_COLOR.BLACK,
      fontSize: normalize(17),
      marginBottom: scaleY(18),
    },
    cards: {
      height: scaleY(156),
      backgroundColor: CUSTOM_COLOR.WHITE,
      borderRadius: normalize(20),
    },
  },
  total: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: normalize(315),
    alignSelf: 'center',
    marginTop: scaleY(40),
    text: {
      color: CUSTOM_COLOR.BLACK,
      fontSize: normalize(17),
      fontFamily: 'FontsFree-Net-Abel-Regular',
    },
    cost: {
      fontSize: normalize(22),
      fontFamily: 'FontsFree-Net-Abel-Regular',
      color: CUSTOM_COLOR.BLACK,
    },
  },
  btnUpdate: {
    bottom: scaleY(41),
    alignSelf: 'center',
    position: 'absolute',
  },
});

export default CheckoutDeliveryScreen;
