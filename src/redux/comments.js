import  * as ActionTypes from './ActionTypes';

// reducer funciton
// take current state and create new state on the basis of action provided to it.
export const Comments = (state = 
    { errMess: null, comments:[]}
    , action) => {
    switch (action.type) {
       
        // this add comments will upload data into database
        case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload};
      
          case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload};
          
          case ActionTypes.ADD_COMMENT:
          // this add comment will show newly added data into ui 
              var comment = action.payload;
              return { ...state, comments: state.comments.concat(comment)};
      
          default:
            return state;
      }
};