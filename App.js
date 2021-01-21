import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './screens/Welcome'; //เพิ่มเข้ามา
import Item from './component/Item';
import NetworkScreen from './screens/NetworkScreen';
//เรื่องStack+Navigation นำทางไปหน้านู้นหน้านี้
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './navigations/HomeStack';
import BottomTab from './navigations/BottomTab';

import SecondBottomTab from './navigations/SecondBottomTab';
import { createStackNavigator } from '@react-navigation/stack';
//CRUD
import TodoTab from './navigations/TodoTab';
const RootStack = createStackNavigator();



export default function App() {
  return (
    <NavigationContainer>
             {/* <HomeStack />  */}
             {/* <BottomTab />  */}
             <RootStack.Navigator initialRouteName="BottomTab">
                <RootStack.Screen 
                    name="BottomTab" 
                    component={BottomTab} 
                    options={{  title: 'Main' , headerShown: false   }} 
                    />

                <RootStack.Screen 
                    name="SecondBottomTab" 
                    component={SecondBottomTab} 
                    options={{  title: 'Second Tab'   }} 
                    />    

                <RootStack.Screen 
                    name="TodoTab" 
                    component={TodoTab} 
                    options={{  title: 'Todo Tab'   }} 
                    />                            
                
            </RootStack.Navigator>

        </NavigationContainer>
    /* { <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View> } */
  );
}

/* const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
}); */

// Json ? อาเรย์ที่อยู่ในรูปแบบของสตริง