import React, { Component } from 'react'
import { Text, View, TouchableOpacity } from 'react-native'
import { Navigation } from 'react-native-navigation'

export default class AboutScreen extends Component {
  render() {
    console.warn(this.props)
    return (
      <View>
        <Text>About</Text>
        <TouchableOpacity
          onPress={() => Navigation.pop(this.props.componentId)}
        >
          <Text>GO BACK</Text>
        </TouchableOpacity>
      </View>
    )
  }
}
