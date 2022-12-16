import * as types from "./actionType";

const initState = {
    data:{},
    cart:[]
}

export const reducer = (state=initState,action)=>{
    const {type,payload} = action;
    switch(type){
        case types.SINGLE_PRODUCT:
            return {...state,data:payload};
        case types.UPDATE_DATA:
            return {...state,cart:[...payload]}
        default:
            return {...state};
    }
}