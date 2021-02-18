import React, { useState, useEffect, useContext} from 'react';
import { View, Dimensions, YellowBox } from 'react-native';
//import * as Location from 'expo-location';
import MapView, { Marker } from 'react-native-maps';
import { fb } from '../db_config';
import { AuthContext, AuthContextProvider } from "../hooks/AuthContext";

export default function MapUserScreen({ navigation }) {  
    const [markers, setMarkers] = useState([]);  
    const [location, setLocation] = useState(null);
    const [errorMsg, setErrorMsg] = useState(null);    
    useEffect(() => {  
        readDriverLocationFirebase();
        
    },[]); 

    const [user, setUser] = useContext(AuthContext);       
    const readDriverLocationFirebase = async (new_data) => {
        console.log("Read !!!");
        fb.firestore().collection("driver_locations")
        //.where("user_id", "==", user.uid)
        // .onSnapshot((querySnapshot) 
        .get().then((querySnapshot) => {
            const driver_locations = querySnapshot.docs.map(doc => doc.data());
            
            //WRITE TO ASYNC STORAGE
            //readDriverLocationFirebase(driver_locations);

            //SET STATE
            setMarkers(driver_locations); 
            console.log("read",driver_locations);
            
            /* .then(function() {
                console.log("Firestore successfully written!");
            })
            .catch(function(error) {
                console.error("Error writing document: ", error); */
            });
    }
    
    return (
        <View style={{ flex: 1 }}>
                  <View style={{ flex: 1 }}>
                {(() => {
                    //IF MARKERS MORE THAN ZERO
                    if(markers.length > 0){
                        return (
                        <MapView 
                            style={{
                                width: Dimensions.get('window').width,
                                height: Dimensions.get('window').height,
                            }}                     
                            initialRegion={{
                                latitude: markers[0].coords.latitude,
                                longitude: markers[0].coords.longitude,
                                latitudeDelta: 0.005,
                                longitudeDelta: 0.005,
                            }}                            
                            >                            
                            {markers.map(marker => (
                                <Marker
                                coordinate={marker.coords}
                                title={marker.user_id}
                                key={marker.user_id}
                                //description={marker.description}
                                />
                            ))}
                        </MapView>
                        );
                    }
                })()}
            </View>
        </View>
    );
}
