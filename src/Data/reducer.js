import { ADD_CART_FAILURE, ADD_CART_REQUEST, ADD_CART_SUCCESS, ADD_DATA_FAILURE, ADD_DATA_REQUEST, ADD_DATA_SUCCESS, DELETE_CART_FAILURE, DELETE_CART_REQUEST, DELETE_CART_SUCCESS, GET_CART_FAILURE, GET_CART_REQUEST, GET_CART_SUCCESS, GET_DATA_DETAILS_FAILURE, GET_DATA_DETAILS_REQUEST, GET_DATA_DETAILS_SUCCESS, GET_DATA_FAILURE, GET_DATA_REQUEST, GET_DATA_SUCCESS } from "./action"



const initState = {
    loading:false,
    error:false,
    data:[],
    cart:[],
    dataDetail:[]
}


export const dataReducer = (state=initState, action)=>{

switch(action.type){
 
case GET_DATA_REQUEST:
    return({
        ...state,
        loading:true,
        error:false
    })

    case GET_DATA_SUCCESS:
        return({
            ...state,
            data:action.payload,
            loading:false,
            error:false
        })

        case GET_DATA_FAILURE:
            return({
                ...state,
                loading:false,
                error:true
            })
            case ADD_DATA_REQUEST:
                return({
                    ...state,
                    loading:true,
                    error:false
                })
            
                case ADD_DATA_SUCCESS:
                    return({
                        ...state,
                        loading:false,
                        error:false
                    })
            
                    case ADD_DATA_FAILURE:
                        return({
                            ...state,
                            loading:false,
                            error:true
                        })
                        case ADD_CART_REQUEST:
                            return({
                                ...state,
                                loading:true,
                                error:false
                            })
                        
                            case ADD_CART_SUCCESS:
                                return({
                                    ...state,
                                    loading:false,
                                    error:false
                                })
                        
                                case ADD_CART_FAILURE:
                                    return({
                                        ...state,
                                        loading:false,
                                        error:true
                                    })     

                                    case GET_CART_REQUEST:
                                        return({
                                            ...state,
                                            loading:true,
                                            error:false
                                        })
                                    
                                        case GET_CART_SUCCESS:
                                            return({
                                                ...state,
                                                cart:action.payload,
                                                loading:false,
                                                error:false
                                            })
                                    
                                            case GET_CART_FAILURE:
                                                return({
                                                    ...state,
                                                    loading:false,
                                                    error:true
                                                })
                                                case DELETE_CART_REQUEST:
                                                    return({
                                                        ...state,
                                                        loading:true,
                                                        error:false
                                                    })
                                                
                                                    case DELETE_CART_SUCCESS:
                                                        return({
                                                            ...state,
                                                            cart:action.payload,
                                                            loading:false,
                                                            error:false
                                                        })
                                                
                                                        case DELETE_CART_FAILURE:
                                                            return({
                                                                ...state,
                                                                loading:false,
                                                                error:true
                                                            })
                                                            case GET_DATA_DETAILS_REQUEST:
                                                                return({
                                                                    ...state,
                                                                    loading:true,
                                                                    error:false
                                                                })
                                                            
                                                                case GET_DATA_DETAILS_SUCCESS:
                                                                    return({
                                                                        ...state,
                                                                        dataDetail:action.payload,
                                                                        loading:false,
                                                                        error:false
                                                                    })
                                                            
                                                                    case GET_DATA_DETAILS_FAILURE:
                                                                        return({
                                                                            ...state,
                                                                            loading:false,
                                                                            error:true
                                                                        })


    default:
        return({
            ...state
        })
}


}