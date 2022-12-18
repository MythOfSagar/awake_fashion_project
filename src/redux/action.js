import axios from 'axios'
import { GET_KIDS_PRODUCT_ERROR, GET_KIDS_PRODUCT_LOADING, GET_KIDS_PRODUCT_SUCCESS, GET_MENS_PRODUCT_ERROR, GET_MENS_PRODUCT_LOADING, GET_MENS_PRODUCT_SUCCESS, GET_WOMENS_PRODUCT_ERROR, GET_WOMENS_PRODUCT_LOADING, GET_WOMENS_PRODUCT_SUCCESS } from './actiontypes'

export const womensproduct=()=>async (dispatch)=>{
    dispatch({type:GET_WOMENS_PRODUCT_LOADING})
    await axios.get('https://fashion-database-api.vercel.app/Women')
    .then((res)=>{
        dispatch({type:GET_WOMENS_PRODUCT_SUCCESS,payload:res.data})
    })
    .catch((e)=>{
        dispatch({type:GET_WOMENS_PRODUCT_ERROR})
    })
}
export const mensproduct=()=>(dispatch)=>{
    dispatch({type:GET_MENS_PRODUCT_LOADING})
    axios.get('https://fashion-database-api.vercel.app/Mens')
    .then((res)=>{
        dispatch({type:GET_MENS_PRODUCT_SUCCESS,payload:res.data})
    })
    .catch((e)=>{
        dispatch({type:GET_MENS_PRODUCT_ERROR})
    })
}
export const kidsproduct=()=>(dispatch)=>{
    dispatch({type:GET_KIDS_PRODUCT_LOADING})
    axios.get('https://fashion-database-api.vercel.app/kidsClothing')
    .then((res)=>{
        dispatch({type:GET_KIDS_PRODUCT_SUCCESS,payload:res.data})
    })
    .catch((e)=>{
        dispatch({type:GET_KIDS_PRODUCT_ERROR})
    })
}
export const addtocart=(data)=>()=>{
    axios.post('https://fashion-database-api.vercel.app/CartPage',data)
}