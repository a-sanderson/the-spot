import React from 'react';
import {AsyncStorage, StyleSheet, TextInput, View, TouchableOpacity, Image, Button } from 'react-native';
import * as firebase from "firebase"
import Constants from "expo-constants"
import * as Permissions from 'expo-permissions';
import * as ImagePicker from 'expo-image-picker';
import axios from 'axios';


const options = {
  title: 'Select Image',
  storageOptions: {
    skipBackup: true,
    path: 'images'
  }
};

class DashboardScreen extends React.Component{

  constructor(){
    super()
    this.state = {
      trick: ''
    }
  }

  async componentDidMount() {
    await this.getPermissionAsync();
    // let value 
    // try{
    //     value = await AsyncStorage.getItem('user');
    //   if (value !== null) {
    //   // We have data!!
    //     console.log(value["location"]);
    //     }
    //   }catch(err){
    //       console.log(err)
    //     }
    //  const parsedData= JSON.parse(value)
    //   console.log(parsedData["location"])
    await console.log("you made it")
  }


  render() {
    let { image } = this.state;
console.log("made it here")
    return (
      <View style={styles.container}>
         <TextInput
                value={this.state.skateStyle}
                onChangeText={(trick) => this.setState({ trick })}
                placeholder={'trick or vid name'}
                style={styles.input}
              />
        <Button
          title="take a vid "
          onPress={this._pickImage}
          // onPress={() => console.log(this.props)}
        />
        {/* {image &&
          <Image source={{ uri: image }} style={{ width: 200, height: 200 }} />} */}
         
      </View>
    );
  }

  

  getPermissionAsync = async () => {
    if (Constants.platform.ios) {
      const { status } = await Permissions.askAsync(Permissions.CAMERA_ROLL, Permissions.CAMERA);
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }
  uploadImage = async(uri) => {
    const response = await fetch(uri);
    const blob = await response.blob();
    var ref = firebase.storage().ref("videos").child("123.mov"); //change name to something dynamic and concat ".mov"
    return ref.put(blob, {contentType: 'video/quicktime'});
  }

  _pickImage = async () => {
    // const {spot} = this.props.navigation.getParam("spotId")
    let result = await ImagePicker.launchCameraAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.All,
      allowsEditing: true,
      aspect: [4, 3],
    });

    console.log(result);

    if (!result.cancelled) {
      this.setState({ image: result.uri });
      await this.uploadImage(result.uri);
      firebase.storage().ref("videos").child("123.mov").getDownloadURL().then( async function(url) {
        console.log(url)
       const newVid = {
         url: url,
         trick: this.state.trick,
         user: "5d4b18850058789ec8955c0c", //change to this.state.user or AsyncStorage.user once I get that set up 
         spot: "5d53193754609100171ddaf4",
       }
       await axios.post("https://skate-hub-server.herokuapp.com/videos", newVid)
       .then(res => console.log(res.data))
       .catch(err => console.log(err))
     })
     
    }
       
  };
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
})

  export default DashboardScreen

  
  
  
  
  








  