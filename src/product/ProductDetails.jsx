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
  } from '@chakra-ui/react';
  import {useEffect, useState} from "react"
  import { useNavigate,useParams } from 'react-router-dom'
  import { MdLocalShipping } from 'react-icons/md';

import { useDispatch, useSelector } from 'react-redux' 
import { addCart, getDataDetails } from '../Data/action';
  export default function ProductDetails() {
const navigate = useNavigate()
const dataDetail = useSelector((state)=>state.data.dataDetail)
const dispatch = useDispatch()
const params = useParams()
const [id, setId] = useState("")
useEffect(()=>{
  dispatch(getDataDetails(params.id))
},[])


console.log("dataDetail77",dataDetail)

useEffect(()=>{
    if(params){
    
      dispatch(getDataDetails(params.id))
     
    }
    // getDataDetails
  },[params,dispatch,navigate])


const handleClick = ()=>{
    navigate("/cart")
}
  
useEffect(()=>{
  if(id){
    dispatch(addCart(id))
    navigate("/cart")
  }
  
},[id,dispatch,navigate])


    return (
        <>
    
           
      
      <Container maxW={'7xl'}>
        <SimpleGrid
          columns={{ base: 1, lg: 2 }}
          spacing={{ base: 8, md: 10 }}
          py={{ base: 18, md: 24 }}>
          <Flex>
            <Image
              rounded={'md'}
              alt={'product image'}
              src={dataDetail.img}
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
                {dataDetail.product}
              </Heading>
              <Text
               
                fontWeight={300}
                fontSize={'2xl'}>
                ₹{dataDetail.price}
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
                 {dataDetail.overview}
                </Text>
                <Text fontSize={'lg'}>
                  {dataDetail.policy}
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
                    <ListItem>Product</ListItem>
                    <ListItem>Section</ListItem>{' '}
                    <ListItem>Size</ListItem>
                  </List>
                  <List spacing={2}>
                    <ListItem>{dataDetail.product}</ListItem>
                    <ListItem>{dataDetail.section}</ListItem>
                    <ListItem>{dataDetail.size}</ListItem>
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
                      Between lugs:
                    </Text>{' '}
                    20 mm
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Bracelet:
                    </Text>{' '}
                    leather strap
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Case:
                    </Text>{' '}
                    Steel
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Case diameter:
                    </Text>{' '}
                    42 mm
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                      Dial color:
                    </Text>{' '}
                    Black
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                     Manufacture
                    </Text>{' '}
                   {dataDetail.Manufacture}
                  </ListItem>
                  <ListItem>
                    <Text as={'span'} fontWeight={'bold'}>
                     Country
                    </Text>{' '}
                   {dataDetail.country}
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
          
              textTransform={'uppercase'}
              _hover={{
                transform: 'translateY(2px)',
                boxShadow: 'lg',
              }}    onClick={()=>{setId(dataDetail)}} >
              Add to cart
            </Button>
  
            <Stack direction="row" alignItems="center" justifyContent={'center'}>
              <MdLocalShipping />
              <Text>2-3 business days delivery</Text>
            </Stack>
          </Stack>
        </SimpleGrid>
      </Container>
 
      </>
    );
  }