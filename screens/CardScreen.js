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
  TextInput,
  ImageBackground
} from 'react-native'
import { WebBrowser } from 'expo'
import Card from '../components/Card'
import Layout from '../constants/Layout'
import Colors from '../constants/Colors'
import SearchBar from '../components/SearchBar'

export default class CardScreen extends React.Component {
  static navigationOptions = {
    header: null
  }

  componentDidMount() {
    this._retrieveData()
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
        this._storeData(data)
      })
  }

  _storeData = async data => {
    try {
      await AsyncStorage.setItem('CARDS', JSON.stringify(data))
    } catch {}
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
          style={styles.background}
          source={require('../assets/images/Background.jpg')}
        />
        <SearchBar data={this.props} />
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
  },
  background: {
    width: Layout.window.width,
    height: Layout.window.height,
    resizeMode: 'stretch',
    position: 'absolute',
    top: 0,
    left: 0
  }
})
