import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { pushAboutScreen } from './src/navigation/navigation'

export default class DetailsScreen extends Component {
  render() {
    console.warn(this.props)
    return (
      <View>
        <Text>Details</Text>
        <TouchableOpacity
          onPress={() => pushAboutScreen(this.props.componentId)}
        >
          <Text>About Screen</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
