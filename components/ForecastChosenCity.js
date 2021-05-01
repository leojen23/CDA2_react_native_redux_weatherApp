import React from 'react';
import { 
    View, 
    Text, 
    StyleSheet 
} from 'react-native';


const ForecastChosenCity = ({city}) => 
    (
        <View>
            <Text style={styles.city}>{city}</Text>
        </View>
    )


const styles = StyleSheet.create({
    city: {
        color: '#FFFFFF',
        fontWeight: 'bold',
        fontSize: 62,
        fontFamily: 'Montserrat'
    },
})

export default ForecastChosenCity;
