import React, { Component } from 'react';
import {withUser} from "../context/UserProvider.js"
import { AsyncStorage,  Button, TextInput, View, StyleSheet, Text } from 'react-native';
import axios from "axios"

class SignupScreen extends Component {
    constructor(){
        super()
        this.state = {
            user: {},
            token: "",
            username: '',
            password: '',
            skateStyle: '',
            location: ''
        }
    }
    componentDidUpdate(){
        if(this.state.token){
          this.props.navigation.navigate('ProfileScreen')
        }
      }
      
       handleSignupSubmit = e => {
        const creds = {
            username: this.state.username,
            password: this.state.password,
            skateStyle: this.state.skateStyle,
            location: this.state.location
        }
        console.log("worked")
      
        this.signup(creds)
      }
      signup = credentials => {
        axios.post("https://skate-hub-server.herokuapp.com/auth/signup", credentials)
        .then(res => {
            const { user, token } = res.data
            this.setState({ user, token})
            AsyncStorage.setItem('user', JSON.stringify(user))
            
        })
        .catch(err => console.log(err))
      }
      
        render() {
          return (
            <View style={styles.container}>
              <Text style={styles.text}>Skate Hub</Text>
              <TextInput
                value={this.state.username}
                onChangeText={(username) => this.setState({ username })}
                placeholder={'Username'}
                style={styles.input}
              />
              <TextInput
                value={this.state.password}
                onChangeText={(password) => this.setState({ password })}
                placeholder={'Password'}
                secureTextEntry={true}
                style={styles.input}
              />
              <TextInput
                value={this.state.skateStyle}
                onChangeText={(skateStyle) => this.setState({ skateStyle })}
                placeholder={'skateStyle'}
                style={styles.input}
              />
              <TextInput
                value={this.state.location}
                onChangeText={(location) => this.setState({ location })}
                placeholder={'location'}
                style={styles.input}
              />
              
              <Button
                title={'sign up'}
                style={styles.button}
                onPress={() => this.handleSignupSubmit()}
              />
            </View>
          );
        }
      }
      
      const styles = StyleSheet.create({
        container: {
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#ecf0f1',
        },
        input: {
          width: 200,
          height: 44,
          padding: 10,
          borderWidth: 1,
          borderColor: 'black',
          marginBottom: 10,
          borderRadius: 10
        },
        button: {
            color: "black"
        },
        text:{
            marginBottom: 60,
            fontSize: 40,
            padding: 10
      
        }
      });
      
      export default withUser(SignupScreen)