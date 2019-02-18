/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Login} from './Login';
import {HomeScreen} from './HomeScreen';
import {createStackNavigator, createAppContainer} from 'react-navigation';


const MainNavigator = createStackNavigator({
  Login: {screen: Login},
  HomeScreen: {screen: HomeScreen},
});

const App = createAppContainer(MainNavigator);

export default App;
