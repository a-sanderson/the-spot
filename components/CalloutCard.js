import React, {useState, useEffect} from "react"
import axios from "axios"
import {Modal, View, StyleSheet, Text, Button } from "react-native"
import {withNavigation} from "react-navigation"

const CalloutCard = props => {
    useEffect(() => getVideos(), []);
    const [videos, setVideos] = useState([])


getVideos = () => {
    const {spotId} = props
    axios.get(`https://skate-hub-server.herokuapp.com/videos/${spotId}`).then(res=>setVideos(res.data) ).catch(err => console.log(err))
}
    return (

        <Modal>
            <View style={styles.container}> 
                {/* <Text>HollyWood 12 set </Text>
                //View as a horizontal flex
                //avatar (props.source) text (props.username) owns the spot ...touchable component(see the clip ) */}
                <Button title={"console videos"} onPress={()=> console.log(props.navigation.navigate)}></Button>
                <Button title={"navigate to dash"} onPress={() => props.navigation.navigate("HomeStack", {spotId: props.spotId}, NavigationActions.navigate({ routeName: 'DashboardScreen' }) )}></Button>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create ({
    container: {
        height: 200,
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#ecf0f1',
    }
})

export default withNavigation(CalloutCard)