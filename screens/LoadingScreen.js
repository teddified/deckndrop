import React, { Component } from 'react'
import { View, Text } from 'react-native'

export default class LoadingScreen extends Component {
  render() {
    return (
      <View style={{ justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading ...</Text>
      </View>
    )
  }
}
