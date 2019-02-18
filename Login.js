/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 * @lint-ignore-every XPLATJSCOPYRIGHT1
 */

import React, {Component} from 'react';
import {Keyboard,Platform, StyleSheet, Text,TouchableOpacity, TextInput, View} from 'react-native';
import {createStackNavigator, createAppContainer} from 'react-navigation';
import {HomeScreen} from './HomeScreen';
import {App} from './App';

type Props = {};
export  class Login extends Component<Props> {
  constructor(props) {
         super(props);
        const { navigate } = this.props.navigation;
       }

       static navigationOptions = {
       header: null
       };

  state = {
     email: '',
     password: ''
  }
  handleEmail = (text) => {
     this.setState({ email: text })
  }
  handlePassword = (text) => {
     this.setState({ password: text })
  }


  login = () => {

  var email=this.state.email;
  var pass=this.state.password;
   if(email==""){
        alert('Please enter email')
   }else if(pass==""){
           alert('Please enter password')
   }else{
      alert('successfully Login')
   }
this.props.navigation.navigate('HomeScreen')

    // Hide that keyboard!
Keyboard.dismiss()
  }

  render() {
      // const {navigate} = this.props.navigation;
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>Login sreen</Text>
        <TextInput style = {styles.input}
                      underlineColorAndroid = "transparent"
                      placeholder = "Email"
                      placeholderTextColor = "#9a73ef"
                      autoCapitalize = "none"
                      onChangeText = {this.handleEmail}
                       onEndEditing={this.clearFocus}/>

                   <TextInput style = {styles.input}
                      underlineColorAndroid = "transparent"
                      placeholder = "Enter Password"
                      placeholderTextColor = "#9a73ef"
                      autoCapitalize = "none"
                       secureTextEntry={true}
                      onChangeText = {this.handlePassword}
                       onEndEditing={this.clearFocus}/>

                   <TouchableOpacity
                      style = {styles.submitButton}
                      onPress = {
                         () => this.login()
                      }>
                      <Text style = {styles.submitButtonText}> Submit </Text>
                   </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ffffff',
  },
  welcome: {

    fontSize:20,
    marginTop:30,
    color:'red',
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
  input: {
     margin: 15,
     height: 40,
       width: 200,
     borderColor: '#7a42f4',
     borderWidth: 1
  },
  submitButton: {
     backgroundColor: '#7a42f4',
     padding: 10,
     margin: 15,
     height: 40,
  },
  submitButtonText:{
     color: 'white'
  }
});
