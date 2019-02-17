
//This reducer holds a the category ratings
const ScoreReducer = (state = {Aroma: 0, Color: 0, Flavor: 0, Finish: 0}, action) => {
    switch (action.type) {
      case 'UPDATE_SCORE':
      return Object.assign({}, state, {
          ...state,
        ...action.payload
      })
    
        // return state;
      default:
        return state;
    }
  };


  export default ScoreReducer;