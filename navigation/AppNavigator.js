import React from 'react'
import { createSwitchNavigator, createStackNavigator } from 'react-navigation'
import LoginScreen from '../screens/LoginScreen'
import LoadingScreen from '../screens/LoadingScreen'
import SignUpScreen from '../screens/SignUpScreen'

import MainTabNavigator from './MainTabNavigator'

const AuthStack = createStackNavigator({
  LoadingScreen,
  LoginScreen,
  SignUpScreen
})

export default createSwitchNavigator(
  {
    // You could add another route here for authentication.
    // Read more at https://reactnavigation.org/docs/en/auth-flow.html
    Main: MainTabNavigator,
    Auth: AuthStack
  },
  {
    initialRouteName: 'Auth'
  }
)
