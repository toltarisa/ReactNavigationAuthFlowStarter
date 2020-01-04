import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {createBottomTabNavigator} from 'react-navigation-tabs';

import Followers from '../screens/TabScreens/Followers';
import Profile from '../screens/TabScreens/Profile';

const SignoutScreen = () => {};

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default createBottomTabNavigator(
  {
    Followers: {
      screen: Followers,
      navigationOptions: {
        tabBarLabel: 'Home',
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-people" color={tintColor} size={25} />
        ),
      },
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: 'Settings',
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-contact" color={tintColor} size={25} />
        ),
      },
    },
    Signout: {
      screen: SignoutScreen,
      navigationOptions: {
        tabBarLabel: 'Signout',
        tabBarIcon: ({tintColor}) => (
          <Icon name="ios-log-out" color={tintColor} size={20} />
        ),
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: 'red',
      inactiveTintColor: 'grey',
      showIcon: true,
    },
  },
);
