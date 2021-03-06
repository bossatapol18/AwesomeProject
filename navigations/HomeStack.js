import * as React from 'react';

import BmiScreen from '../screens/BmiScreen';
import NetworkScreen from '../screens/NetworkScreen';
import HomeScreen from '../screens/HomeScreen';
import UploadFileScreen from '../screens/UploadFileScreen';

import { createStackNavigator } from '@react-navigation/stack';


const Stack = createStackNavigator();

export default function HomeStack() {
    return (
        <Stack.Navigator initialRouteName="HomeScreen">
            <Stack.Screen 
                name="HomeScreen" 
                component={HomeScreen} 
                options={{  title: 'Home Screen Title'  }} 
                />
            <Stack.Screen 
                name="BmiScreen" 
                component={BmiScreen} 
                options={{  title: 'Bmi Screen Title'  }} 
                />
            <Stack.Screen 
                name="NetworkScreen" 
                component={NetworkScreen} 
                options={{ title: 'Network Screen Title' }} 
                />
              <Stack.Screen 
                name="UploadFileScreen" 
                component={UploadFileScreen} 
                options={{ title: 'Upload File' }} 
                />     
            
        </Stack.Navigator>
    );

}
