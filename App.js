import React from 'react';
import { StyleSheet, Text, View, AsyncStorage } from 'react-native';
import MainTabView from './components/MainTabView';
import { Alert } from 'react-native'
import { Button } from 'antd-mobile/lib';
import { CardDashBoard } from './views/IssusDashboard';



export default class App extends React.Component {

  constructor() {
    super();
    this.state = {
      issues: []
    };
  }

  componentDidMount() {
    fetch("https://api.github.com/users/tisto/repos", {
      headers: {
        Accept: "application/json"
      }
    })
      .then(response => response.json())
      .then(responseData => {
        return AsyncStorage.setItem('issues', JSON.stringify(responseData)).then(v => {
          this.setState({ issues: responseData });
          Alert.alert(
            "Success",
            "Backend call to the Github API was successful",
            [
              {
                text: "Cancel",
                onPress: () => console.log("Cancel Pressed"),
                style: "cancel"
              },
              { text: "OK", onPress: () => console.log("OK Pressed") }
            ],
            { cancelable: false }
          );
          console.log("Fetch from Github API was successful!");
        })
      })
      .catch(error => {
        console.log("Fetch from Github API failed:", error);
      });
  }

  render() {
    return <MainTabView />;
  }
}
