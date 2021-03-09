import { COMMENTS } from '../shared/comments';
import  * as ActionTypes from './ActionTypes';

// reducer funciton
// take current state and create new state on the basis of action provided to it.
export const Comments = (state = COMMENTS, action) => {
    
    switch (action.type) {
        case ActionTypes.ADD_COMMENT:
            var comment = action.payload;
            comment.id = state.length;
            comment.date = new Date().toISOString();
            console.log("Comment: ", comment);
            return state.concat(comment);

        default:
          return state;
      }
};