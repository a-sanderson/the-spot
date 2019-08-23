import React, {Component} from 'react';
import { StyleSheet, Text, View, ActivityIndicator } from 'react-native';
import firebase from "firebase"

class LoadingScreen extends Component{
   constructor(props){
       super(props)
   }
   
   componentDidMount(){
       this.checkIfLoggedIn();
   }
   
   
   
    checkIfLoggedIn = () => {
        firebase.auth().onAuthStateChanged(user =>
        {
            if(user){
                this.props.navigation.navigate('DashboardScreen')
            }else{
                this.props.navigation.navigate('LoginScreen')
            }
        })
    }
    render(){
        return(
          <View style={styles.container}>
            <ActivityIndicator size="large" />
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

  export default LoadingScreen