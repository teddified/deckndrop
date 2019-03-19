import React, { Component } from 'react'
import { View, Text, ActivityIndicator, StyleSheet } from 'react-native'
import Colors from '../constants/Colors'
import firebase from 'react-native-firebase'

export default class LoadingScreen extends Component {
  static navigationOptions = {
    header: null
  }

  componentDidMount() {
    firebase.auth().onAuthStateChanged(user => {
      this.props.navigation.navigate(user ? 'Main' : 'LoginScreen')
    })
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    )
  }
}
const styles = StyleSheet.create({
  container: {
    backgroundColor: Colors.darkgrey,
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
