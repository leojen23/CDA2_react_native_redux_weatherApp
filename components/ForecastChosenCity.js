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
        fontSize: 60,
        fontFamily: 'Montserrat',
        textAlign:'center',
        marginBottom:3,
        lineHeight:60
    },
})

export default ForecastChosenCity;
