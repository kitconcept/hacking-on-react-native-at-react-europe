import React from 'react'
import { StyleSheet, View, Text } from 'react-native'
import { Card } from 'antd-mobile'

export class CardDashBoard extends React.Component {
  render () {
    return (
      <View style={styles.container}>
        <Card full>
          <Card.Header
            title='Travis Issues'
            thumb='https://user-images.githubusercontent.com/10349407/40267068-b83cdfda-5b56-11e8-86ab-7a9af06224db.png'
          />
          <Card.Body>
            <Text>Amazing</Text>
          </Card.Body>
        </Card>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%'
  }
})
