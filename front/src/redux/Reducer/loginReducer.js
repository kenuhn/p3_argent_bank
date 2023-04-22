import React from 'react';

import { LOGIN_SUCCESS } from '../actions/login';

const INITIAL_STATE = {
    isAuthentificated: false,
    isloading: false
}

const loginReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case LOGIN_SUCCESS: {
            console.log(action.type, action.payload);
            return {
                ...state,
                isAuthentificated:  action.payload.isAuthentificated,
                isloading: action.payload.isloading
                
            }
        }
        default:
            return state
    }
   
};

export default loginReducer;