import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { FlatList, Alert } from 'react-native';

const ACCESS_TOKEN = '';


// import { mainContainerStyles } from '../App';


export default class Github extends React.Component {

  constructor() {
    super();
    this.state = {
      issues: []
    };
  }

  componentDidMount() {
    fetch(
      "https://api.github.com/repos/kitconcept/react-europe-2018-playground/issues?access_token" + ACCESS_TOKEN,
      {
        headers: {
          Accept: "application/json"
        }
      }
    )
      .then(response => response.json())
      .then(responseData => {
        this.setState({ issues: responseData });
        // Alert.alert(
        //   "Success",
        //   "Backend call to the Github API was successful",
        //   [
        //     {
        //       text: "Cancel",
        //       onPress: () => console.log("Cancel Pressed"),
        //       style: "cancel"
        //     },
        //     { text: "OK", onPress: () => console.log("OK Pressed") }
        //   ],
        //   { cancelable: false }
        // );
        console.log("Fetch from Github API was successful!");
        console.log(this.state.issues);
      })
      .catch(error => {
        console.log("Fetch from Github API failed:", error);
      });
  }

  render() {
    const githubIssues = this.state.issues.map((issue) =>
      <Text key={issue.id}>{issue.title}</Text>
    );
    return (
      <View style={styles.container}>
        <Text>Github Issues</Text>
        <FlatList
          data={this.state.issues}
          renderItem={({ item }) => <Text>{item.id}: {item.title}</Text>}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 200,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
