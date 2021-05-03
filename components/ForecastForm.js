import React from 'react';

import { 
    View, 
    Image, 
    StyleSheet, 
    TextInput,
    Dimensions
} from 'react-native';

const ForecastForm = ({inputValue, onChangeText, onSubmitEditing}) => {
   
        return (
            
            <View style={[styles.container, styles.boxShadow]}>
                <Image
                    source={require('../assets/images/search_icon.png')} 
                    style={styles.icon}
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
        )
    }

const screenWidth = Dimensions.get('window').width 
const styles = StyleSheet.create({
    container:{
        flex:1,
        width:screenWidth * 0.9,
        backgroundColor:'#FFFFFF',
        borderRadius:12,
        flexDirection:'row',
        justifyContent:'space-evenly',
        alignItems:'center',
        height: 200,
        marginTop: 50,
        fontFamily: 'Montserrat'
    },
    icon: {
        padding: 10,
        margin: 5,
        height: 50,
        width: 50,
        resizeMode: 'stretch',
        alignItems: 'center',
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

export default ForecastForm