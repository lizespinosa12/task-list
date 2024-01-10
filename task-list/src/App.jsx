import React from 'react';
import './styles/styles.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ChakraProvider, CSSReset, Box, Container } from '@chakra-ui/react';

import Header from './components/Header';
import Home from './components/Home';
import Tareas from './components/Tareas';
import SobreNosotros from './components/SobreNosotros';

function App() {
  return (
    <ChakraProvider>
      <CSSReset />
      <Router>
        <Box textAlign="center" fontSize="xl">
          <Header />
          <Container maxW="600px" mt={10}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/tareas" element={<Tareas />} />
              <Route path="/sobre-nosotros" element={<SobreNosotros />} />
            </Routes>
          </Container>
        </Box>
      </Router>
    </ChakraProvider>
  );
}

export default App;
