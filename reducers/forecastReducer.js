let initialState = {
    forecast: {},
    loader: false,
    inputValue : '',
    errorMsg:null
  }

const forecastReducer = (state = initialState, action) => {
  switch (action.type) {
      case 'UPDATE_FORECAST':
          return {
            ...state,
            forecast: action.forecast,
            // inputValue : '',
          };
      case 'TOGGLE_LOADER':
          return {
            ...state,
            loader: action.status
          };
      case 'UPDATE_INPUT':
        return {
          ...state,
          inputValue: action.inputValue
        };
      case 'SET_ERROR_MSG':
        return {
          ...state,
          errorMsg: action.errorMsg
        }
      case 'CLEAR_INPUT':
        return {
          ...state,
          inputValue: action.inputValue,
          //inputValue: null
        };
      default :
          return state;
  }
};

export default forecastReducer;