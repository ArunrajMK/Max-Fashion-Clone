import { HStack, StackProps, Text, TextProps, useColorModeValue as mode } from '@chakra-ui/react'
import * as React from 'react'

// interface PriceTagProps {
//   currency: string
//   price: number
//   salePrice?: number
//   rootProps?: StackProps
//   priceProps?: TextProps
//   salePriceProps?: TextProps
// }

// export type FormatPriceOptions = { locale?: string; currency?: string }

export function formatPrice() {
 
}

export const PriceTag = (PriceTagProps) => {
 
  return (
    <HStack spacing="1" >
    xxx
    </HStack>
  )
}



const Price = (PriceProps) => {
 
 
  
  return (
    <Text
      as="span"
      fontWeight="medium"
      color={""}
      textDecoration={"xxx"}>
      xxx
    </Text>
  )
}

const SalePrice = ( TextProps) => (
  <Text as="span" fontWeight="semibold" color={mode('gray.800', 'gray.100')}  />
)