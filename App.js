import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Forecast from './components/Forecast';
import { 
  StyleSheet,
  View, 
  ImageBackground
 } from 'react-native';

import * as Font from 'expo-font';
import { useFonts } from 'expo-font';


export default function App() {
  const [loaded] = useFonts({
    Montserrat: require('./assets/fonts/Montserrat-Black.ttf'),
  });
  
  if (!loaded) {
    return null;
  }
  return (
    <Provider store={store}>
       <View style={styles.container}>
        <ImageBackground source={require('./assets/images/Bg_weatherApp.png')} style={styles.image}>
          <Forecast />
          <StatusBar style="hidden" />
        </ImageBackground>
        </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
  },
  image: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },

});
