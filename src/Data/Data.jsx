
import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import Footer from '../footer/Footer'

import { getData } from './action'
import DataItems from './DataItems'

function Data() {
const dispatch = useDispatch()


useEffect(()=>{
 dispatch(getData())
},[dispatch])



  return (
    <div>
     
      <DataItems/>
      <Footer/>
    </div>
  )
}

export default Data