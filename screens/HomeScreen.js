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
  AsyncStorage
} from 'react-native'
import { WebBrowser } from 'expo'
import Card from '../components/Card'

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    header: null
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
      <ScrollView style={styles.scroller}>
        <View automaticallyAdjustContentInsets={false} style={styles.container}>
          <Card data={this.props} />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    overflow: 'hidden'
  },
  scroller: {
    flex: 1,
    marginTop: 30,
    overflow: 'hidden'
  },
  bodyText: {
    fontSize: 20,
    maxWidth: 250
  }
})
