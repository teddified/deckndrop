import React from 'react'
import { Platform } from 'react-native'
import {
  createStackNavigator,
  createBottomTabNavigator
} from 'react-navigation'

import TabBarIcon from '../components/TabBarIcon'
import HomeScreenContainer from '../container/HomeScreenContainer'
import DeckScreenContainer from '../container/DeckScreenContainer'
import SettingsScreen from '../screens/SettingsScreen'
import Colors from '../constants/Colors'

const HomeStack = createStackNavigator({
  Home: HomeScreenContainer
})

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarOptions: {
    style: {
      backgroundColor: Colors.tabBar
    }
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-information-circle${focused ? '' : '-outline'}`
          : 'md-information-circle'
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
    style: {
      backgroundColor: Colors.tabBar
    }
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-link' : 'md-link'}
    />
  )
}

const SettingsStack = createStackNavigator({
  Settings: SettingsScreen
})

SettingsStack.navigationOptions = {
  tabBarLabel: 'Settings',
  tabBarOptions: {
    style: {
      backgroundColor: Colors.tabBar
    }
  },
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? 'ios-options' : 'md-options'}
    />
  )
}

export default createBottomTabNavigator({
  HomeStack,
  DeckStack,
  SettingsStack
})
