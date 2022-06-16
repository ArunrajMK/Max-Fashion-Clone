import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
  List,
  ListItem,
  Button,
  Input,
  Select,
  RadioGroup,
  Radio,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import {
  IoAnalyticsSharp,
  IoLogoBitcoin,
  IoSearchSharp,
} from 'react-icons/io5';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';



const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex
        w={8}
        h={8}
        align={'center'}
        justify={'center'}
        rounded={'full'}
        bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

export default function PaymentPage() {
  const navigate = useNavigate()
  const cart = useSelector((state)=>state.data.cart)
    let Tsum =  cart.reduce((accumulator, current) => accumulator + current.price, 0)
    const [total, setTotal] = useState(Tsum)
   
    useEffect(()=>{
      if(total){
        setTotal(Tsum)
      }
    },[total,Tsum])

const handleChange = ()=>{
  alert("Payment success")
  navigate("/")

}


  return (
    <Container maxW={'8xl'} py={12}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Stack spacing={4}>
          <Text
          
          
            fontWeight={600}
            fontSize={'xl'}
        
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
          Select a shipping method
          </Text>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                  
                    <Button><ListItem>Home Delivery</ListItem></Button>
                  </List>
                  <List spacing={2}>
                    <Button><ListItem>Collect from shop</ListItem></Button>
                  </List>
                </SimpleGrid>
          
         
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }>
            <Text fontWeight={600} fontSize={25}>Add your shipping address</Text>
         
            <Input placeholder='Full Name'  />
            <Input placeholder='Mobile Number'  />
            <Input placeholder='Pincode' />
            <Input placeholder='City' />
            <Input placeholder='State' />
            <Input placeholder='Building name or number' />
            <Input placeholder='Street name or number' />
            <Input placeholder='Landmark' />
          </Stack>
          <Stack
            spacing={4}
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }>
            <Text fontWeight={600} fontSize={25}>Select a payment method</Text>
            <RadioGroup  >
       <Stack direction='row'>
        <Radio value='1'>Credit</Radio>
        <Radio value='2'>Debit</Radio>
       
       </Stack>
       </RadioGroup>

            <Input placeholder='Card Number'  />
            <Input placeholder='Name on Card'  />
            <Input  type="date" />
           
            
            <Button onClick={handleChange}>Pay Now</Button>
          </Stack>
        </Stack>
        
        <Flex>
        <Stack
            spacing={4}
            marginLeft="160px"
            divider={
              <StackDivider
                borderColor={useColorModeValue('gray.100', 'gray.700')}
              />
            }>
            <Text fontWeight={600} fontSize={25}>Payment summery</Text>
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
                  <List spacing={2}>
                  
                  <ListItem>Sub Total</ListItem>
                  <ListItem>Standard Ground Shipping</ListItem>
                  <ListItem>Grand Total</ListItem>
                  </List>
                  <List spacing={2}>
                  <ListItem>₹ {total}</ListItem>
                  <ListItem>Free</ListItem>
                  <ListItem>₹ {total}</ListItem>
                  </List>
                </SimpleGrid>
            
          </Stack>
          
        </Flex>
       
        
      </SimpleGrid>
    </Container>
  );
}