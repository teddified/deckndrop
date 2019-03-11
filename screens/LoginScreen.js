import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import Colors from '../constants/Colors'
import Button from '../components/Button'

export default class LoginScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <Text style={styles.logo}>Deck n' Drop</Text>
          <TextInput
            placeholder="Email / User"
            placeholderTextColor="white"
            style={styles.inputField}
          />
          <TextInput
            placeholder="Password"
            placeholderTextColor="white"
            style={styles.inputField}
          />
        </View>
        <Button
          title="Login"
          style={{ marginTop: 10 }}
          onPress={() => console.log('yes')}
        />
        <Button title="Sign In" onPress={() => console.log('yes')} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
  loginContainer: {
    backgroundColor: Colors.lightgrey,
    padding: 10,
    borderRadius: 8,
    width: '70%',
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    fontFamily: 'bebas-kai',
    fontWeight: '200',
    fontSize: 40,
    color: 'white'
  },
  inputField: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    color: 'white',
    borderRadius: 10,
    borderWidth: 1,
    padding: 5,
    backgroundColor: Colors.lightgrey,
    marginTop: 20
  }
})
