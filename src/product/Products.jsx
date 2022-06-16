
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCart, getData, getDataDetails } from '../Data/action';
import {
  Box,
  Heading,
  Text,
  Stack,
  Image,
  Grid,
  Button,
} from '@chakra-ui/react';
import { Link, useNavigate,useSearchParams } from 'react-router-dom'
import { Navbar } from '../pages/Navbar';
import Home from '../pages/Home';
import {useParams} from 'react-router-dom'






const IMAGE =
  'https://images.unsplash.com/photo-1518051870910-a46e30d9db16?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80';


  function Products() {



    const data = useSelector((state)=>state.data.data)
    console.log("data new check",data)
    const dataDetail = useSelector((state)=>state.data)
    const navigate = useNavigate()
     console.log("DataDetail",dataDetail)
    const dispatch = useDispatch()
    const [id, setId] = useState("")
    const [id2, setId2] = useState("")

    const [searchParams, setSearchParams] = useSearchParams()
    const [categoryValues, setCategoryValues] = useState(searchParams.getAll("section")||[])
    const params = useParams()
    console.log("params new",params)
    
  useEffect(()=>{
    if(id){
      dispatch(addCart(id))
     
    }
    
  },[id,dispatch])


  const categoryHandler = ()=>{
  setCategoryValues("women")
 }
 const mensHandler=()=>{
  setCategoryValues("men")
 }
 const boysHandler=()=>{
  setCategoryValues("boys")
 }
 const girlsHandler=()=>{
  setCategoryValues("girls")
 }
 





const handleBuy = ()=>{
  navigate(`/${id2}`)
}




  useEffect(()=>{
    if(categoryValues){
        setSearchParams({section:categoryValues},{replace:true})
        //-------filter--------//
        let params = {
            section:searchParams.getAll("section")
        }
        dispatch(getData(params))
    }
},[categoryValues,setSearchParams,searchParams,dispatch])








  return (
    <div>
       <Navbar  categoryHandler={categoryHandler} mensHandler={mensHandler}  girlsHandler={girlsHandler} boysHandler={boysHandler} categoryValues={categoryValues} />
      <Home/>
    
<Grid templateColumns='repeat(4, 1fr)' gap="5px" rowGap="70px" marginTop="90px">
  {data.map(data=>(
      <Box
        role={'group'}
        p={6}
        maxW={'330px'}
        w={'full'}
        boxShadow={'2xl'}
        rounded={'lg'}
        pos={'relative'}
        zIndex={1}>
        <Box
          rounded={'lg'}
          mt={-12}
          pos={'relative'}
          height={'230px'}
          _after={{
            transition: 'all .3s ease',
            content: '""',
            w: 'full',
            h: 'full',
            pos: 'absolute',
            top: 5,
            left: 0,
       
            zIndex: -1,
          }}
          _groupHover={{
            _after: {
              filter: 'blur(20px)',
            },
          }}>
          <Image
            rounded={'lg'}
            height={230}
            width={282}
            objectFit={'cover'}
            src={data.img}
            marginBottom={"1px"}
          />
        </Box>
        <Stack  pt={10} align={'center'}>
          <Text marginTop="1px" color={'gray.500'} fontSize={'sm'}  >
            Section: {data.section}
          </Text>
          <Heading fontSize={'2xl'} fontFamily={'body'} fontWeight={500}>
           {data.product}
          </Heading>
        

            <Stack direction={'row'} align={'center'}>
            <Text fontWeight={800} fontSize={'xl'}>
            ₹ {data.price}
            </Text> 
            <Text textDecoration={'line-through'} color={'gray.600'}>
            ₹ {data.price+199}
            </Text>
          </Stack>
          <Stack direction={'row'} align={'center'}>
          
         
            <Button color="white" bg="black"  onClick={()=>{setId(data);}} >Add To Basket</Button>
            <Button><Link to={`/${data.id}`} color="white" bg="black">Buy</Link></Button>
          </Stack>
         
        </Stack>
      
      </Box>
      ))}
    </Grid>



    </div>
  )
}

export default Products