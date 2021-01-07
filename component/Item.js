import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, TextInput, Button, Image} from 'react-native';



export default function Item(props) {
  return (
    <View style={{ //ก้อน1
      flex : 1, 
      flexDirection : 'row', 
      paddingHorizontal : 20 ,
      }}>
      <Image 
          source={{uri: props.image}}
          style={{width: 60, height: 60}} 
          />
      <View style={{ //ก้อน2
          flex : 1, 
          flexDirection : 'column', 
          paddingHorizontal : 20 ,
          }}>
          <Text style={{ fontSize : 20 }}>{props.title} </Text>        

          <Text style={{ fontSize : 15 }}>{props.releaseYear}</Text>
      </View>
  </View>

  );
}

