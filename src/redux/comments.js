import { COMMENTS } from '../shared/comments';

// reducer funciton
// take current state and create new state on the basis of action provided to it.
export const Comments = (state = COMMENTS, action) => {
    switch (action.type) {

        default:
          return state;
      }
};