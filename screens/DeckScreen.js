import React from 'react'
import {
  ScrollView,
  StyleSheet,
  Text,
  Image,
  FlatList,
  View,
  TouchableOpacity
} from 'react-native'
import Layout from '../constants/Layout'
import Colors from '../constants/Colors'

export default class DeckScreen extends React.Component {
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
    }
  }

  render() {
    const { deck } = this.props.state
    const { removeCard, addToDeck } = this.props
    if (deck) {
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
          <FlatList
            data={Object.values(deck)}
            numColumns={4}
            style={{ padding: 10 }}
            _keyExtractor={(item, index) => index}
            renderItem={({ item }) => {
              return (
                <View
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <View style={{ height: 102, width: 73 }}>
                    <Image
                      style={{ height: 102, width: 73 }}
                      source={{
                        uri: item.url
                      }}
                    />
                    <View style={styles.cardCount}>
                      <Text
                        style={styles.cardCountButton}
                        // onPress={() => removeCard()}
                      >
                        -
                      </Text>
                      <Text style={styles.cardCountText}>{item.count}</Text>
                      <Text
                        style={styles.cardCountButton}
                        onPress={() => addToDeck(item)}
                      >
                        +
                      </Text>
                    </View>
                  </View>
                </View>
              )
            }}
          />
        </View>
      )
    } else {
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
          <Text>No Cards in Deck</Text>
        </View>
      )
    }
  }
}

const styles = StyleSheet.create({
  cardCount: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    height: 20,
    width: 73,
    backgroundColor: 'black',
    opacity: 0.7,
    position: 'absolute',
    right: 0,
    bottom: 20
  },
  cardCountText: {
    width: 73 / 3,
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    borderWidth: 0.5,
    borderWidth: 0.5,
    borderColor: '#fff'
  },
  cardCountButton: {
    width: 73 / 3,
    height: 20,
    color: 'white',
    fontSize: 18,
    textAlign: 'center',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
