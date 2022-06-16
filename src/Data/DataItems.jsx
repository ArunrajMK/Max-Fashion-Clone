import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { addCart, getData, getDataDetails } from './action'
import {
  Box,
  Container,
  Stack,
  Text,
  Image,
  Flex,
  VStack,
  Button,
  Heading,
  SimpleGrid,
  StackDivider,
  List,
  ListItem,
  Grid,
} from '@chakra-ui/react';



import { MdLocalShipping } from 'react-icons/md';

import { Navbar } from '../pages/Navbar';
import { useSearchParams } from 'react-router-dom';
import Home from '../pages/Home';
import Footer from '../footer/Footer';
import { useNavigate } from 'react-router-dom'




function DataItems() {
    const data = useSelector((state)=>state.data.data)
    const dataDetail = useSelector((state)=>state.data)
    const navigate = useNavigate()
     console.log("DataDetail",dataDetail)
    const dispatch = useDispatch()
    const [id, setId] = useState("")
    const [id2, setId2] = useState("")
    
    const [searchParams, setSearchParams] = useSearchParams()
    const [categoryValues, setCategoryValues] = useState(searchParams.getAll("section")||[])

    

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
 const colorChanger=()=>{
  const color = {
    section:"women",
    color:"yellow"
  }
  dispatch(getData(color))
 }


useEffect(()=>{
  if(id2){
    dispatch(getDataDetails(id2))
    navigate("/products")
  }
  // getDataDetails
},[id2,dispatch,navigate])







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



const handleClick = (data)=>{

console.log("data.id",data)

}


  return (
    <>
      <Navbar categoryHandler={categoryHandler} mensHandler={mensHandler}  girlsHandler={girlsHandler} boysHandler={boysHandler} categoryValues={categoryValues} />
      <Home/>
     {categoryValues==="women" && <h1 onClick={colorChanger}>color</h1>}
      <Grid
     
        columns={{ base: 2, lg: 3 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}
        height={10}>
        <Container maxW={'7xl'}>
       
          {/* <Text  onClick={categoryHandler}>Women</Text> */}
        {data.map(data=>(
      <SimpleGrid key={data.id}
        columns={{ base: 1, lg: 2 }}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 18, md: 24 }}>
        <Flex>
       
          <Image
            rounded={'md'}
            alt={'product image'}
            src={data.img}
            fit={'cover'}
            align={'center'}
            w={'100%'}
            h={{ base: '100%', sm: '400px', lg: '500px' }}
          />
         
        </Flex>
        <Stack spacing={{ base: 6, md: 10 }}>
          <Box as={'header'}>
            <Heading
              lineHeight={1.1}
              fontWeight={600}
              fontSize={{ base: '2xl', sm: '4xl', lg: '5xl' }}>
            {data.product}
            </Heading>
            <Text
             
              fontWeight={300}
              fontSize={'2xl'}>
             Price: ₹{data.price}
            </Text>
          </Box>

          <Stack
            spacing={{ base: 4, sm: 6 }}
            direction={'column'}
            divider={
              <StackDivider
              
              />
            }>
            <VStack spacing={{ base: 4, sm: 6 }}>
              <Text
              
                fontSize={'2xl'}
                fontWeight={'300'}>
             {data.overview}
              </Text>
              <Text fontSize={'lg'}>
                {data.policy}
              </Text>
            </VStack>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
               
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Features
              </Text>

              <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                <List spacing={2}>
                  <ListItem>Section</ListItem>
                  <ListItem>Size</ListItem>{' '}
                  <ListItem>Color</ListItem>
                </List>
                <List spacing={2}>
                  <ListItem>{data.section}</ListItem>
                  <ListItem>{data.size}</ListItem>
                  <ListItem>{data.color}</ListItem>
                </List>
              </SimpleGrid>
            </Box>
            <Box>
              <Text
                fontSize={{ base: '16px', lg: '18px' }}
           
                fontWeight={'500'}
                textTransform={'uppercase'}
                mb={'4'}>
                Product Details
              </Text>

              <List spacing={2}>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Discount:
                  </Text>{' '}
                  {data.discount}%
                </ListItem>
                <ListItem>
                  <Text as={'span'} fontWeight={'bold'}>
                    Instruction:
                  </Text>{' '}
                 {data.instructions}
                </ListItem>
              </List>
            </Box>
          </Stack>

          <Button
            rounded={'none'}
            w={'full'}
            mt={8}
            size={'lg'}
            py={'7'}
            onClick={handleClick}
            // ()=>{setId(data); setId2(data.id);}
            // onClick={() => { func1(); func2();}}
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}     >
            Add to basket
          </Button>

          <Stack direction="row" alignItems="center" justifyContent={'center'}>
            <MdLocalShipping />
            <Text>2-3 business days delivery</Text>
          </Stack>
        </Stack>

      </SimpleGrid>
      ))}
    </Container>
      

    </Grid>



    </>
  )
}

export default DataItems




// Manufacture: "Lifestyle Int Pvt Ltd, 77 Degree Town Centre, Building No. 3, West Wing, Off HAL Airport Road, Yamlur, Bangalore-560037"
// color: "yellow"
// contact: "Manager Commercial,77 Degree Town Centre, Building No. 3, West Wing, Off HAL Airport Road, Yamlur PO., Bangalore-560037, Phone: 1800-123-1444, help.in@maxfashion.com"
// country: "India"
// discount: 0
// id: 1
// img: "https://lmsin.net/cdn-cgi/image/h=831,w=615,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000011378373-Yellow-YELLOW-1000011378373-13052022_01-2100.jpg"
// instructions: "Machine Wash"
// overview: "Update your casual look with this casual t-shirt designed with a solid surface along with half sleeves and a round neckline."
// policy: "This product is returnable within 30 days of delivery"
// price: 800
// product: "T-shirt"
// section: "women"
// size: "M"
// type: "T-shirt"