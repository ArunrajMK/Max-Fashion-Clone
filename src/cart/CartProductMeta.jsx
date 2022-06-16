import {
    Box,
    HStack,
    Icon,
    Image,
    Link,
    Stack,
    Text,
    useColorModeValue as mode,
  } from '@chakra-ui/react'
  import * as React from 'react'
import { useState } from 'react'
  import { FiGift } from 'react-icons/fi'
  
  
  
  export const CartProductMeta = (item) => {
  
    // React.useEffect(()=>{
      
    //   let tsum = item.price.reduce( (previousValue, currentValue, currentIndex, array) => previousValue + currentValue, 0 )
    
    //   console.log("Total",tsum)
   
    //   },[item.price])
      

  const [isGiftWrapping] = React.useState(true)
    return (
      <Stack direction="row" spacing="5" width="full">
       

        <Image
          rounded="lg"
          width="120px"
          height="120px"
          fit="cover"
          src={item.image}
          alt=""
          draggable="false"
          loading="lazy"
        />
        <Box pt="4">
          <Stack spacing="0.5">
            <Text fontWeight="medium">{item.name}</Text>
            <Text color={mode('gray.600', 'gray.400')} fontSize="sm">
            ₹ {item.description}
            </Text>
          </Stack>
          {isGiftWrapping && (
            <HStack spacing="1" mt="3" color={mode('gray.600', 'gray.400')}>
              <Icon as={FiGift} boxSize="4" />
              <Link fontSize="sm" textDecoration="underline">
                Add gift wrapping
              </Link>
            </HStack>
          )}
        </Box>
      </Stack>
    )
  }