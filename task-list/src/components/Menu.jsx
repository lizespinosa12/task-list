import React from 'react';
import { Link } from 'react-router-dom';
import { Box, Text } from '@chakra-ui/react';

function Menu() {
  return (
    <nav>
      <Box mt={4} mb={4}>
        <Text fontSize="lg">
          <Link to="/">Home</Link>
        </Text>
        <Text fontSize="lg">
          <Link to="/tareas">Tareas</Link>
        </Text>
        <Text fontSize="lg">
          <Link to="/sobre-nosotros">Sobre Nosotros</Link>
        </Text>
      </Box>
    </nav>
  );
}

export default Menu;
