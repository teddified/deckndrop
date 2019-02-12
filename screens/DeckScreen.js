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

export default class DeckScreen extends React.Component {
  render() {
    const { deck } = this.props.state
    console.log(this.props.state)
    if (deck) {
      return (
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
                  <Text style={styles.cardCount}>{item.count}</Text>
                </View>
              </View>
            )
          }}
        />
      )
    } else {
      return <Text>No Cards in Deck</Text>
    }
  }
}

const styles = StyleSheet.create({
  cardCount: {
    textAlign: 'center',
    height: 20,
    width: 73,
    fontSize: 18,
    backgroundColor: 'black',
    opacity: 0.7,
    color: 'white',
    position: 'absolute',
    right: 0,
    bottom: 20
  }
})
