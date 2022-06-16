import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import {  useSearchParams } from 'react-router-dom'
import { getData } from '../Data/action'

function Women() {
    // const [searchParams, setSearchParams] = useSearchParams()
    // const showActiveUsers = searchParams.get("section")==="women"
    // const [categoryValues, setCategoryValues] = useState(searchParams.getAll("section")==="women")
    // const dispatch = useDispatch()



// const [categoryValues, setCategoryValues] = useState(searchParams.get("section"))
 
// console.log("params",params.id)



    // const [categoryValues, setCategoryValues] = useState("women")

    //--------------------------------------------//
    // useEffect(()=>{
    //     if(categoryValues){
    //         setSearchParams({section:categoryValues},{replace:true})
    //         //-------filter--------//
    //         let params = {
    //             section:searchParams.getAll("section")
    //         }
    //         dispatch(getData(params))
    //     }
    // },[categoryValues,setSearchParams,searchParams,dispatch])
    //---------------------------------------------------//


    // useEffect(()=>{
    //     if(categoryValues){
           
    //         dispatch(getData(categoryValues))
    //     }
    // },[dispatch,categoryValues])
    
    // console.log("categoryValues",categoryValues)
  return (
    <div>Women</div>
  )
}

export default Women