import React, { Component } from 'react'
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native'

export default class Button extends Component {
  render() {
    return (
      <TouchableOpacity onPress={() => this.props.onPress()}>
        <View style={[styles.button, this.props.style]}>
          <Text style={styles.title}>{this.props.title}</Text>
        </View>
      </TouchableOpacity>
    )
  }
}

const styles = StyleSheet.create({
  button: {
    width: 100,
    height: 30,
    alignItems: 'center',
    justifyContent: 'center'
  },
  title: {
    fontFamily: 'bebas-kai',
    fontWeight: '200',
    fontSize: 24,
    color: 'white',
    textAlign: 'center'
  }
})
