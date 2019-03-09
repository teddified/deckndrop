import React, { Component } from 'react'
import {
  View,
  TextInput,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native'
import Colors from '../constants/Colors'

export default class SearchBar extends Component {
  state = {
    searchActive: false,
    searchValue: null
  }

  filter() {
    const cards = this.props.data.state.cards.data
    const match = cards.map((element, index) => {
      const temp = element.name.includes(this.state.searchValue)
      if (temp) return element
    })
    const filtered = Object.keys(match).reduce((acc, key) => {
      const _acc = acc
      if (match[key] !== undefined) _acc[key] = match[key]
      return _acc
    }, {})
    this.props.data.saveFilteredCards(filtered)
  }

  toogleSearch() {
    this.setState(prevState => ({
      searchActive: !prevState.searchActive,
      searchValue: null
    }))
  }

  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Deck n'Drop</Text>
        {this.state.searchActive ? (
          <View style={{ width: '60%', position: 'relative' }}>
            <TextInput
              ref={el => {
                this.searchValue = el
              }}
              onChangeText={searchValue => this.setState({ searchValue })}
              value={this.state.searchValue}
              placeholder="Search ..."
              placeholderTextColor="white"
              onSubmitEditing={() => this.filter()}
              style={styles.searchField}
            />
            <TouchableOpacity
              onPress={() =>
                this.props.data.resetFilter() && this.toogleSearch()
              }
            >
              <Image
                source={require('../assets/images/exit.png')}
                style={styles.exit}
              />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity onPress={() => this.toogleSearch()}>
            <Image
              source={require('../assets/images/magnifier.png')}
              style={{ height: 30, width: 30, marginTop: 20 }}
            />
          </TouchableOpacity>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  searchField: {
    height: 40,
    borderColor: 'gray',
    color: 'white',
    borderRadius: 10,
    borderWidth: 1,
    padding: 5,
    backgroundColor: Colors.lightgrey,
    marginTop: 20
  },
  headerTitle: {
    fontFamily: 'bebas-kai',
    fontWeight: '200',
    fontSize: 32,
    color: 'white',
    marginTop: 10
  },
  header: {
    height: 75,
    backgroundColor: Colors.tabBar,
    padding: 5,
    flexWrap: 'wrap',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row'
  },
  exit: {
    height: 25,
    width: 25,
    position: 'absolute',
    top: -32,
    right: 10
  }
})
