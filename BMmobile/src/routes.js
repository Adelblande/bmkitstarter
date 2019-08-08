import { createAppContainer, createStackNavigator } from 'react-navigation';

import Login from './components/login';

export default createAppContainer(
  createStackNavigator({
    Login
  }, {
      defaultNavigationOptions: ({
        header: null
      })
    }
  )
)