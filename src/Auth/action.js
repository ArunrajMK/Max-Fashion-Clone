import axios from "axios"
export const SIGN_IN_REQUEST = "SIGN_IN_REQUEST"
export const SIGN_IN_SUCCESS = "SIGN_IN_SUCCESS"
export const SIGN_IN_FAILURE = "SIGN_IN_FAILURE"


export const SIGN_UP_REQUEST = "SIGN_UP_REQUEST"
export const SIGN_UP_SUCCESS = "SIGN_UP_SUCCESS"
export const SIGN_UP_FAILURE = "SIGN_UP_FAILURE"




const signInRequest = ()=>{
    return({
        type:SIGN_IN_REQUEST,
    })
}

const signInSuccess = (payload)=>{
    return({
        type:SIGN_IN_SUCCESS,
        data:payload
    })
}

const signInFailure = ()=>{
    return({
        type:SIGN_IN_FAILURE,
    })
}





const signUpRequest = ()=>{
    return({
        type:SIGN_UP_REQUEST,
    })
}

const signUpSuccess = (payload)=>{
    return({
        type:SIGN_UP_SUCCESS,
        data:payload
    })
}

const signUpFailure = ()=>{
    return({
        type:SIGN_UP_FAILURE,
    })
}




export const signIn = (payload)=>(dispatch)=>{
    dispatch(signInRequest())
    return axios({
        method:"POST",
        url:"https://reqres.in/api/login",
        data:{
           ...payload
        }
    })
    .then(res=>{ 
        console.log(res.data)
     dispatch(signInSuccess(res.data))
    })
    .catch(error=>{
     dispatch(signInFailure())
    })
}




export const signUp = (payload)=>(dispatch)=>{
    dispatch(signUpRequest())
    return axios({
        method:"POST",
        url:"https://reqres.in/api/login",
        data:{
           ...payload
        }
    })
    .then(res=>{ 
        console.log(res.data)
     dispatch(signUpSuccess(res.data))
    })
    .catch(error=>{
     dispatch(signUpFailure())
    })
}


