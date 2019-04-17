import App from '../../App'
import DetailsScreen from '../../DetailsScreen'
import AboutScreen from '../../AboutScreen'

import { Navigation } from 'react-native-navigation'

export default function registerScreens() {
  Navigation.registerComponent(`navigation.playground.App`, () => App)
  Navigation.registerComponent(
    `navigation.playground.DetailsScreen`,
    () => DetailsScreen
  )
  Navigation.registerComponent(
    `navigation.playground.AboutScreen`,
    () => AboutScreen
  )
}
