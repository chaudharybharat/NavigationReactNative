

import React, {Component} from 'react';
import {Button} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';

 export class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Welcome',
  header: null
  };
  render() {
    const {navigate} = this.props.navigation;
    return (
      <Button
        title="Go to Jane's profile"
      //  onPress={() => navigate('Login', {name: 'Jane'})}
           onPress={() => navigate('Login')}
          // onPress={() => this.props.navigation.navigate('Login')}
      />
    );
  }
}
