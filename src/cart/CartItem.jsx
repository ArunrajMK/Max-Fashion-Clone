import { CloseButton, Flex, Link, Select, } from '@chakra-ui/react'
import * as React from 'react'
import { PriceTag } from './PriceTag'
import { CartProductMeta } from './CartProductMeta'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { deleteCart } from '../Data/action'
import { useEffect } from 'react'


const QuantitySelect = () => {
 
  return (
    <Select
      maxW="64px"
      aria-label="Select quantity"
     
    >
      <option value="1">1</option>
      <option value="2">2</option>
      <option value="3">3</option>
      <option value="4">4</option>
    </Select>
  )
}

export const CartItem = (item) => {
  const [quant, setQuant] = useState(0)
  const [id, setId] = useState("")
  const dispatch = useDispatch()


useEffect(()=>{
  if(id){
    dispatch(deleteCart(id))
    window.location.reload();
  }
 
},[id,dispatch])
  




  return (
    <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center">
      <CartProductMeta
        name={item.product}
        description={item.price}
        image={item.img}
        isGiftWrapping=""
      />

      {/* Desktop */}
      <Flex width="full" justify="space-between" display={{ base: 'none', md: 'flex' }}>
        <QuantitySelect
          value={quant}
          onChange={(e) =>{setQuant(e.target.value)}}
        />
        <PriceTag price="100" currency="200" />
        <CloseButton onClick={()=>setId(item.id)}  />
      </Flex>

      {/* Mobile */}
      <Flex
        mt="4"
        align="center"
        width="full"
        justify="space-between"
        display={{ base: 'flex', md: 'none' }}
      >
        <Link fontSize="sm" textDecor="underline">
          Delete
        </Link>
        <QuantitySelect
          value={quant}
          onChange={(e) =>{setQuant(e.target.value)}}
        />
        <PriceTag price="xx" currency="xx" />
      </Flex>
    </Flex>
  )
}