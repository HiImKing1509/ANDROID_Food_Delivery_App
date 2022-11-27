import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import React from 'react';
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

const MyProfileScreen = props => {
  var radio_props = [
    {id: 0, label: 'Card', value: 0},
    {id: 1, label: 'Bank account', value: 0},
    {id: 2, label: 'Paypal', value: 0},
  ];

  const {navigation} = props;

  var check = 0;
  return (
    <ScrollView style={styles.container}>
      <CustomBreadcrumbNavigation title="" onBack={() => navigation.goBack()} />
      <Text style={styles.title}>My Profile</Text>
      <View style={styles.information}>
        <View style={styles.information.title}>
          <Text style={styles.information.title.text}>Personal Details</Text>
          <TouchableOpacity style={styles.information.title.button}>
            <Text style={styles.information.title.button.text}>change</Text>
          </TouchableOpacity>
        </View>
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
            <Text style={styles.information.profile.info.phone}>
              +234 9011039271
            </Text>
            <Text style={styles.information.profile.info.bio}>
              No 15 street off ovie palace road effurun delta state
            </Text>
          </View>
        </View>
      </View>
      <View style={styles.moreInfomation}>
        <TouchableOpacity style={styles.moreInfomation.button}>
          <Text style={styles.moreInfomation.button.text}>Order</Text>
          <View
            style={{
              transform: [{rotate: '180deg'}],
            }}>
            <ICOnBack />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moreInfomation.button}>
          <Text style={styles.moreInfomation.button.text}>Pending reviews</Text>
          <View
            style={{
              transform: [{rotate: '180deg'}],
            }}>
            <ICOnBack />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moreInfomation.button}>
          <Text style={styles.moreInfomation.button.text}>Faq</Text>
          <View
            style={{
              transform: [{rotate: '180deg'}],
            }}>
            <ICOnBack />
          </View>
        </TouchableOpacity>
        <TouchableOpacity style={styles.moreInfomation.button}>
          <Text style={styles.moreInfomation.button.text}>Help</Text>
          <View
            style={{
              transform: [{rotate: '180deg'}],
            }}>
            <ICOnBack />
          </View>
        </TouchableOpacity>
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: CUSTOM_COLOR.ATHENS_GRAY,
    position: 'relative',
  },
  title: {
    color: CUSTOM_COLOR.BLACK,
    fontSize: normalize(34),
    width: scaleX(315),
    alignSelf: 'center',
    marginTop: normalize(46),
    fontFamily: 'FontsFree-Net-Abel-Regular',
  },
  information: {
    marginTop: normalize(42),
    width: scaleX(315),
    alignSelf: 'center',
    title: {
      display: 'flex',
      flexDirection: 'row',
      marginBottom: scaleY(9),
      justifyContent: 'space-between',
      text: {
        color: CUSTOM_COLOR.BLACK,
        fontSize: normalize(18),
        fontFamily: 'FontsFree-Net-Abel-Regular',
      },
      button: {
        text: {
          color: CUSTOM_COLOR.VERMILION,
          fontSize: normalize(16),
          fontFamily: 'FontsFree-Net-Abel-Regular',
        },
      },
    },
    profile: {
      display: 'flex',
      flexDirection: 'row',
      height: scaleY(197),
      backgroundColor: CUSTOM_COLOR.WHITE,
      borderRadius: normalize(20),
      avatar: {
        width: scaleX(91),
        height: scaleY(100),
        marginTop: scaleY(18),
        marginLeft: scaleX(16),
      },
      info: {
        width: scaleX(182),
        marginLeft: scaleX(15),
        marginTop: scaleY(26),
        name: {
          color: CUSTOM_COLOR.BLACK,
          fontSize: normalize(18),
          fontFamily: 'FontsFree-Net-Abel-Regular',
          marginBottom: scaleY(4),
        },
        email: {
          color: CUSTOM_COLOR.BLACK,
          fontSize: normalize(15),
          opacity: 0.5,
          borderBottomWidth: 1,
          paddingBottom: scaleY(6),
          marginBottom: scaleY(7),
          borderColor: 'rgba(0, 0, 0, 0.5)',
          width: scaleX(165),
          fontFamily: 'FontsFree-Net-Abel-Regular',
        },
        phone: {
          color: CUSTOM_COLOR.BLACK,
          fontSize: normalize(15),
          opacity: 0.5,
          borderBottomWidth: 1,
          paddingBottom: scaleY(6),
          marginBottom: scaleY(7),
          borderColor: 'rgba(0, 0, 0, 0.5)',
          width: scaleX(165),
          fontFamily: 'FontsFree-Net-Abel-Regular',
        },
        bio: {
          color: CUSTOM_COLOR.BLACK,
          fontSize: normalize(15),
          opacity: 0.5,
          fontFamily: 'FontsFree-Net-Abel-Regular',
        },
      },
    },
  },
  moreInfomation: {
    justifyContent: 'space-between',
    width: scaleX(315),
    alignSelf: 'center',
    button: {
      marginTop: normalize(27),
      backgroundColor: CUSTOM_COLOR.WHITE,
      borderRadius: normalize(20),
      flexDirection: 'row',
      paddingVertical: normalize(20),
      paddingHorizontal: normalize(23),
      justifyContent: 'space-between',
      text: {
        fontSize: normalize(18),
        color: CUSTOM_COLOR.BLACK,
        fontFamily: 'FontsFree-Net-Abel-Regular',
      },
    },
  },
  btnUpdate: {
    marginVertical: scaleY(60),
    alignSelf: 'center',
  },
});

export default MyProfileScreen;
