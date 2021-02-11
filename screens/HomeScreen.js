import React , { useState, useEffect, useContext } from 'react';
import { View, Text, Button, TouchableOpacity } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { fb } from '../db_config';
import { useRoute } from '@react-navigation/native';
import { AuthContext, AuthContextProvider } from "../hooks/AuthContext";

export default function HomeScreen({ navigation }) {
    const onLogout = () => {
        fb.auth().signOut().then(function() {
          console.log("Logout successfully");
          // Sign-out successful.
        }).catch(function(error) {
          // An error happened.
          console.log(error);
        });      
    };  
    const [user, setUser] = useContext(AuthContext);

    if(user !=null){
    return (
        <View style={{ flex: 1 }}>
            <View style={{ flex : 1 , alignItems: 'center', justifyContent: 'center' }}>
                <Text>Welcome, {user.email}</Text>
                <Ionicons name="md-home" size={50} color="#848484" />
                <Text>Home Screen</Text>
                <TouchableOpacity  onPress={() => navigation.navigate('BmiScreen') } >                    
                    <Text style={{ padding : 30 }}>Go to BMI Screen</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => navigation.navigate('SecondBottomTab') } >                    
                    <Text style={{ padding : 5}}>Go to Second BottomTab</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => navigation.navigate('TodoTab') } >                    
                    <Text style={{ padding : 10 }}>To-do List</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={() => navigation.navigate('MapTab') } >                    
                        <Text style={{ padding : 10 }}>Location and Map</Text>
                </TouchableOpacity>
                <TouchableOpacity  onPress={onLogout} >                    
                    <Text style={{ padding : 10 }}>Log out</Text>
                </TouchableOpacity> 

            </View>   
            <View>                
                <Button  
                    onPress={() => navigation.navigate('BmiScreen')}
                    title="Next"
                    color=""
                    />
            </View>                       
        </View>
    );}else{
        return (
            <View style={{ flex: 1 }}>
                <View style={{ flex : 1 , alignItems: 'center', justifyContent: 'center' }}>
                     <Text>กรุณาเข้าสู่ระบบ</Text>
                    <Ionicons name="md-home" size={50} color="#848484" />
                    <Text>Home Screen</Text>
                    <TouchableOpacity  onPress={() => navigation.navigate('BmiScreen') } >                    
                        <Text style={{ padding : 30 }}>Go to BMI Screen</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => navigation.navigate('SecondBottomTab') } >                    
                        <Text style={{ padding : 5}}>Go to Second BottomTab</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => navigation.navigate('TodoTab') } >                    
                        <Text style={{ padding : 10 }}>To-do List</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={() => navigation.navigate('MapTab') } >                    
                        <Text style={{ padding : 10 }}>Location and Map</Text>
                    </TouchableOpacity>
                    <TouchableOpacity  onPress={onLogout} >                    
                        <Text style={{ padding : 10 }}>Log out</Text>
                    </TouchableOpacity> 
    
                </View>   
                <View>                
                    <Button  
                        onPress={() => navigation.navigate('BmiScreen')}
                        title="Next"
                        color=""
                        />
                </View>                       
            </View>
        );
    }
}
