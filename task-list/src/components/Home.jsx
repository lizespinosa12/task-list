import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

function Home() {
  return (
    <Box>
      <Heading as="h2" size="xl" mt={6}>
        Bienvenido a ToDo App
      </Heading>
      <Text fontSize="lg" mt={4}>
        Con esta maravillosa herramienta podrás gestionar todas tus tareas diarias, semanales o mensuales según tus necesidades. ¡Organiza tu vida y tu
        tiempo de la manera más eficiente!
      </Text>
    </Box>
  );
}

export default Home;
