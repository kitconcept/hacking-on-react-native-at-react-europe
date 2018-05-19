import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Alert } from 'react-native'

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
        console.log(self.state.issues)
      })
      .catch(error => {
        console.log("Fetch from Github API failed:", error);
      });
  }

  render() {
    const githubIssues = this.state.issues.map((issue) =>
      <Text key={issue.id}>{issue.name}</Text>
    );
    return (
      <View style={styles.container}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text>Changes you make will automatically reload.</Text>
        <Text>Shake your phone to open the developer menu.</Text>
        <Text>
          {githubIssues}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
