import React, { useState, useEffect } from 'react';
import { View , Text,Dimensions } from 'react-native';
import * as Location from 'expo-location';
import MapView from 'react-native-maps'; 

export default function MapDriverScreen({ navigation }) {
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);    
    useEffect(() => {        
        (async () => {
            //GET PERMISSION WITH SOME SECONDS DELAY
            let { status } = await Location.requestPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('Permission to access location was denied');
            }            
            //GET CURRENT LOCATION WITH SOME SECONDS DELAY
            let current_location = await Location.getCurrentPositionAsync({});
            //IF CURRENT LOCATION DETECTED
            if(current_location){
                console.log("Location : ", current_location);              
                //SET STATE
                setLocation(current_location);   
            }
        })();    
    },[]);

    return (
        <View style={{ flex: 1 , flexDirection : 'column' }}>
            {/* <Text>{ JSON.stringify(location) }</Text> */} 
            <View style={{flexDirection : 'row', height : 70 , backgroundColor : "#50E3C2"}}>
                <View style={{ flex : 1, flexDirection : 'column' }}>
                    <Text style={{ textAlign : 'center'}}>Lat/Lon</Text>
                    <Text style={{ textAlign : 'center'}}>{ location ? location.coords.latitude : "-" }</Text>                      
                    <Text style={{ textAlign : 'center'}}>{ location ? location.coords.longitude : "-" }</Text> 
                    <View style={{ flex: 1 }}>
                {(() => {
                    //IF LOCATION NOT NULL, THEN DISPLAY MAP
                    if(location){
                        return (
                        <MapView 
                            style={{
                                width: Dimensions.get('window').width,
                                height: Dimensions.get('window').height,
                            }}   
                            initialRegion={{
                                latitude: location.coords.latitude,
                                longitude: location.coords.longitude,
                                latitudeDelta: 0.005,
                                longitudeDelta: 0.005,
                            }}
                            showsUserLocation={true}
                            onUserLocationChange={(event)=>{
                                console.log("LOCATION : " , event);
                                if(event.nativeEvent.coordinate){
                                    let new_location = {
                                        coords : event.nativeEvent.coordinate,
                                        mocked : event.nativeEvent.coordinate.isFromMockProvider,
                                        timestamp : event.nativeEvent.coordinate.timestamp,
                                    };
                                    setLocation(new_location);
                                }
                            }}                                                               
                            >                            
                        </MapView>
                        );
                    }
                })()}
            </View>
                   
                </View>
                
                <View style={{ flex : 1, flexDirection : 'column' }}>
                    <Text style={{ textAlign : 'center'}}>Speed / Accuracy</Text>                    
                    <Text style={{ textAlign : 'center'}}>
                        { location ? Number(location.coords.speed * 3.6).toFixed(0) : "-" } km/h
                    </Text> 
                    <Text style={{ textAlign : 'center'}}> 
                        { location ? Number(location.coords.accuracy).toFixed(0) : "-" } m.
                    </Text> 
                </View> 
                
            </View>   
        </View>
    );
}
