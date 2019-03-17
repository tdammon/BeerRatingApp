const credentialsReducer= (state = [], action) => {
    switch (action.type) {
      case 'SET_CREDENTIALS':
      console.log(action.payload)
        return action.payload;
      default:
        return state;
    }
  };
  
  export default credentialsReducer;