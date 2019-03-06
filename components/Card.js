import React, { Component } from 'react'
import {
  Image,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Modal,
  FlatList,
  ListItem,
  List,
  Button,
  Dimensions
} from 'react-native'
import reducer from '../reducer'
import Layout from '../constants/Layout'

export default class Card extends Component {
  renderFlatList() {
    const { state, changeDetailVis, setActiveCard } = this.props.data
    let numColumns
    if (Layout.window.width >= 768) numColumns = 5
    if (Layout.window.width < 768) numColumns = 2
    return (
      <View style={styles.card}>
        <FlatList
          data={state.cards}
          numColumns={numColumns}
          // _keyExtractor={(item, index) => item.id}
          renderItem={({ item }) => {
            if (item.image_uris && item.image_uris.large) {
              return (
                <View
                  key={item.id}
                  style={{
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <TouchableOpacity
                    onPress={() => changeDetailVis(true) && setActiveCard(item)}
                  >
                    <Image
                      source={{ uri: item.image_uris.large }}
                      style={styles.flatlist}
                    />
                  </TouchableOpacity>
                </View>
              )
            } else {
              return (
                <View
                  key={item.id}
                  stlye={{
                    flex: 1,
                    justifyContent: 'center',
                    alignItems: 'center'
                  }}
                >
                  <Text style={styles.flatlist}>{item.name}</Text>
                </View>
              )
            }
          }}
        />
      </View>
    )
  }

  render() {
    const { state, changeDetailVis, addToDeck } = this.props.data
    return (
      <View>
        {state.cards ? (
          <View style={{ justifyContent: 'center', alignItems: 'center' }}>
            {state.cards ? (
              this.renderFlatList()
            ) : (
              <Text style={styles.loadingText}>Loading...</Text>
            )}
            {state.activeCard ? (
              <Modal
                supportedOrientations={['portrait', 'landscape']}
                animationType={'slide'}
                transparent={false}
                visible={state.detailVisible}
              >
                <Button
                  title="< Back"
                  color="#841584"
                  onPress={() => changeDetailVis(false)}
                />
                <Button
                  title="Add"
                  color="#841584"
                  onPress={() => addToDeck()}
                />
                <Image
                  source={{
                    uri: state.activeCard.image_uris.normal
                  }}
                  style={{
                    width: Dimensions.get('window').width,
                    height: Dimensions.get('window').height,
                    resizeMode: 'contain'
                  }}
                />
              </Modal>
            ) : (
              <Text />
            )}
          </View>
        ) : (
          <Text>Loading...</Text>
        )}
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    height: '100%',
    marginBottom: 5,
    paddingHorizontal: 10
  },
  loadingText: {
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: 50
  },
  flatlist: {
    height: 204,
    width: 146,
    margin: 10,
    borderRadius: 8
  }
})
