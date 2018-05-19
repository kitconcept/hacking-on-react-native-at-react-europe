import React from 'react'
import { StyleSheet, View, Text, AsyncStorage } from 'react-native'
import { Card } from 'antd-mobile/lib'


class SimpleCard extends React.Component {
  constructor() {
    super();
    this.state = {
      issues: []
    };
  }

  componentDidMount() {

  }

  render () {
    const { title, content } = this.props
    return (
      <View style={styles.elm}>
        <Card full>
          <Card.Header
            title={title}
            thumb='https://user-images.githubusercontent.com/10349407/40267068-b83cdfda-5b56-11e8-86ab-7a9af06224db.png'
          />
          <Card.Body>
            <Text>{content}</Text>
          </Card.Body>
        </Card>
      </View>
    )
  }
}

export class CardDashBoard extends React.Component {
  render () {
    console.log(JSON.stringify(this.props.issues, 0, 3))
    return (
      <View style={styles.container}>
        <Text> Les issues </Text>
        {
          this.props.issues.map(elm => {
            return <SimpleCard key={elm.id} title={elm.name} />
          })
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    marginTop: '2%'
  },
  elm: {
    marginStart: '10%'
  }
})
