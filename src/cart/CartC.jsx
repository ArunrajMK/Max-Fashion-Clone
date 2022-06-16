
 
import {
    Box,
    Flex,
    Heading,
    HStack,
    Link,
    Stack,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import * as React from 'react'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getCart } from '../Data/action'
  import { CartItem } from './CartItem'
  import { CartOrderSummary } from './CartOrderSummary'
  

 
  export const CartC = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const cart = useSelector((state)=>state.data.cart)
    const [cartLength,setCartLength] = React.useState()
    let Tsum =  cart.reduce((accumulator, current) => accumulator + current.price, 0)
    const [total, setTotal] = React.useState(Tsum)
   
    React.useEffect(()=>{
      if(total){
        setTotal(Tsum)
      }
    },[total,Tsum])



    useEffect(()=>{
      setCartLength(cart.length)
    },[dispatch,cart.length])
   
    



    React.useEffect(()=>{
        dispatch(getCart())
      },[dispatch])

     

    

const handleClick = ()=>{
  navigate("/")
}


// previousValue + currentValue, 10

return(
  <>
 
    <Box
  
 
      maxW={{ base: '3xl', lg: '7xl' }}
      mx="auto"
      px={{ base: '4', md: '8', lg: '12' }}
      py={{ base: '6', md: '8', lg: '12' }}
    >
      <Stack
        direction={{ base: 'column', lg: 'row' }}
        align={{ lg: 'flex-start' }}
        spacing={{ base: '8', md: '16' }}
      >
        <Stack spacing={{ base: '8', md: '10' }} flex="2">
          <Heading fontSize="2xl" fontWeight="extrabold">
            Shopping Cart have {cartLength} items
          </Heading>
  
          <Stack spacing="6">
            {cart.map((item) => (
              <CartItem key={item.id} {...item} />
            ))}
          </Stack>
        </Stack>
  
        <Flex direction="column" align="center" flex="1">
       
          <CartOrderSummary  />

          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <Link color={mode('blue.500', 'blue.200')} onClick={handleClick}>Continue shopping</Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
   </>
  )
}

