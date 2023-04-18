import React from 'react';
import Axios from 'axios'
import authHeader from '../../utils/jwt/authheader';
import loginReducer from '../Reducer/loginReducer';
export const GET_PROFILE = "GET_PROFILE"
export const PUT_PROFILE = "PUT_PROFILE"
export default function getProfile ()  {
    return async (dispatch) => {
        try {
           const response = await Axios({
            method: "post",
            url: "http://localhost:3001/api/v1/user/profile",
            headers: authHeader()
        })  
            dispatch({type: GET_PROFILE, payload: response.data.body})
        } catch (error){
            return console.log(error)
        }
     

    }

}

export function modifyProfile(firstName, lastName) {
    return async (dispatch) => {
        try {
            const response = await Axios({
                method: "put",
                url: "http://localhost:3001/api/v1/user/profile",
                headers: authHeader(),
                data: {
                    firstName: firstName,
                    lastName: lastName
                }
            })
            console.log(response)
             dispatch({type: PUT_PROFILE, payload: response.data.body}) 



        } catch(error) {
            return console.log(error )
        }
    }
}