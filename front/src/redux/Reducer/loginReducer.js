import React from 'react';

import { LOGIN_SUCCESS } from '../actions/login';

const INITIAL_STATE = {
    isAuthentificated: false,

}
const loginReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS: {
            console.log(action.type, action.payload);
            return {
                ...state,
                isAuthentificated:  action.payload,
                
            }
        }
        default:
            return state
    }
   
};

export default loginReducer;