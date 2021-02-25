import React from 'react';
import { View, TextInput, TouchableOpacity,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

export default function TodoItem(props) {    

    return (     
        <View
            style={{
                flexDirection: 'row',
                alignItems: 'center',
                paddingHorizontal : 25,
                paddingVertical : 10,
            }}>
            <TouchableOpacity 
                onPress={()=>props.onCheck(props.item._id) }
                style={{  flex : 2 }}>
                <Ionicons 
                    name={ props.item.completed ? "md-checkbox" : "md-square-outline" } 
                    size={23} />                               
            </TouchableOpacity>
            <View style={{ flex: 12 }}>                                  
                <TextInput
                        placeholder="What's in your mind? "
                        onChangeText={(new_title) => props.onUpdate(new_title, props.item._id) }
                        value={props.item.title}  />                                  
            </View>
            <TouchableOpacity style={{  flex : 3, alignItems : 'center' }} 
                onPress={() => {
                    console.log("Pressed");
                    let images = [
                        { url: props.item.title, props: { } }
                    ];
                    props.setImages(images);
                    props.setModalVisible(true);
                }}
                >
                <Image source={{ uri : props.item.title }} style={{width: 40, height: 40}} resizeMode="cover"/>
            </TouchableOpacity>
            <TouchableOpacity  
                onPress={()=>props.onDelete(props.item._id) }
                style={{  flex : 1 }} >
                <Ionicons 
                    name="md-trash" 
                    size={23} />
            </TouchableOpacity>
        </View>             
    );
}
