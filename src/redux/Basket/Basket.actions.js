import {GET_BASKET_ITEMS_LOADING,GET_BASKET_ITEMS_SUCCESS
    ,GET_BASKET_ITEMS_ERROR,ADD_ITEM_TO_BASKET_LOADING
    ,ADD_ITEM_TO_BASKET_SUCCESS,ADD_ITEM_TO_BASKET_ERROR,
    UPDATE_BASKET_ITEMS_LOADING,UPDATE_BASKET_ITEMS_SUCCESS,
    UPDATE_BASKET_ITEMS_ERROR,REMOVE_BASKET_ITEMS_LOADING,
    REMOVE_BASKET_ITEMS_SUCCESS,REMOVE_BASKET_ITEMS_ERROR} from './Basket.types' 
    import axios from 'axios'
    // Cart Actions here
    export const getBasket=()=>async(dispatch)=>{
        dispatch({type:GET_BASKET_ITEMS_LOADING});
        try{
            let response=await axios.get("https://fashion-database-api.vercel.app/CartPage");
            console.log(response);
            dispatch({type:GET_BASKET_ITEMS_SUCCESS,payload:response.data});
        }
        catch(e){
            console.log(e);
            dispatch({type:GET_BASKET_ITEMS_ERROR,payload:e.message})
        }
    }
    
    export const addBasket=(payload)=>async(dispatch)=>{
        dispatch({type:ADD_ITEM_TO_BASKET_LOADING});
        try{
            let response=await axios.post("https://fashion-database-api.vercel.app/CartPage",payload);
            console.log(response);
            dispatch({type:ADD_ITEM_TO_BASKET_SUCCESS,payload:response.data});
        }
        catch(e){
            console.log(e);
            dispatch({type:ADD_ITEM_TO_BASKET_ERROR,payload:e.message})
        }
    }
    
    export const updateBasket=(id,payload)=>async(dispatch)=>{
        dispatch({type:UPDATE_BASKET_ITEMS_LOADING});
        try{
            let response=await axios.patch(`https://fashion-database-api.vercel.app/CartPage/${id}`,{
             ...payload   
            });
            console.log(response);
            dispatch({type:UPDATE_BASKET_ITEMS_SUCCESS,payload:response.data});
        }
        catch(e){
            console.log(e);
            dispatch({type:UPDATE_BASKET_ITEMS_ERROR,payload:e.message})
        }
    }
    
    export const deleteBasket=(id)=>async(dispatch)=>{
        dispatch({type:REMOVE_BASKET_ITEMS_LOADING});
        try{
            let response=await axios.delete(`https://fashion-database-api.vercel.app/CartPage/${id}`);
            console.log(response);
            dispatch({type:REMOVE_BASKET_ITEMS_SUCCESS,payload:response.data});
        }
        catch(e){
            console.log(e);
            dispatch({type:REMOVE_BASKET_ITEMS_ERROR,payload:e.message})
        }
    }
    