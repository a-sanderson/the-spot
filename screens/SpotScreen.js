import React from 'react';
import MapView, {PROVIDER_GOOGLE, Marker, Callout} from 'react-native-maps';
import CalloutCard from "../components/CalloutCard.js"
import {AsyncStorage} from "react-native"
import axios from 'axios';



let mapStyle = [
    {
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#242f3e"
        }
      ]
    },
    {
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#746855"
        }
      ]
    },
    {
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#242f3e"
        }
      ]
    },
    {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#263c3f"
        }
      ]
    },
    {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#6b9a76"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#38414e"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#212a37"
        }
      ]
    },
    {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#9ca5b3"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#746855"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "geometry.stroke",
      "stylers": [
        {
          "color": "#1f2835"
        }
      ]
    },
    {
      "featureType": "road.highway",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#f3d19c"
        }
      ]
    },
    {
      "featureType": "transit",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#2f3948"
        }
      ]
    },
    {
      "featureType": "transit.station",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#d59563"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [
        {
          "color": "#17263c"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [
        {
          "color": "#515c6d"
        }
      ]
    },
    {
      "featureType": "water",
      "elementType": "labels.text.stroke",
      "stylers": [
        {
          "color": "#17263c"
        }
      ]
    }
  ]

export default class SpotScreen extends React.Component {

    constructor(){
        super()
        this.state = {
            spots: []
        }
    }

    async componentDidMount () {
      await this.getSpots()
      console.log(this.state.spots)
    }

   getSpots = async () => {
      await axios.get('https://skate-hub-server.herokuapp.com/spots')
      .then(res=> this.setState({spots: res.data}) )
      .catch(err => console.log(err))
    }
   
    
    
  render() {
    return (
      <MapView 
      onPress={e => console.log(e.nativeEvent.coordinate)}
      provider={PROVIDER_GOOGLE}
      customMapStyle = {mapStyle}
      style={{flex: 1}} >
        {this.state.spots.map(spot => {
          return(
            <Marker onPress={e => this.setState({coordinate: e.nativeEvent.coordinate})} 
                    key={spot._id}
                    image={require('../skateboard.png')} 
                    title={"hollywood 12 set"}  
                    coordinate={{latitude: 35.0992, longitude: -83}}
                    identifier={spot._id} 
                    onPress={()=> this.props.navigation.navigate("SpotResult", {spotId: spot._id})}>
          
            {/* <Callout>
                <CalloutCard navigation={this.props.navigation} spotId={spot._id} />
            </Callout> */}
          </Marker>
          )
        })}
        


      </MapView>
    );
  }
}

// {latitude: 35.0992, longitude: -83}