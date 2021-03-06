import React, { Component } from 'react'
import { View, Text, StyleSheet, TextInput } from 'react-native'
import Colors from '../constants/Colors'
import Button from '../components/Button'
import firebase from 'react-native-firebase'

export default class LoginScreen extends Component {
  static navigationOptions = {
    header: null
  }

  state = {
    email: null,
    password: null,
    errorMessage: null
  }

  handleSignUp() {
    firebase
      .auth()
      .createUserWithEmailAndPassword(this.state.email, this.state.password)
      .then(() => this.props.navigation.navigate('Main'))
      .catch(error => this.setState({ errorMessage: error.message }))
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.loginContainer}>
          <Text style={styles.logo}>Deck n' Drop</Text>
          <Text style={styles.signUp}>Sign Up</Text>
          <TextInput
            placeholder="Email / User"
            autoCapitalize="none"
            placeholderTextColor="white"
            onChangeText={email => this.setState({ email })}
            value={this.state.email}
            style={styles.inputField}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry
            placeholderTextColor="white"
            onChangeText={password => this.setState({ password })}
            value={this.state.password}
            style={styles.inputField}
          />
        </View>
        <View style={{ height: 40, width: 220, marginTop: 10 }}>
          {this.state.errorMessage && (
            <Text style={{ color: 'red', textAlign: 'center' }}>
              {this.state.errorMessage}
            </Text>
          )}
        </View>
        <Button
          title="Sign Up"
          style={{ marginTop: 10 }}
          onPress={() => this.handleSignUp()}
        />
        <Button
          title="Back"
          onPress={() => this.props.navigation.navigate('LoginScreen')}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.darkgrey
  },
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
  },
  signUp: {
    fontFamily: 'bebas-kai',
    fontWeight: '200',
    fontSize: 24,
    color: 'white'
  }
})
