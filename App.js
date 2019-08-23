import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {createAppContainer, createSwitchNavigator} from "react-navigation"
import LoadingScreen from "./screens/LoadingScreen.js"
import LoginScreen from "./screens/LoginScreen.js"
import SigninScreen from "./screens/SigninScreen.js"
import SignupScreen from "./screens/SignupScreen.js"
import MainNav from "./navigation/TabNavigator.js"
import firebase from "firebase"
import firebaseConfig from "./config"
firebase.initializeApp(firebaseConfig)





// export default createAppContainer(createBottomTabNavigator(
//   {
//     // App: AppStack
//     Login: AuthStack,
//     Home: HomeStack,
//     Spots: SpotStack,
//     Profile: ProfileStack

//   },
//   {
//     initialRouteName: 'Login',
//   }
// ));




export default class App extends React.Component{
  
  // getPermissionAsync = async () => {
  //   if (Constants.platform.ios) {
  //     const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.CAMERA);
  //     if (status !== 'granted') {
  //       alert('Sorry, we need camera roll permissions to make this work!');
  //     }
  //   }
  // }
  // uploadImage = async(uri) => {
  //   const response = await fetch(uri);
  //   const blob = await response.blob();
  //   var ref = firebase.storage().ref("videos").child("123.mov"); //change name to something dynamic and concat ".mov"
  //   return ref.put(blob, {contentType: 'video/quicktime'});
  // }

  // _pickImage = async () => {
  //   const {spot} = this.props.navigation.getParam("spotId")
  //   let result = await ImagePicker.launchCameraAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.All,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //   });

  //   console.log(result);

  //   if (!result.cancelled) {
  //     this.setState({ image: result.uri });
  //     await this.uploadImage(result.uri);
  //     firebase.storage().ref("videos").child("123.mov").getDownloadURL().then( async function(url) {
  //       console.log(url)
  //      const newVid = {
  //        url: url,
  //        trick: this.state.trick,
  //        user: "5d4b18850058789ec8955c0c", //change to this.state.user or AsyncStorage.user once I get that set up 
  //        spot: "5d53193754609100171ddaf4",
  //      }
  //      await axios.post("https://skate-hub-server.herokuapp.com/videos", newVid)
  //      .then(res => console.log(res.data))
  //      .catch(err => console.log(err))
  //    })
     
  //   }
       
  // };
  render(){
    return ( <AppNavigator
                style={styles.container}
                screenProps={{getPermissionAsync: this.getPermissionAsync, _pickImage: this._pickImage}}
                 /> )
  }
}

const AuthStack = createSwitchNavigator(
  {
    LoadingScreen: LoadingScreen,
    LoginScreen: LoginScreen,
    SigninScreen: SigninScreen,
    SignupScreen: SignupScreen,
    MainNav: MainNav
  },
  {
    initialRouteName: "LoadingScreen"
  }
);

const AppNavigator = createAppContainer(AuthStack)




const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    alignItems: "center",
    justifyContent: "center"
  }
})