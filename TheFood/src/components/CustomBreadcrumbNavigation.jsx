import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import React from 'react';
import {scaleX, scaleY, normalize} from '../helperFunction';
import {ICOnBack} from '../assets/icons';
import CUSTOM_COLOR from '../assets/constants/colors';
import colors from '../assets/constants/colors';

const CustomBreadcrumbNavigation = ({
  title = null,
  RightIcon = null,
  searchField = null,
  onBack,
  setSearchTerm,
  searchTerm,
}) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.breadcrumb} onPress={onBack}>
        <View>
          <ICOnBack />
        </View>
      </TouchableOpacity>

      <Text style={styles.breadcrumb.textBreadcrumb}>{title || ''}</Text>

      {searchField ? (
        <View style={styles.searchFieldContainer}>
          <TextInput
            style={[styles.searchFieldContainer.searchField]}
            autoFocus={true}
            value={searchTerm}
            onChangeText={text => {
              setSearchTerm(text);
            }}></TextInput>
        </View>
      ) : (
        <></>
      )}

      {RightIcon ? <RightIcon /> : <View></View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: scaleY(60),
    marginHorizontal: scaleX(50),

    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
  },

  breadcrumb: {
    textBreadcrumb: {
      color: CUSTOM_COLOR.BLACK,
      fontFamily: 'FontsFree-Net-Abel-Regular',
      fontSize: normalize(23),
    },
  },

  searchFieldContainer: {
    width: '100%',
    marginHorizontal: scaleX(44),

    searchField: {
      fontFamily: 'FontsFree-Net-Abel-Regular',
      fontSize: normalize(17),
      color: colors.BLACK,
    },
  },
});

export default CustomBreadcrumbNavigation;
