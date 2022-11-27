import { Text, StyleSheet, View } from 'react-native'
import React, { Component } from 'react'

import styles from './styles'

export default class Title extends Component {
  render() {
    return (
      <View style={styles.title}>
        <Text style={styles.text}>Delicious {"\n"}food for you</Text>
      </View>
    )
  }
}
