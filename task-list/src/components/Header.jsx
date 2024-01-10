import React from 'react';
import Menu from './Menu';
import { Box, Heading } from '@chakra-ui/react';

function Header() {
  return (
    <Box p={4} bg="blue.500" color="white">
      <Heading as="h1" size="xl">
        ToDo App
      </Heading>
      <Menu />
    </Box>
  );
}

export default Header;
