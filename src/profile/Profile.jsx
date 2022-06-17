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
     <Avatar  h="50px" />
    </MenuButton>
    <MenuList zIndex={10000}>
<MenuItem>Notifications</MenuItem>
<MenuItem>Your Order</MenuItem>
<MenuItem>Settings</MenuItem>
<MenuItem>Logout</MenuItem>
    </MenuList>
   </Menu>
  </Flex>
  )
}

export default Profile


//portal