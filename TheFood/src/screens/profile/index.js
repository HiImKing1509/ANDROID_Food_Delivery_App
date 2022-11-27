import {
  StyleSheet,
  Text,
  View,
  Image,
  Alert,
  TouchableHighlight,
  TouchableWithoutFeedback,
  TouchableOpacity,
} from 'react-native';
import React, {useState} from 'react';
import CUSTOM_COLOR from '../../assets/constants/colors';
import SCREEN_NAME from '../../assets/constants/screens';
import {scaleX, scaleY, normalize} from '../../helperFunction';
import {ICCard, ICBankAccount, ICPaypal} from '../../assets/icons';
import CustomBreadcrumbNavigation from '../../components/CustomBreadcrumbNavigation';
import CustomButton from '../../components/CustomButton';
import RadioForm, {
  RadioButton,
  RadioButtonInput,
  RadioButtonLabel,
} from 'react-native-simple-radio-button';

const ProfileScreen = props => {
  var radio_props = [
    {id: 0, label: 'Card'},
    {id: 1, label: 'Bank account'},
    {id: 2, label: 'Paypal'},
  ];

  const [radioPaymentMethod, setRadioPaymentMethod] = useState(0);

  const {navigation} = props;
  return (
    <>
      <CustomBreadcrumbNavigation
        title="My Profile"
        onBack={() => navigation.goBack()}
      />
      <TouchableOpacity
        onPress={() => {
          navigation.navigate(SCREEN_NAME.MYPROFILE_SCREEN);
        }}>
        <View style={styles.information}>
          <Text style={styles.information.text}>Information</Text>
          <View style={styles.information.profile}>
            <Image
              style={styles.information.profile.avatar}
              source={require('../../assets/images/ProfileInfomationAvatar.png')}
            />
            <View style={styles.information.profile.info}>
              <Text style={styles.information.profile.info.name}>
                Marvis Ighedosa
              </Text>
              <Text style={styles.information.profile.info.email}>
                dosamarvis@gmail.com
              </Text>
              <Text style={styles.information.profile.info.bio}>
                No 15 street off ovie palace road effurun delta state
              </Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
      <View style={styles.paymentMethod}>
        <Text style={styles.paymentMethod.text}>Payment Method</Text>
        <View style={styles.paymentMethod.cards}>
          <RadioForm animation={true} style={styles.paymentMethod.cards.card}>
            {radio_props.map((obj, i) => (
              <React.Fragment key={i}>
                <TouchableOpacity onPress={() => setRadioPaymentMethod(i)}>
                  <RadioButton labelHorizontal={true} key={obj.id}>
                    <RadioButtonInput
                      obj={obj}
                      index={obj.id}
                      isSelected={radioPaymentMethod === i}
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
                      onPress={() => setRadioPaymentMethod(i)}
                    />
                    <View style={styles.icon} key={i}>
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
                      index={obj.id}
                      labelHorizontal={true}
                      labelStyle={{
                        fontFamily: 'FontsFree-Net-Abel-Regular',
                        fontSize: normalize(17),
                        marginTop: scaleY(20),
                        color: CUSTOM_COLOR.BLACK,
                        marginLeft: scaleX(11),
                      }}
                      onPress={() => setRadioPaymentMethod(i)}
                    />
                  </RadioButton>
                </TouchableOpacity>
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
      <View style={styles.btnUpdate}>
        <CustomButton
          type="secondary"
          title="Update"
          onPress={() => {
            Alert.alert('Update Information', 'sucessfully update');
          }}
        />
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.ATHENS_GRAY,
    position: 'relative',
  },
  information: {
    width: normalize(315),
    alignSelf: 'center',
    text: {
      fontFamily: 'FontsFree-Net-Abel-Regular',
      color: CUSTOM_COLOR.BLACK,
      fontSize: normalize(17),
      marginTop: scaleY(54),
      marginBottom: scaleY(10),
    },
    profile: {
      display: 'flex',
      flexDirection: 'row',
      backgroundColor: CUSTOM_COLOR.WHITE,
      borderRadius: normalize(20),
      avatar: {
        marginLeft: scaleX(16),
        marginTop: scaleY(20),
        width: normalize(60),
        height: normalize(60),
      },
      info: {
        width: scaleX(190),
        marginLeft: scaleX(15),
        height: scaleY(133),
        name: {
          fontFamily: 'FontsFree-Net-Abel-Regular',
          color: CUSTOM_COLOR.BLACK,
          marginTop: scaleY(20),
          fontSize: normalize(18),
        },
        email: {
          fontFamily: 'FontsFree-Net-Abel-Regular',
          color: CUSTOM_COLOR.BLACK,
          fontSize: normalize(13),
          marginTop: scaleY(7),
          opacity: 0.5,
        },
        bio: {
          width: scaleX(191),
          fontFamily: 'FontsFree-Net-Abel-Regular',
          marginTop: scaleY(8),
          color: CUSTOM_COLOR.BLACK,
          fontSize: normalize(13),
          opacity: 0.5,
        },
      },
    },
  },
  paymentMethod: {
    width: normalize(315),
    alignSelf: 'center',
    marginTop: scaleY(48),
    text: {
      fontFamily: 'FontsFree-Net-Abel-Regular',
      color: CUSTOM_COLOR.BLACK,
      fontSize: normalize(17),
      marginBottom: scaleY(20),
    },
    cards: {
      height: scaleY(231),
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
  btnUpdate: {
    position: 'absolute',
    bottom: scaleY(41),
    alignSelf: 'center',
  },
});

export default ProfileScreen;
