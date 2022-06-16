// import React, { useEffect } from 'react'
// import { useDispatch, useSelector } from 'react-redux'
// import { getCart } from '../Data/action'

// function Cart() {
//     const cart = useSelector((state)=>state.data.cart)
//     const dispatch = useDispatch()
//     useEffect(()=>{
//       dispatch(getCart())
//     },[dispatch])
//   console.log("cart_check",cart)
//   return (
//  <>
 
 
 
//  </>
//   )
// }

// export default Cart





// import { ReactElement } from 'react';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getCart } from '../Data/action'
import {

  SimpleGrid,
  Image,

 
  Text,
  Stack,
  StackDivider,
  
  Button,

} from '@chakra-ui/react';




// const Feature = ({ text, icon, iconBg }) => {
//   return (
//     <Stack direction={'row'} align={'center'}>
//       <Flex
//         w={"1"}
//         h={"1"}
//         align={'center'}
//         justify={'center'}
//         rounded={'full'}
//         bg={iconBg}>
//         {icon}
//       </Flex>
//       <Text fontWeight={500}>{text}</Text>
//     </Stack>
//   );
// };

export default function Cart() {




  const cart = useSelector((state)=>state.data.cart)
 
      const dispatch = useDispatch()
      useEffect(()=>{
        dispatch(getCart())
      },[dispatch])

      


  return (
    <>
    {cart.map(data=>(
    <SimpleGrid marginLeft={10} key={data.id} maxW={'3xl'}  py={20} s={3}>
      <SimpleGrid columns={5}  spacing={10}>
        <Stack spacing={4}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Price: {data.price}
          </Text>
          <Text fontSize={20} fontWeight="30%">{data.product}</Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider/>
            }>
            <Text
            fontSize={'sm'}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Color: {data.color}
          </Text>
          <Text
          
            
            fontSize={'sm'}
            
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Section: {data.section}
          </Text>
          <Text
           
            
            fontSize={'sm'}
            
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Instruction: {data.instructions}
          </Text>
         
          </Stack>
        </Stack>
        <Stack
            spacing={4}
            divider={
              <StackDivider/>
            }>
          <Image
            rounded={'md'}
            alt={'feature image'}
            src={data.img}
            height={100}
            objectFit={'cover'}
          />
           <Button
            rounded={'none'}
            w={'full'}
            mt={1}
            size={'lg'}
            py={'7'}
        
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
            Buy
          </Button>
          <Button
            rounded={'none'}
            w={'full'}
            mt={1}
            size={'lg'}
            py={'7'}
        
            textTransform={'uppercase'}
            _hover={{
              transform: 'translateY(2px)',
              boxShadow: 'lg',
            }}>
            Remove
          </Button>  
          </Stack>
        
      </SimpleGrid>
     
    </SimpleGrid>
      ))}











    </>
    
  );
}





// Manufacture: "Lifestyle Int Pvt Ltd, 77 Degree Town Centre, Building No. 3, West Wing, Off HAL Airport Road, Yamlur, Bangalore-560037"
// color: "white"
// contact: "Manager Commercial,77 Degree Town Centre, Building No. 3, West Wing, Off HAL Airport Road, Yamlur PO., Bangalore-560037, Phone: 1800-123-1444, help.in@maxfashion.com"
// country: "India"
// discount: 30
// id: 8
// img: "https://lmsin.net/cdn-cgi/image/h=1125,w=1125,q=60,fit=cover/https://aaeff43fe32172cbcecc-ae2a4e9a8cbc330ede5588dedf56886e.lmsin.net/max/1000010551803-Multicolour-M-1000010551803-8272021_02-2100.jpg"
// instructions: "Machine Wash"
// overview: "An ideal pick for a casual wardrobe, this set of trendy t-shirts are designed with typographic prints, short sleeves and a crew neckline."
// policy: "This product is returnable within 30 days of delivery"
// price: 700
// product: "T-shirt"
// section: "boys"
// size: "S"
// type: "T-shirt"