export const updateForecast = (forecast) => ({
      type: 'UPDATE_FORECAST',
      forecast: forecast,
  });
  
export const updateInput = (inputValue) => ({
    type: 'UPDATE_INPUT',
    inputValue: inputValue
})
    
export const toggleLoader = (status) => ({
    type: 'TOGGLE_LOADER',
    status: status
});

export const setErrorMsg = (message) => ({
    type:'SET_ERROR_MSG',
    errorMsg: message
});

export const clearInput = () => ({
    type: 'CLEAR_INPUT',
    inputValue: ''
  });


export const fetchLocation = () => {
    return async dispatch => {
        dispatch(toggleLoader(true));
        const response = await fetch ('https://api.bigdatacloud.net/data/reverse-geocode-client?city&localityLanguage=fr');
        const location = await response.json();
        dispatch(fetchForecast(location.locality));
    }
}
export const fetchForecast = (city) => {
    return async dispatch => {
        dispatch(toggleLoader(true));
        try{
        
        const response = await fetch ('http://api.weatherstack.com/current?access_key=46469cff65186cad32f237adaa90e388&query='+ city);
        const forecast = await response.json();

            if (forecast.hasOwnProperty('location')){
                dispatch(setErrorMsg(null));
                dispatch(updateForecast(forecast));
            } else {
                dispatch(setErrorMsg("Nous n'avons pas trouvé la ville souhaitée"));   
            }
            
            dispatch(toggleLoader(false));

        } catch(e) {
            dispatch(setErrorMsg('Une erreur est survenue. Serveur temporairement indisponible.'));
            dispatch(toggleLoader(false));
        }
    
    dispatch(clearInput());

    }
};

