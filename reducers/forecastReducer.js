let INITIAL_STATE = {
    forecast: {},
    loader: false,
    inputValue : '',
    errorMsg:null
  }

const forecastReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
      case 'UPDATE_FORECAST':
          return {
            ...state,
            forecast: action.forecast,
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
        };
      default :
          return state;
  }
};

export default forecastReducer;