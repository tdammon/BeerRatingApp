const setBreweryListReducer = (state = [], action) => {
    switch (action.type) {
      case 'SET_BREWERY_LIST':
      console.log(action.payload)
        return action.payload;
      default:
        return state;
    }
  };

  export default setBreweryListReducer;