import React, { Component } from 'react';
import {connect} from "react-redux";
import {bindActionCreators} from "redux";
import {fetchForecast, updateInput, fetchLocation} from '../actions/forecastActions';
import ForecastTitle from './ForecastTitle';
import ForecastResult from './ForecastResult';
import ForecastForm from './ForecastForm';
import {
    StyleSheet, 
    Text, 
    View, 
    ActivityIndicator,
    Dimensions } from 'react-native';

class Forecast extends Component {
    componentDidMount() {
        this.props.fetchLocation()
    }
    render(){
        return (
               (this.props.forecast.location) ?
               
                <View style={styles.container}>
                    {this.props.loader ? 
        
                    <View   >
                        <ActivityIndicator size="large" color="#0000ff" />
                    </View>
                    :
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
                            // loader= {This.props.loader}
                            // errorMsg={This.props.errorMsg}
                            />
                        <ForecastForm 
                            onChangeText= {(text) => {this.props.updateInput(text)}}
                            onSubmitEditing={(event) => this.props.fetchForecast(event.nativeEvent.text)}
                            inputValue={this.props.inputValue} />  
                    </View>}
                </View> 
                :
                <View>
                    <Text>Aucune ville trouvée, réessayer : </Text>
                    {!this.props.loader ? 
                        <ForecastForm 
                            onChangeText= {(text) => {this.props.updateInput(text)}}
                            onSubmitEditing={(event) => this.props.fetchForecast(event.nativeEvent.text)}
                            inputValue={this.props.inputValue} />  
                        : <Text>It is loading</Text>}
                </View>             
        )      
    }
}
const screenWidth = Dimensions.get('window').width
const screenHeight = Dimensions.get('window').height 
const styles = StyleSheet.create({
    container: {
       flex:1,
       justifyContent:'center',
       alignItems:'center'
    },
    ImageStyle: {
        padding: 10,
        margin: 5,
        height: 50,
        width: 50,
        resizeMode: 'stretch',
        alignItems: 'center',
    }
  });

const mapStateToProps = (state) => ({
    forecast: state.forecast,
    inputValue: state.inputValue,
    loader: state.loader,
    //errorMsg:state.errorMsg  
  })

const mapDispatchToProps = (dispatch) => {
    return bindActionCreators({
        fetchForecast,
        updateInput,
        fetchLocation
    }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Forecast)