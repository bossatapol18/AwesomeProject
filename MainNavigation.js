import { StatusBar } from 'expo-status-bar';
import React, { useState, useEffect, useContext } from 'react';
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
//เชื่อม firebase
import { fb } from './db_config';
import RegisterScreen from './screens/RegisterScreen';
import LoginScreen from './screens/LoginScreen';
import { AuthContext, AuthContextProvider } from "./hooks/AuthContext";
import MapTab from './navigations/MapTab';

const AuthStack = createStackNavigator();

export default function MainNavigation() {
  //const [user, setUser] = useState({}); 
  const [user, setUser] = useContext(AuthContext);   

    useEffect(() => {
        const subscriber = fb.auth().onAuthStateChanged((current_user) => {            
            if(current_user){
                //IF USER SIGN IN
                setUser(current_user);
            }else{
                //ELSE USER SIGN OUT OR NOT LOGIN
                setUser(null);
            }            
            console.log("USER : ",user); 
        });
        return subscriber; // unsubscribe on unmount
    });    
    if(user != null){
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
                 <RootStack.Screen 
                            name="MapTab" 
                            component={MapTab} 
                            options={{  title: 'Location and Map'   }} 
                            />
                   
                
            </RootStack.Navigator>

        </NavigationContainer>
    /* { <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <StatusBar style="auto" />
    </View> } */
  );
}else{
  return (
      <NavigationContainer>
          <AuthStack.Navigator >      
              <AuthStack.Screen 
                  name="LoginScreen" 
                  component={LoginScreen} 
                  options={{  title: 'Login'   }} 
                  />
              <AuthStack.Screen 
                  name="RegisterScreen" 
                  component={RegisterScreen} 
                  options={{  title: 'Register'   }} 
                  />                    
          </AuthStack.Navigator>
      </NavigationContainer>
  );
}      
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