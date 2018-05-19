import React from 'react'
import { StyleSheet, Text, View, AsyncStorage } from 'react-native'
import MainTabView from './components/MainTabView'
import { Alert } from 'react-native'
import { Button } from 'antd-mobile/lib'
import { CardDashBoard } from './views/IssusDashboard'

export default class App extends React.Component {

  render () {
    return <MainTabView />
  }
}
