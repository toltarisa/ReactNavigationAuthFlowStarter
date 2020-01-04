import {createStackNavigator} from 'react-navigation-stack';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

const AuthNavigation = createStackNavigator(
  {
    Login: {screen: Login},
    SignUp: {screen: SignUp},
  },
  {
    initialRouteName: 'Login',
    headerMode: 'none',
  },
);

export default AuthNavigation;
