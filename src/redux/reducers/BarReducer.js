const barReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_BAR_LIST':
      console.log(action.payload)
        return action.payload;
      default:
        return state;
    }
  };
  
  export default barReducer;