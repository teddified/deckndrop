import React from 'react'
import { View, Text, StyleSheet, TextInput, Image } from 'react-native'
import firebase from 'react-native-firebase'
import Colors from '../constants/Colors'
import Layout from '../constants/Layout'
import Button from '../components/Button'

export default class StatsScreen extends React.Component {
  static navigationOptions = {
    title: "Deck n'Drop",
    headerTintColor: 'white',
    headerStyle: {
      height: 50,
      backgroundColor: Colors.darkgrey
    },
    headerTitleStyle: {
      fontFamily: 'bebas-kai',
      fontWeight: '200',
      fontSize: 32
    }
  }

  state = { currentUser: null }

  componentDidMount() {
    const { currentUser } = firebase.auth()
    this.setState({ currentUser })
  }

  handleLogOut() {
    firebase
      .auth()
      .signOut()
      .then(() => this.props.navigation.navigate('Auth'))
  }

  render() {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: 'transparent',
          position: 'relative'
        }}
      >
        <Image
          style={{
            width: Layout.window.width,
            height: Layout.window.height,
            resizeMode: 'stretch',
            position: 'absolute',
            top: 0,
            left: 0
          }}
          source={require('../assets/images/Background.jpg')}
        />
        <View style={styles.flexContainer}>
          <Text>
            {this.state.currentUser ? this.state.currentUser._user.email : ''}
          </Text>
          <Button title="logout" onPress={() => this.handleLogOut()} />
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  flexContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
