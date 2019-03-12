import React from 'react'
import { Platform } from 'react-native'
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import CardScreenContainer from '../container/CardScreenContainer'
import DeckScreenContainer from '../container/DeckScreenContainer'
import StatsScreen from '../screens/StatsScreen'
import Colors from '../constants/Colors'
import CustomIcon from './CustomIcon'

const CardStack = createStackNavigator({
  Card: CardScreenContainer
})

CardStack.navigationOptions = {
  tabBarLabel: 'Card',
  tabBarOptions: {
    activeTintColor: 'white',
    style: {
      height: 60,
      backgroundColor: Colors.darkgrey
    }
  },
  tabBarIcon: ({ focused }) => (
    <CustomIcon
      focused={focused}
      img={
        focused
          ? require('../assets/images/cards_white.png')
          : require('../assets/images/cards_grey.png')
      }
    />
  )
}

const DeckStack = createStackNavigator({
  Deck: DeckScreenContainer
})

DeckStack.navigationOptions = {
  tabBarLabel: 'Deck',
  tabBarOptions: {
    activeTintColor: 'white',
    style: {
      height: 60,
      backgroundColor: Colors.darkgrey
    }
  },
  tabBarIcon: ({ focused }) => (
    <CustomIcon
      focused={focused}
      img={
        focused
          ? require('../assets/images/deck_white.png')
          : require('../assets/images/deck_grey.png')
      }
    />
  )
}

const StatsStack = createStackNavigator({
  Stats: StatsScreen
})

StatsStack.navigationOptions = {
  tabBarLabel: 'Statistics',
  tabBarOptions: {
    activeTintColor: 'white',
    style: {
      height: 60,
      backgroundColor: Colors.darkgrey
    }
  },
  tabBarIcon: ({ focused }) => (
    <CustomIcon
      focused={focused}
      img={
        focused
          ? require('../assets/images/stats_white.png')
          : require('../assets/images/stats_grey.png')
      }
    />
  )
}

export default createBottomTabNavigator({
  CardStack,
  DeckStack,
  StatsStack
})
