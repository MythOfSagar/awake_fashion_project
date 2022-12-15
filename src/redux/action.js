import axios from 'axios'
import { GET_WOMENS_PRODUCT_ERROR, GET_WOMENS_PRODUCT_LOADING, GET_WOMENS_PRODUCT_SUCCESS } from './actiontypes'

export const womensproduct=()=>(dispatch)=>{
    dispatch({type:GET_WOMENS_PRODUCT_LOADING})
    axios.get('https://fashion-database-api.vercel.app/Women')
    .then((res)=>{
        dispatch({type:GET_WOMENS_PRODUCT_SUCCESS,payload:res.data})
    })
    .catch((e)=>{
        dispatch({type:GET_WOMENS_PRODUCT_ERROR})
    })
}