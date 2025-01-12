import * as types from "./actiontypes"
import axios from "axios";
import { getLocalData, saveLocalData } from "./Local";
const API_URL = 'https://fashion-hunter.onrender.com'


export const getRegistration = (data) => (dispatch) => {
    dispatch({ type: types.REGISTRATION_REQUEST })
    return axios.post(`${API_URL}/user/register`, data)
        .then((res) => {
             
          
            saveLocalData("userID", res.data.data.userID)
            console.log(getLocalData("userID"))

           return dispatch({ type: types.REGISTRATION_SUCCESS, payload: res.data })
        }).catch((err) => {
           return dispatch({ type: types.REGISTRATION_FAILURE })
        })
}



export const getLogin = (data) => (dispatch) => {
    dispatch({ type: types.LOGIN_REQUEST })
    return axios.post(`${API_URL}/user/login`, data)
        .then((res) => {
            
           return dispatch({ type: types.LOGIN_SUCCESS, payload: res.data })
        }).catch((err) => {
           return dispatch({ type: types.LOGIN_FAILURE })
        })
}


export const verifyOtp = (data) => (dispatch) => {
    dispatch({ type: types.OTP_REQUEST })
    return axios.post(`${API_URL}/user/verifyotp`, data)
        .then((res) => {
            
            console.log(res)

          return  dispatch({ type: types.OTP_SUCCESS, payload: res.data })
        }).catch((err) => {

            console.log("Failed OTP")

           return dispatch({ type: types.OTP_FAILURE })
        })
}