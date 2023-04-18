import React, { Profiler } from "react";


const INITIAL_STATE = {
    createdAt: null,
    email: null,
    firstName: null,
    id: null,
    lastName: null,
    updateAt: null
}

const profileReducer = (state = INITIAL_STATE, action) => {
    switch(action.type) {
        case "GET_PROFILE": {
            return {
                ...state,
                email: action.payload.email,
                firstName: action.payload.firstName,
                lastName: action.payload.lastName,
            }
        }

        case "PUT_PROFILE": {
            return {
                ...state,
                firstName: action.payload.firstName,
                lastName:  action.payload.lastName
            }
        }


        default:
            return state
    }
   
}

export default profileReducer