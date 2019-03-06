import React, { Component } from 'react'
import { View, Image } from 'react-native'

export default class CustomIcon extends Component {
  render() {
    return (
      <View>
        <Image source={this.props.img} style={{ width: 22, height: 30 }} />
      </View>
    )
  }
}
