import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import TabBar from '../navigation/TabBar';
import AuthLoadingScreen from '../navigation/AuthLoadingScreen';
import Login from '../screens/Login';

const AppStack = createStackNavigator({TabBar}, {headerMode: 'none'});
const AuthStack = createStackNavigator({Login: Login}, {headerMode: 'none'});
const SwitchNavigator = createSwitchNavigator(
  {
    Starter: AuthLoadingScreen,
    Auth: AuthStack,
    App: AppStack,
  },
  {
    initialRouteName: 'Auth',
  },
);

const AppContainer = createAppContainer(SwitchNavigator);

export default AppContainer;
