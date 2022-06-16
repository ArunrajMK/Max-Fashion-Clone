import { CloseIcon, HamburgerIcon } from "@chakra-ui/icons";
import { Box, Button, Flex,  IconButton, Image, Input, Stack, Text, useBreakpointValue, useColorModeValue, useDisclosure } from "@chakra-ui/react";
import { useEffect } from "react";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom'
import { Link } from "react-router-dom";
import { getData } from "../Data/action";


export function Navbar({categoryHandler,mensHandler,girlsHandler,boysHandler,categoryValues,handleIcon}) {
  const cart = useSelector((state)=>state.data.cart)
  const [cartLength, setCartLength] = useState(cart.length)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [query,setQuery] = useState("")

  

  useEffect(()=>{
    if(query){
      const payload = {
        q:query
       }
      dispatch(getData(payload))
    }
  },[query,dispatch])
  



useEffect(()=>{
  if(cart){
    setCartLength(cart.length)
  }
},[cart])


    const { isOpen, onToggle } = useDisclosure();

    return (
      <>
      <Box>
       
        <Flex
          bg={useColorModeValue('white', 'gray.800')}
          color={useColorModeValue('gray.600', 'white')}
          minH={'60px'}
          py={{ base: 2 }}
          px={{ base: 4 }}
          borderBottom={1}
          borderStyle={'solid'}
          borderColor={useColorModeValue('gray.200', 'gray.900')}
          align={'center'}>
          <Flex
            flex={{ base: 1, md: 'auto' }}
            ml={{ base: -2 }}
            display={{ base: 'flex', md: 'none' }}>
            <IconButton
              onClick={onToggle}
              icon={
                isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
              }
              variant={'ghost'}
              aria-label={'Toggle Navigation'}
            />
          </Flex>
          <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
            <Image src="https://www.landmarkgroup.com/int/sites/default/files/Brand-logo/New%20Max%20Logo-%20Eng%20With%20Outline_1.png"
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'} height={"8"}
              color={useColorModeValue('gray.800', 'white')}
              onClick={handleIcon}
               />
             
           
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}
              marginLeft={5} onClick={categoryHandler} style={{cursor:'pointer'}} >
            
            Womens
            </Text>
           
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}
              marginLeft={5} onClick={boysHandler}  style={{cursor:'pointer'}}>
               Mens
            </Text>

            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}
              marginLeft={5} onClick={categoryHandler} style={{cursor:'pointer'}}>
               Girls
            </Text>
           
            <Text
              textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
              fontFamily={'heading'}
              color={useColorModeValue('gray.800', 'white')}
              marginLeft={5} onClick={boysHandler} style={{cursor:'pointer'}}>
                  Boys
            </Text>
        
          </Flex>

         <Input onChange={(e)=>setQuery(e.target.value)} placeholder="What are you looking for?" w="600px" marginRight="100px" />
          <Stack
            flex={{ base: 1, md: 0 }}
            justify={'flex-end'}
            direction={'row'}
            spacing={5}>
           <Text
             
              fontFamily={'heading'}
            
              marginLeft={5}  style={{cursor:'pointer'}}>
                SignUp
            </Text>
            <Text
          
              fontFamily={'heading'}
            
              marginLeft={5}  style={{cursor:'pointer'}}>
                 SignIn
            </Text>
        
            <Text>
                <Link to="./cart"><Text>Cart:{cartLength}</Text></Link>
            </Text>
          </Stack>
        </Flex>
     
       
      </Box>






{/* //---------------2nd nav------------------------------// */}




<Box>
       
<Flex
  bg={useColorModeValue('white', 'gray.800')}
  color={useColorModeValue('gray.600', 'white')}
  h={'40px'}
  py={{ base: 2 }}
  px={{ base: 4 }}
  borderBottom={1}
  borderStyle={'solid'}
  borderColor={useColorModeValue('gray.200', 'gray.900')}
  align={'center'}>
  <Flex
    flex={{ base: 1, md: 'auto' }}
    ml={{ base: -2 }}
    display={{ base: 'flex', md: 'none' }}>
    <IconButton
      onClick={onToggle}
      icon={
        isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />
      }
      variant={'ghost'}
      aria-label={'Toggle Navigation'}
    />
  </Flex>
  <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
    <Image src=""
      textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
      fontFamily={'heading'} height={"8"}
      color={useColorModeValue('gray.800', 'white')}
       />
     
   
    <Text
      textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
      fontFamily={'heading'}
      color={useColorModeValue('gray.800', 'white')}
      marginLeft={5}  style={{cursor:'pointer'}} >
    
   
    </Text>
   
    <Text
      textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
      fontFamily={'heading'}
      color={useColorModeValue('gray.800', 'white')}
      marginLeft={5}   style={{cursor:'pointer'}}>
      9999
    </Text>

    <Text
      textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
      fontFamily={'heading'}
      color={useColorModeValue('gray.800', 'white')}
      marginLeft={5}  style={{cursor:'pointer'}}>
       oooo
    </Text>
   
    <Text
      textAlign={useBreakpointValue({ base: 'center', md: 'left' })}
      fontFamily={'heading'}
      color={useColorModeValue('gray.800', 'white')}
      marginLeft={5}  style={{cursor:'pointer'}}>
        vvvv
    </Text>

  </Flex>

  <Stack
    flex={{ base: 1, md: 0 }}
    justify={'flex-end'}
    direction={'row'}
    spacing={6}>
   
    <Text>
       
    </Text>
  </Stack>
</Flex>


</Box>
</>
    );
  }
