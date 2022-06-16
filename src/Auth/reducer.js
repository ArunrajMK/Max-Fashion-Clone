import { SIGN_IN_FAILURE, SIGN_IN_REQUEST, SIGN_IN_SUCCESS, SIGN_UP_FAILURE, SIGN_UP_REQUEST, SIGN_UP_SUCCESS } from "./action"



const initState = {
   auth:false,
   token:""
}


 export const authReducer = (state=initState, action)=>{

switch(action.type){
case SIGN_IN_REQUEST:
    return({
         auth:false
    })
    case SIGN_IN_SUCCESS:
    return({
         auth:true,
         token:action.payload
    })
    case SIGN_IN_FAILURE:
    return({
         auth:false,
         token:""
    })
    case SIGN_UP_REQUEST:
    return({
         auth:false
    })
    case SIGN_UP_SUCCESS:
    return({
         auth:true,
         token:action.payload
    })
    case SIGN_UP_FAILURE:
    return({
         auth:false,
         token:""
    })
    default:
        return state
}
}
 

