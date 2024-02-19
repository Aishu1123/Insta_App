import { Flex,Box } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
   <Flex color="black">
    <Box>
        <Link to="/">Home</Link>
        <Link to="/post">Posts</Link>
        <Link to="/signup">Signup</Link>
        <Link to="/login">Login</Link>
        <Link to="/logout">Logout</Link>
    </Box>
   </Flex>
  )
}

export default Navbar