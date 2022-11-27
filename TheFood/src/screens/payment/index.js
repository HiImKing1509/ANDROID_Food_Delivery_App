import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Modal,
  Pressable,
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

const CheckoutPaymentScreen = props => {
  var radio_payment_props = [
    {id: 0, label: 'Card'},
    {id: 1, label: 'Bank account'},
  ];
  const [valueRadioPayment, setValueRadioPayment] = useState(0);
  var radio_delivery_props = [
    {id: 0, label: 'Door delivery'},
    {id: 1, label: 'Pick up'},
  ];
  const [valueRadioDelivery, setValueRadioDelivery] = useState(0);
  const {navigation} = props;
  const [modalVisible, setModalVisible] = useState(false);
  const hideModalVisible = () => {
    setModalVisible(false);
  };
  return (
    <ScrollView style={styles.container}>
      <CustomBreadcrumbNavigation
        title="Checkout"
        onBack={() => navigation.goBack()}
      />
      <Text style={styles.title}>Payment</Text>
      <View style={styles.paymentMethod}>
        <Text style={styles.paymentMethod.text}>Payment Method</Text>
        <View style={styles.paymentMethod.cards}>
          <RadioForm animation={true} style={styles.paymentMethod.cards.card}>
            {radio_payment_props.map((obj, i) => (
              <React.Fragment key={i}>
                <RadioButton labelHorizontal={true}>
                  <RadioButtonInput
                    obj={obj}
                    index={i}
                    isSelected={valueRadioPayment === i}
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
                    onPress={() => setValueRadioPayment(i)}
                  />
                  <View style={styles.icon}>
                    {obj.id === 0 ? (
                      <View style={styles.icon.iconCard}>
                        <ICCard></ICCard>
                      </View>
                    ) : obj.id === 1 ? (
                      <View style={styles.icon.iconBank}>
                        <ICBankAccount></ICBankAccount>
                      </View>
                    ) : (
                      <View style={styles.icon.iconPaypal}>
                        <ICPaypal></ICPaypal>
                      </View>
                    )}
                  </View>
                  <RadioButtonLabel
                    obj={obj}
                    index={i}
                    labelHorizontal={true}
                    labelStyle={{
                      fontFamily: 'FontsFree-Net-Abel-Regular',
                      fontSize: normalize(17),
                      marginTop: scaleY(20),
                      color: CUSTOM_COLOR.BLACK,
                      marginLeft: scaleX(11),
                    }}
                    onPress={() => setValueRadioPayment(i)}
                  />
                </RadioButton>
                <View
                  style={{
                    borderBottomWidth: obj.id !== 2 ? 1 : 0,
                    borderColor: 'rgba(0, 0, 0, 0.3)',
                    width: scaleX(232),
                    marginTop: scaleY(8),
                    alignSelf: 'center',
                  }}></View>
              </React.Fragment>
            ))}
          </RadioForm>
        </View>
      </View>
      <View style={styles.delivery}>
        <Text style={styles.delivery.text}>Delivery Method</Text>
        <View style={styles.delivery.cards}>
          <RadioForm animation={true} style={styles.delivery.cards.card}>
            {radio_delivery_props.map((obj, i) => (
              <React.Fragment key={i}>
                <RadioButton labelHorizontal={true}>
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
                    index={i}
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
          onPress={() => {
            setModalVisible(true);
          }}
        />
      </View>
      <Modal
        animationType={'fade'}
        transparent={true}
        visible={modalVisible}
        onBackdropPress={() => setModalVisible(true)}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}>
        <View style={styles.modalVisible}>
          <View style={styles.modalVisible.pleaseNote}>
            <View style={styles.modalVisible.pleaseNote.text}>
              <Text style={styles.modalVisible.pleaseNote.text.content}>
                Please Note
              </Text>
            </View>
            <View style={styles.modalVisible.pleaseNote.queries}>
              <View style={styles.modalVisible.pleaseNote.queries.query}>
                <Text
                  style={styles.modalVisible.pleaseNote.queries.query.method}>
                  Delivery to mainland
                </Text>
                <Text
                  style={styles.modalVisible.pleaseNote.queries.query.value}>
                  N1000 - N2000
                </Text>
              </View>
              <View style={styles.modalVisible.pleaseNote.queries.line}></View>
              <View style={styles.modalVisible.pleaseNote.queries.query}>
                <Text
                  style={styles.modalVisible.pleaseNote.queries.query.method}>
                  Delivery to island
                </Text>
                <Text
                  style={styles.modalVisible.pleaseNote.queries.query.value}>
                  N2000 - N3000
                </Text>
              </View>
            </View>
            <View style={styles.modalVisible.pleaseNote.buttons}>
              <TouchableOpacity
                style={styles.modalVisible.pleaseNote.buttons.cancelBtn}
                onPress={setModalVisible}>
                <Text
                  style={styles.modalVisible.pleaseNote.buttons.cancelBtn.text}>
                  Cancel
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                style={styles.modalVisible.pleaseNote.buttons.proceedBtn}>
                <Text
                  style={
                    styles.modalVisible.pleaseNote.buttons.proceedBtn.text
                  }>
                  Proceed
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
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
    width: normalize(315),
    alignSelf: 'center',
    text: {
      fontFamily: 'FontsFree-Net-Abel-Regular',
      color: CUSTOM_COLOR.BLACK,
      fontSize: normalize(17),
      marginBottom: scaleY(18),
    },
    cards: {
      height: scaleY(205),
      backgroundColor: CUSTOM_COLOR.WHITE,
      borderRadius: normalize(20),
      card: {},
    },
  },
  icon: {
    marginTop: scaleY(20),
    marginLeft: scaleX(15),
    iconCard: {
      width: normalize(40),
      height: normalize(40),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: CUSTOM_COLOR.TAHITI_GOLD,
      borderRadius: normalize(10),
    },
    iconBank: {
      width: normalize(40),
      height: normalize(40),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: CUSTOM_COLOR.FRENCH_ROSE,
      borderRadius: normalize(10),
    },
    iconPaypal: {
      width: normalize(40),
      height: normalize(40),
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: CUSTOM_COLOR.BLUE_RIBBON,
      borderRadius: normalize(10),
    },
  },
  delivery: {
    width: scaleX(315),
    alignSelf: 'center',
    text: {
      fontFamily: 'FontsFree-Net-Abel-Regular',
      color: CUSTOM_COLOR.BLACK,
      fontSize: normalize(17),
      marginVertical: scaleY(18),
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
    alignSelf: 'center',
    marginTop: scaleY(46),
    marginBottom: scaleY(41),
  },
  modalVisible: {
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    pleaseNote: {
      height: scaleY(322),
      width: scaleX(315),
      backgroundColor: CUSTOM_COLOR.WHITE,
      borderRadius: normalize(30),
      overflow: 'hidden',
      text: {
        backgroundColor: CUSTOM_COLOR.GALLERY,
        height: scaleY(66),
        content: {
          marginTop: scaleX(17),
          marginLeft: scaleY(46),
          fontSize: scaleY(20),
          color: CUSTOM_COLOR.BLACK,
          fontFamily: 'Poppins-SemiBold',
        },
      },
      queries: {
        marginLeft: scaleX(46),
        marginTop: scaleY(18),
        query: {
          method: {
            color: CUSTOM_COLOR.BLACK,
            opacity: 0.5,
            fontFamily: 'Poppins-Regular',
            textTransform: 'uppercase',
            fontSize: normalize(15),
          },
          value: {
            fontSize: normalize(17),
            color: CUSTOM_COLOR.BLACK,
            fontFamily: 'Poppins-Regular',
          },
        },
        line: {
          borderBottomWidth: 1,
          width: scaleX(240),
          opacity: 0.5,
          marginVertical: scaleY(17),
        },
      },
      buttons: {
        marginLeft: scaleX(46),
        marginTop: scaleY(34),
        display: 'flex',
        flexDirection: 'row',
        cancelBtn: {
          marginRight: scaleX(30),
          text: {
            color: CUSTOM_COLOR.BLACK,
            opacity: 0.5,
            fontSize: normalize(17),
            fontFamily: 'Poppins-SemiBold',
          },
        },
        proceedBtn: {
          marginTop: scaleY(-15),
          backgroundColor: CUSTOM_COLOR.VERMILION,
          paddingVertical: scaleY(17),
          paddingHorizontal: scaleY(43),
          borderRadius: 30,
          text: {color: CUSTOM_COLOR.WHITE, fontFamily: 'Poppins-SemiBold'},
          fontSize: normalize(17),
        },
      },
    },
  },
});

export default CheckoutPaymentScreen;
