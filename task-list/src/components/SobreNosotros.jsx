import React from 'react';
import { Box, Text, UnorderedList, ListItem } from '@chakra-ui/react';

function SobreNosotros() {
  return (
    <Box>
      <Text>
        Esta aplicación te ayuda a gestionar tus tareas de manera eficiente. Sus funcionalidades son:
      </Text>
      <UnorderedList>
        <ListItem>Agregar, editar y eliminar tareas.</ListItem>
        <ListItem>Marcar tareas como completadas.</ListItem>
      </UnorderedList>
      <Text>
        Las tecnologías utilizadas para nuestra aplicación son React, React Router, React Icons, CSS, Chakra UI.
      </Text>
    </Box>
  );
}

export default SobreNosotros;
