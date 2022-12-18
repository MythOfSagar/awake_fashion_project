import axios from 'axios'
import { GET_BASKET_ERROR, GET_BASKET_LOADING, GET_BASKET_SUCCESS, remove_BASKET_ITEM, SIGN_IN } from './basket.actiontypes'

export const getbasketData=()=>async (dispatch)=>{
   dispatch({type:GET_BASKET_LOADING})

   try{
        const resp=await axios.get("https://fashion-database-api.vercel.app/CartPage")
        const data=await resp.data

        dispatch({type:GET_BASKET_SUCCESS,payload:data})
   }
   catch(e){
    dispatch({type:GET_BASKET_ERROR})
   }
}

export const signIn=(user)=>(dispatch)=>{
 
    dispatch({type:SIGN_IN,payload:user})

} 

export const remove_BasketItem=(data,id)=>async (dispatch)=>{

    await axios.delete(`https://fashion-database-api.vercel.app/CartPage/${id}`)

    dispatch({type:remove_BASKET_ITEM,payload:data})
}