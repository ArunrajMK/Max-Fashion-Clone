import axios from "axios"

export const GET_DATA_REQUEST = "GET_DATA_REQUEST"
export const GET_DATA_SUCCESS = "GET_DATA_SUCCESS"
export const GET_DATA_FAILURE = "GET_DATA_FAILURE"

export const ADD_DATA_REQUEST = "ADD_DATA_REQUEST"
export const ADD_DATA_SUCCESS = "ADD_DATA_SUCCESS"
export const ADD_DATA_FAILURE = "ADD_DATA_FAILURE"

export const ADD_CART_REQUEST = "ADD_CART_REQUEST"
export const ADD_CART_SUCCESS = "ADD_CART_SUCCESS"
export const ADD_CART_FAILURE = "ADD_CART_FAILURE"

export const GET_CART_REQUEST = "GET_CART_REQUEST"
export const GET_CART_SUCCESS = "GET_CART_SUCCESS"
export const GET_CART_FAILURE = "GET_CART_FAILURE"


export const DELETE_CART_REQUEST = "DELETE_CART_REQUEST"
export const DELETE_CART_SUCCESS = "DELETE_CART_SUCCESS"
export const DELETE_CART_FAILURE = "DELETE_CART_FAILURE"

export const GET_DATA_DETAILS_REQUEST = "GET_DATA_DETAILS_REQUEST"
export const GET_DATA_DETAILS_SUCCESS = "GET_DATA_DETAILS_SUCCESS"
export const GET_DATA_DETAILS_FAILURE = "GET_DATA_DETAILS_FAILURE"



export const getDataRequest = ()=>{
  return({
      type:GET_DATA_REQUEST
      
  })
}
export const getDataSuccess = (data)=>{
    // console.log("data11",data)
    return({
        type:GET_DATA_SUCCESS,
        payload:data
    })
}
export const getDataFailure = ()=>{
    return({
        type:GET_DATA_FAILURE
    })
}
export const addDataRequest = ()=>{
    return({
        type:ADD_DATA_REQUEST
    })
}
export const addDataSuccess = (data)=>{
    return({
        type:ADD_DATA_SUCCESS,
        payload:data
    })
}
export const addDataFailure = ()=>{
    
    return({
        type:ADD_DATA_FAILURE
    })
}

export const addCartRequest = ()=>{
    return({
        type:ADD_CART_REQUEST
    })
}
export const addCartSuccess = (data)=>{
    return({
        type:ADD_CART_SUCCESS,
        payload:data
    })
}
export const addCartFailure = ()=>{
    
    return({
        type:ADD_CART_FAILURE
    })
}

export const getCartRequest = ()=>{
    return({
        type:GET_CART_REQUEST
        
    })
  }
  export const getCartSuccess = (cart)=>{
 
      return({
          type:GET_CART_SUCCESS,
          payload:cart
      })
  }
  export const getCartFailure = ()=>{
      return({
          type:GET_CART_FAILURE
      })
  }
  export const deleteCartRequest = ()=>{
    return({
        type:DELETE_CART_REQUEST
        
    })
  }
  export const deleteCartSuccess = (cart)=>{
 
      return({
          type:DELETE_CART_SUCCESS,
          payload:cart
      })
  }
  export const deleteCartFailure = ()=>{
      return({
          type:DELETE_CART_FAILURE
      })
  }
  export const getDataDetailsRequest = ()=>{
    return({
        type:GET_DATA_DETAILS_REQUEST
        
    })
  }
  export const getDataDetailsSuccess = (data)=>{
      // console.log("data11",data)
      return({
          type:GET_DATA_DETAILS_SUCCESS,
          payload:data
      })
  }
  export const getDataDetailsFailure = ()=>{
      return({
          type:GET_DATA_DETAILS_FAILURE
      })
  }



//-----------Get the data----------------//

export const getData =(payload) => (dispatch,getState)=>{
    dispatch(getDataRequest())
    // console.log(`token is`,getState().auth.token)
    return axios({
        method:"GET",
        url:"http://localhost:8081/data",
        params:{
        ...payload
        }
    })
    .then(res=>{ 
        // console.log("res",res)
     dispatch(getDataSuccess(res.data))
    })
    .catch(error=>{
     dispatch(getDataFailure())
    })
}



// export const addData = ({product})=>(dispatch)=>{
//     dispatch(addDataRequest())
//     return axios({
//         method:"POST",
//         url:"http://localhost:8080/data",
//         data:{
//            product,
//            status:true
//         }
//     })
//     .then(res=>{ 
//      dispatch(addDataSuccess())
//     })
//     .catch(error=>{
//      dispatch(addDataFailure())
//     })
// }

//-----------Add to Cart----------------//

export const addCart = (data)=>(dispatch)=>{
    dispatch(addCartRequest())
    return axios({
        method:"POST",
        url:"http://localhost:8081/cart",
        data:{
           ...data
        }
    })
    .then(res=>{ 
     dispatch(addCartSuccess())
    })
    .catch(error=>{
     dispatch(addCartFailure())
    })
}


//-----------Get from Cart----------------//

export const getCart =() => (dispatch,getState)=>{
    dispatch(getCartRequest())
    // console.log(`token is`,getState().auth.token)
    return axios({
        method:"GET",
        url:"http://localhost:8081/cart"
      
    })
    .then(res=>{ 
      console.log("res_cart",res)
     dispatch(getCartSuccess(res.data))
    })
    .catch(error=>{
     dispatch(getCartFailure())
    })
}



//-----------delete----------------//

export const deleteCart = (data)=>(dispatch)=>{
    dispatch(deleteCartRequest())
    return axios({
        method:"DELETE",
        url:`http://localhost:8081/cart/${data}`,
        // data:{
        //    ...data
        // }
    })
    .then(res=>{ 
        console.log("res",res)
     dispatch(deleteCartSuccess(res.data))
     dispatch(getCartSuccess(res.data))
    })
    .catch(error=>{
     dispatch(deleteCartFailure())
    })
}






//-------------------Get details----------------//


export const getDataDetails =(id) => (dispatch,getState)=>{
    dispatch(getDataDetailsRequest())
 
    return axios({
        method:"GET",
        url:`http://localhost:8081/data/${id}`
    })
    .then(res=>{ 
        console.log("res Data_Details",res)
     dispatch(getDataDetailsSuccess(res.data))
    })
    .catch(error=>{
     dispatch(getDataDetailsFailure())
    })
}