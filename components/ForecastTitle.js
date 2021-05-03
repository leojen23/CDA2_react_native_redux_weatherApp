import React, { Component } from 'react';
import ForecastChosenCity from './ForecastChosenCity';
import moment from "moment"; 
import 'moment/locale/fr'
import { 
  View, 
  Text, 
  StyleSheet, 
  Dimensions 
} from 'react-native';

const ForecastTitle = ({city, date}) => 
         (
          <View style={styles.container}>
              <ForecastChosenCity city = {city}/>
              <Text style={styles.date}>{moment(date).format('ddd Do MMM')}</Text> 
          </View>
        )


const screenWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
    container:{
        flex:1,
        width: screenWidth * 0.9,
        marginTop:40,
    },
    date: {
        color: 'white',
        fontWeight: 'bold',
        fontSize: 25,
        fontFamily: 'Montserrat',
        textAlign:'center'
        
    }
})
export default ForecastTitle;