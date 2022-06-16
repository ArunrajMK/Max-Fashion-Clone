import React from 'react'
import { useSelector } from 'react-redux'
import { Navigate, useNavigate } from 'react-router-dom'

function AuthWrapper({children}) {
    const navigate = useNavigate()
    const authStatus = useSelector((store) =>store.auth.auth)

console.log("authStatus", authStatus)

if(!authStatus){
    return(
        <Navigate to="/login" replace={true} />
    )
}


  return (
<>
  {children}
  </>
  )
}

export default AuthWrapper