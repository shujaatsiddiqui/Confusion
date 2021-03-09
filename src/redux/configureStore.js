// store that keep the tracks of all the states.

import {createStore, combineReducers, applyMiddleware } from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promotions } from './promotions';
import { Leaders } from './leaders';
import thunk from 'redux-thunk';
import logger from 'redux-logger';
import { createForms } from 'react-redux-form';
import { InitialFeedback } from './forms';


export const ConfigureStore = () => {

    // reducer state shape will be:
    // {
    //   dishes: Dishes,
    //   comments: Comments,
    //   promotions: Promotions,
    //   leaders: Leaders,
    //   feedback: modelReducer('feedback', InitialFeedback),
    //   forms: formReducer(''),
    // }
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions: Promotions,
            leaders: Leaders,
            ...createForms(
                {
                    feedback: InitialFeedback
                }
            )
        }),
        // in order to apply thunk  
        applyMiddleware(thunk, logger)
    );

    return store;
}