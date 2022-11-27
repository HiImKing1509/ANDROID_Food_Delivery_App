import {
  Text,
  StyleSheet,
  View,
  Button,
  TouchableOpacity,
  Alert,
} from 'react-native';
import React, {Component} from 'react';

import styles from './styles';
import {ICHeart, ICHome, ICTime, ICUser} from '../../../assets/icons';
import CUSTOM_COLOR from '../../../assets/constants/colors';

import SCREEN_NAME from '../../../assets/constants/screens';

const iconListComponent = [
  {
    id: 0,
    icon: <ICHome />,
    onNavigation: SCREEN_NAME.HOME_SCREEN,
  },
  {
    id: 1,
    icon: <ICHeart />,
    onNavigation: '',
  },
  {
    id: 2,
    icon: <ICUser />,
    onNavigation: SCREEN_NAME.PROFILE_SCREEN,
  },
  {
    id: 3,
    icon: <ICTime />,
    onNavigation: SCREEN_NAME.HISTORY_SCREEN,
  },
];

export default class Footer extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selected: 0,
    };
  }

  onSelectButton = index => {
    this.setState({selected: index});
  };

  render() {
    return (
      <View style={styles.container}>
        {iconListComponent.map((Component, index) => {
          return (
            <TouchableOpacity
              style={styles.icon}
              key={index}
              onPress={() => {
                this.onSelectButton(Component.id);
                Component.onNavigation === ''
                  ? Alert.alert('Thông báo', 'Tính năng chưa được hỗ trợ')
                  : this.props.onNavigation.navigate(Component.onNavigation);
              }}>
              {React.cloneElement(Component.icon, {
                fill:
                  this.state.selected === index
                    ? CUSTOM_COLOR.VERMILION
                    : 'none',
              })}
            </TouchableOpacity>
          );
        })}
      </View>
    );
  }
}
