import { Avatar, Flex, Menu, Button, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import React from 'react'

function Profile() {
  return (
  <Flex>
   <Menu>
    <MenuButton
    as={Button}
    rounded="full"
    variant="link"
    cursor="pointer"
    minW={0}
    >
     <Avatar name="Dan Abrahmov"/>
    </MenuButton>
    <MenuList zIndex={10000}>
<MenuItem>Cart</MenuItem>
<MenuItem>Your Order</MenuItem>
<MenuItem>Login</MenuItem>
<MenuItem>Logout</MenuItem>
    </MenuList>
   </Menu>
  </Flex>
  )
}

export default Profile


//portal