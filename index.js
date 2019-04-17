import { Navigation } from 'react-native-navigation'
import registerScreens from './src/navigation/register'
import { setAppRoot } from './src/navigation/navigation'

registerScreens()

Navigation.events().registerAppLaunchedListener(() => {
  setAppRoot()
})
