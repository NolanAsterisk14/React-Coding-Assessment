import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, Image } from 'react-native';
import { bgImage } from "./assets/cod_background.jfif";
//import { useState } from 'react';

export default function App() {

  return (
    <View style={styles.container}>
      <Image style={styles.backgroundImage} source={bgImage}/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000000',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    height: 500,
    width: 500,
    justifyContent: "center",
    alignContent: "center"
  }
});
