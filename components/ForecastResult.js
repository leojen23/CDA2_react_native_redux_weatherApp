import React from 'react'
import { 
    StyleSheet, 
    View, 
    Text, 
    Image,
    Dimensions
    } from 'react-native'

    const ForecastResult = (props) => {
       
        return (
            //(props.errorMsg != null) ?
            //<View><Text>{props.errorMsg}</Text></View> :
            <View style={styles.container}>

                <View style={styles.weatherContainer}>
                    <Image 
                        source={{uri: props.weatherIcon}}
                        style={styles.weatherIcon}
                    />
                    <Text style={styles.description}>{props.weatherDescription}</Text>
                </View>
    
    
                <View style={styles.tempContainer}>
                    <Text style={styles.temp}>{props.temperature}°C</Text>
                    <View style={styles.minMaxContainer}>
                        <Text style={styles.minMaxTemp}>min {props.minTemp}°C</Text>
                        <View style={styles.divider}></View>

                        <Text style={styles.minMaxTemp}>max {props.maxTemp}°C</Text>
                    </View>
                </View>

                <View style={styles.infosContainer}>

                    <View  style={styles.infoItemContainer}>
                        <Image  style={styles.icon} source= {require('../assets/images/wind_icon.png')}/>
                        <Text  style={styles.infoText}>{props.windSpeed} km/h</Text> 
                    </View>

                    <View style={styles.infoItemContainer}>
                        <Image style={styles.icon} source= {require('../assets/images/water_icon.png')}/>
                        <Text style={styles.infoText}>{props.humidity} %</Text>
                    </View>
                    
                </View>
            </View> 
            
        )
    }
    

    
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height     
    const styles = StyleSheet.create({
        container: {
            flex:4,
            flexDirection:'column',
            alignItems:'center',
            marginTop:80,
            backgroundColor: '#FFFFFF',
            opacity:0.9,
            borderRadius:12, 
            width: screenWidth * 0.9,
        },
        loaderContainer:{
            flexDirection:'row',
            alignContent:'center',
            justifyContent:'center',
            position: 'relative',
            marginTop:80,
            backgroundColor: '#FFFFFF',
            opacity:0.9,
            borderRadius:12,
            height:200
        },


        weatherContainer:{
            flex:1,
            flexDirection:'row',
            justifyContent:'space-around',
            alignItems:'center',
            alignContent:'center',
            width: screenWidth *0.9,
            flexWrap:'wrap',
            borderRadius:12
        },
        weatherIcon: {
            width: 100, 
            height: 100,
            borderRadius:12
        },
        description: {
            fontFamily:'Montserrat',
            fontSize:27,
            fontWeight:'bold',
            color:'#404491',
        },


        tempContainer:{
            flex:1,
            flexDirection:'row',
            justifyContent:'space-around',
            alignItems:'center',
            alignContent:'center',
            width: screenWidth *0.9,
        },
        temp: {
            fontFamily:'Montserrat',
            fontSize:74,
            fontWeight:'bold',
            color:'#404491',
        },
        minMaxContainer:{
            justifyContent:'center',
        },
        divider:{
            borderBottomColor: '#707070',
            paddingVertical:1,
            borderBottomWidth: 3,
        },
        minMaxTemp:{
            color:'#707070',
            fontFamily:'Montserrat',
            fontWeight: 'bold',
            fontSize:20,
        },




        infosContainer:{
            flex:0.5,
            flexDirection:'row',
            justifyContent:'space-around',
            alignItems:'center',
            alignContent:'center',
            backgroundColor:'#404491',
            borderRadius:12,
            width:screenWidth * 0.8,
            marginBottom:-30
        },
        infoItemContainer:{
            flex:1,
            flexDirection:'row',
            justifyContent:'center',
            alignItems:'center'
        },
        icon: {
            margin: 10,
            height: 35,
            width: 40,
            resizeMode: 'stretch',
            alignItems: 'center',
        },
        infoText:{
            fontSize:22,
            color:'#FFFFFF',
            fontFamily:"Montserrat",
            fontWeight:'bold'
        }
      });
      
export default ForecastResult;