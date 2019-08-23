import React, { Component } from 'react';
import {StyleSheet, View, Button, Text, Image} from "react-native"

class LoginScreen extends Component{
  
  
  render(){
  return(

    <View style={styles.container}>
        <Image style={{resizeMode: "cover"}} source={require('../spotDecal.png')} />
        <Image style={{resizeMode: "cover"}} source={require('../skateLogo.png')} />
        <Button title="log in" onPress={() => this.props.navigation.navigate('SigninScreen')}/>
        <Text>Dont Have an Account?</Text>
        <Button title="sign up" onPress={() => this.props.navigation.navigate("SignupScreen")}/>
    </View>

  )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
  }
})

export default LoginScreen