import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchForecast, updateInput, fetchLocation} from '../actions/forecastActions';
import ForecastTitle from './ForecastTitle';
import ForecastResult from './ForecastResult';
import ForecastForm from './ForecastForm';

import {
    StyleSheet,
    SafeAreaView , 
    Text, 
    View, 
    ActivityIndicator,
    Dimensions,
} from 'react-native';


class Forecast extends Component {
    componentDidMount() {
        this.props.fetchLocation()
    }
    render(){
        return (
               (!this.props.loader) ?
                <SafeAreaView  style={styles.container}>
                    {this.props.forecast.location && this.props.errorMsg === null?
                   
                    <View>
                        <ForecastTitle 
                            city={this.props.forecast.location.name} 
                            date={this.props.forecast.location.localtime}
                        />
                        <ForecastResult 
                            weatherIcon={this.props.forecast.current.weather_icons[0]}
                            weatherDescription={this.props.forecast.current.weather_descriptions[0]}
                            temperature={this.props.forecast.current.temperature}
                            minTemp = {this.props.forecast.current.temperature - 8}
                            maxTemp = {this.props.forecast.current.temperature + 8}
                            windSpeed={this.props.forecast.current.wind_speed}
                            humidity= {this.props.forecast.current.humidity}
                            />
                        <ForecastForm 
                            onChangeText= {(text) => {this.props.updateInput(text)}}
                            onSubmitEditing={(event) => this.props.fetchForecast(event.nativeEvent.text)}
                            inputValue={this.props.inputValue} 
                        />  
                </View> :
                 
                <View >
                    <Text style={[styles.errorMsg, styles.boxShadow]}>{this.props.errorMsg}</Text>
                    <View style={styles.formContainer}>
                        <ForecastForm 
                            onChangeText= {(text) => {this.props.updateInput(text)}}
                            onSubmitEditing={(event) => this.props.fetchForecast(event.nativeEvent.text)}
                            inputValue={this.props.inputValue} 
                        />
                    </View>
                </View>}
            </SafeAreaView >
           :
            <View style={styles.loaderContainer} >
                <ActivityIndicator size="large" color="#404491" />
            </View>      
        )      
    }
}

const screenWidth = Dimensions.get('window').width
const styles = StyleSheet.create({
    container: {
       flex:1,
       justifyContent:'center',
       alignItems:'center',
       paddingBottom:40,
       paddingTop:40,
    },
    loaderContainer: {
        alignSelf:'center',
        backgroundColor:'#FFFFFF',
        justifyContent:'center',
        alignItems:'center',
        width:100,
        height:100,
        opacity: 0.9,
        borderRadius:12,
    },
    errorMsg:{
        fontSize:20,
        fontFamily:'Montserrat',
        fontWeight:'bold',
        textAlign:'center',
        padding:40,
        borderColor: '#FFFFFF',
        borderRadius:12,
        backgroundColor:'#404491',
        color: '#FFFFFF',
        width: screenWidth * 0.9,
        opacity: 0.9,
        elevation:5
    },
    formContainer:{
        height:125
    },
    boxShadow:{
        shadowColor: "#00000029",
        shadowOffset: {
            width: 0,
            height: 3,
        },
        shadowOpacity: 2,
        shadowRadius: 6,
        elevation: 2,
        }
  });

const mapStateToProps = (state) => ({
    forecast: state.forecast,
    inputValue: state.inputValue,
    loader: state.loader,
    errorMsg: state.errorMsg
  })

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchForecast,
        updateInput,
        fetchLocation
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Forecast)