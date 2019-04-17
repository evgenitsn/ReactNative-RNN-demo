import { Navigation } from 'react-native-navigation'

export function setAppRoot() {
  Navigation.setRoot({
    root: {
      bottomTabs: {
        children: [
          {
            stack: {
              children: [
                {
                  component: {
                    name: 'navigation.playground.App',
                    passProps: {
                      text: 'This is tab 1'
                    }
                  }
                }
              ],
              options: {
                bottomTab: {
                  text: 'Tab 1',
                  icon: require('../../home.png'),
                  testID: 'FIRST_TAB_BAR_BUTTON'
                }
              }
            }
          }
        ]
      }
    }
  })
}

export function pushDetailsScreen(componentId) {
  Navigation.push(componentId, {
    component: {
      name: 'navigation.playground.DetailsScreen',
      passProps: {
        text: 'Pushed screen'
      },
      options: {
        topBar: {
          title: {
            text: 'Pushed screen title'
          }
        }
      }
    }
  })
}

export function pushAboutScreen(componentId) {
  Navigation.push(componentId, {
    component: {
      name: 'navigation.playground.AboutScreen',
      passProps: {
        text: 'Pushed screen'
      },
      options: {
        topBar: {
          title: {
            text: 'About Screen'
          }
        }
      }
    }
  })
}
