import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Welcome from './screens/Welcome'; //เพิ่มเข้ามา
import Item from './component/Item';
import Network from './screens/Network';

export default function App() {
  return (
    <Network/>
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