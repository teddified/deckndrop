import React from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  StatusBar,
  AsyncStorage,
  ImageBackground
} from 'react-native'
import { WebBrowser } from 'expo'
import Card from '../components/Card'
import Layout from '../constants/Layout'
import Colors from '../constants/Colors'

export default class CardScreen extends React.Component {
  static navigationOptions = {
    title: "Deck n'Drop",
    headerTintColor: 'white',
    headerStyle: {
      height: 70,
      backgroundColor: Colors.tabBar
    },
    headerTitleStyle: {
      fontFamily: 'bebas-kai',
      fontWeight: '200',
      fontSize: 32
    },
    headerRight: (
      <Image
        source={require('../assets/images/magnifier.png')}
        style={{ height: 30, width: 30, marginRight: 10 }}
      />
    )
  }

  componentDidMount() {
    this._retrieveData()
  }

  _storeData = async data => {
    try {
      await AsyncStorage.setItem('CARDS', JSON.stringify(data))
    } catch {}
  }

  _retrieveData = async () => {
    try {
      const value = await AsyncStorage.getItem('CARDS')
      if (value !== null) {
        this.props.saveData(JSON.parse(value))
      } else {
        this.getImage()
      }
    } catch {}
  }

  getImage() {
    const url = `https://api.scryfall.com/cards/search?q=format:modern+unique:cards+not:token`
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.props.saveData(data)
        this._storeData(data.data)
      })
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
        <ScrollView style={styles.scroller}>
          <View
            automaticallyAdjustContentInsets={false}
            style={styles.container}
          >
            <Card data={this.props} />
          </View>
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden'
  },
  scroller: {
    flex: 1,
    marginTop: 5,
    marginBottom: 5,
    overflow: 'hidden'
  },
  bodyText: {
    fontSize: 20,
    maxWidth: 250
  }
})
