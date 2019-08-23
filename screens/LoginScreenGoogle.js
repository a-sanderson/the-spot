import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import * as GoogleSignIn from "expo-google-sign-in";




class LoginScreen extends React.Component{

  state = {
    accessToken:'',
    user: {}
  }

  componentDidMount () {
    this.initializeGoogle()
  }

  initializeGoogle = async () => {
    try {
      await GoogleSignIn.initAsync({ clientId: '808416958042-v7j84pn371mj83007nbfp7394t3rjqto.apps.googleusercontent.com 	  ' });
    } catch ({ message }) {
      alert('GoogleSignIn.initAsync(): ' + message);
    }
  }


  signInAsync = async () => {
    try {
      await GoogleSignIn.askForPlayServicesAsync();
      const { type, user } = await GoogleSignIn.signInAsync();
      if (type === 'success') {
        // ...
        this.setState({user: user})
        console.log("fuck ya")
      }
    } catch ({ message }) {
      alert('login: Error:' + message);
    }
  };

    render(){
        return(
          <View style={styles.container}>
            <Text>{this.state.testText}</Text>
            <Button title="Sign in with Google" onPress={() => this.signInAsync()} />
          </View>
        )
      }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      alignItems: "center",
      justifyContent: "center"
    }
  })

  export default LoginScreen