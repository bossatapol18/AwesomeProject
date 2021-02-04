import React, { useState, useEffect } from 'react';
import { View, Text, ActivityIndicator} from 'react-native';
import MainNavigation from './MainNavigation';
import { fb } from './db_config';

export default function App() {
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        setLoading(false);
    });   
    if(loading){
        return (
            <LoadingScreen />
        );
    }else{
        return (               
            <MainNavigation />    
        );
    }    
}
function LoadingScreen() {    
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems : 'center'  }}>
            <Text>Loading</Text>
            <ActivityIndicator size="large" />
        </View>
    );   
}
