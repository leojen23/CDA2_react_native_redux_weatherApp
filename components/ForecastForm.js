import React from 'react';
import { 
    View, 
    Image, 
    StyleSheet, 
    TextInput} from 'react-native';

const ForecastForm = ({inputValue, onChangeText, onSubmitEditing}) => {
   
        return (
            <View>
                <View style={styles.inputView}>
                    <Image
                        source={require('../assets/images/search_icon.png')} 
                        style={styles.ImageStyle}
                    />
                    <TextInput 
                        onChangeText={onChangeText}
                        onSubmitEditing={onSubmitEditing}
                        style={{ fontFamily: 'Montserrat', fontSize: 20 }}
                        placeholder="Rechercher une ville"
                        underlineColorAndroid="transparent"
                        value={inputValue}
                    />
                </View>
            </View>
        )
    }


const styles = StyleSheet.create({
    inputView: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        borderWidth: 0.5,
        borderColor: '#000',
        height: 75,
        borderRadius: 10,
        margin: 20,
        marginTop: 50,
        fontFamily: 'Montserrat'
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

export default ForecastForm