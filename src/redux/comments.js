import  * as ActionTypes from './ActionTypes';

// reducer funciton
// take current state and create new state on the basis of action provided to it.
export const Comments = (state = 
                                { errMess: null,
                                  comments:[],
                                  postingComment: false
                                } , action) => {
    switch (action.type) {

          case ActionTypes.ADD_COMMENTS:
            return {...state, errMess: null, comments: action.payload, postingComment:false};
      
          case ActionTypes.COMMENTS_FAILED:
            return {...state, errMess: action.payload, postingComment:false};
          
          case ActionTypes.ADD_COMMENT:
              var comment = action.payload;
              return { ...state, comments: state.comments.concat(comment), postingComment:false};
      
          default:
            return state;
      }
};