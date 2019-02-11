import React from 'react'
import { ScrollView, StyleSheet, Text, Image, FlatList } from 'react-native'

export default class DeckScreen extends React.Component {
  // static navigationOptions = {
  //   title: 'Links'
  // }

  render() {
    const { deck } = this.props.state
    console.log(this.props.state)
    return (
      <ScrollView>
        {Object.values(this.props.state.deck).map((element, index) => (
          <Text>{element.count}</Text>
          // <Image key={index} source={{ uri: element.url }} />
        ))}
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({})
