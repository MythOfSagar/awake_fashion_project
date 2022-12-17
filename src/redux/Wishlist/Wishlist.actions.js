import {GET_WISHLIST_ITEMS_LOADING,GET_WISHLIST_ITEMS_SUCCESS
,GET_WISHLIST_ITEMS_ERROR,ADD_ITEM_TO_WISHLIST_LOADING
,ADD_ITEM_TO_WISHLIST_SUCCESS,ADD_ITEM_TO_WISHLIST_ERROR,
UPDATE_WISHLIST_ITEMS_LOADING,UPDATE_WISHLIST_ITEMS_SUCCESS,
UPDATE_WISHLIST_ITEMS_ERROR,REMOVE_WISHLIST_ITEMS_LOADING,
REMOVE_WISHLIST_ITEMS_SUCCESS,REMOVE_WISHLIST_ITEMS_ERROR} from './Wishlist.types' 
import axios from 'axios'
// Cart Actions here
export const getWishlist=()=>async(dispatch)=>{
    dispatch({type:GET_WISHLIST_ITEMS_LOADING});
    try{
        let response=await axios.get("http://localhost:8080/cartItems");
        console.log(response);
        dispatch({type:GET_WISHLIST_ITEMS_SUCCESS,payload:response.data});
    }
    catch(e){
        console.log(e);
        dispatch({type:GET_WISHLIST_ITEMS_ERROR,payload:e.message})
    }
}

export const addWishlist=(payload)=>async(dispatch)=>{
    dispatch({type:ADD_ITEM_TO_WISHLIST_LOADING});
    try{
        let response=await axios.post("http://localhost:8080/cartItems",payload);
        console.log(response);
        dispatch({type:ADD_ITEM_TO_WISHLIST_SUCCESS,payload:response.data});
    }
    catch(e){
        console.log(e);
        dispatch({type:ADD_ITEM_TO_WISHLIST_ERROR,payload:e.message})
    }
}

export const updateWishlist=(id,payload)=>async(dispatch)=>{
    dispatch({type:UPDATE_WISHLIST_ITEMS_LOADING});
    try{
        let response=await axios.patch(`http://localhost:8080/cartItems/${id}`,{
         ...payload   
        });
        console.log(response);
        dispatch({type:UPDATE_WISHLIST_ITEMS_SUCCESS,payload:response.data});
    }
    catch(e){
        console.log(e);
        dispatch({type:UPDATE_WISHLIST_ITEMS_ERROR,payload:e.message})
    }
}

export const deleteWishlist=(id)=>async(dispatch)=>{
    dispatch({type:REMOVE_WISHLIST_ITEMS_LOADING});
    try{
        let response=await axios.delete(`http://localhost:8080/cartItems/${id}`);
        console.log(response);
        dispatch({type:REMOVE_WISHLIST_ITEMS_SUCCESS,payload:response.data});
    }
    catch(e){
        console.log(e);
        dispatch({type:REMOVE_WISHLIST_ITEMS_ERROR,payload:e.message})
    }
}
