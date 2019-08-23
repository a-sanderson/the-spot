import React, {useState, useEffect} from "react"
import axios from "axios"
import {View, ScrollView,  StyleSheet, Text, Button, Dimensions, Image, TouchableHighlight } from "react-native"
import { StackActions, NavigationActions } from 'react-navigation';
import { Video } from 'expo-av';

const resetAction = StackActions.reset({
    index: 0,
    actions: [NavigationActions.navigate({ routeName: 'DashboardScreen' })],
  });


  

const SpotResult = props => {
    useEffect(() => getVideos(), []);
    const [videos, setVideos] = useState([])

const spotId = props.navigation.getParam("spotId", "noSpot")

 updateHammers = () => {
    axios.put(`https://skate-hub-server.herokuapp.com/videos/${spotId}`).then(res=>console.log(res.data) ).catch(err => console.log(err))
    console.log("hammers baby")
}

getVideos = () => {
    
    axios.get(`https://skate-hub-server.herokuapp.com/videos/${spotId}`).then(res=>setVideos(res.data) ).catch(err => console.log(err))
}
const mappedVideos = videos.map(video=> {
    return( 
            <View key={video._id} style={{marginBottom: 35, width: screenWidth}}>
                <Video
                useNativeControls={true}
                
                source={{uri: video.url}}
                rate={1.0}
                volume={1.0}
                isMuted={false}
                resizeMode="cover"
                shouldPlay={false}
                isLooping= {false}
                style={{ width: 350, height: 300, marginBottom: 10 }}/>
                <View style={styles.trickFlex}>
                    <Text>{video.trick} posted by User</Text>
                </View>
                <View style={styles.trickFlex}>
                   <TouchableHighlight onPress={() => updateHammers()}>
                        <Image style={{resizeMode: "cover", height: 40, width: 40}} source={require("../hammer.jpeg")}></Image>
                    </TouchableHighlight>  
                   <Text style={styles.text}>Declared a hammer by {video.votes} others</Text>
                </View>
            </View>
    )
})

let screenWidth = Dimensions.get("window").width;


    return (
            
        
            <ScrollView 
                contentContainerStyle={styles.container}
                keyboardDismissMode="on-drag
                "> 
                <Image style={{resizeMode: "cover", height: 125, width: 290}} source={require("../spotDecal.png")}></Image>
                <Button title={"console videos"} onPress={()=> console.log(videos)}></Button>
                <Button title={"add a video"} onPress={() => props.navigation.dispatch(resetAction)}></Button>
                {mappedVideos}
            </ScrollView>
    
    )
}

const styles = StyleSheet.create ({
    container: {
        height: 5000,
        // flex: 1,
        alignItems: 'center',
        // justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    },
    trickFlex:{
        display: "flex",
        flexDirection: "row",
        justifyContent:"space-evenly",
        alignItems: "center"
    }
})

export default SpotResult