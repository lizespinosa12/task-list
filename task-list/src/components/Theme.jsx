import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  config: {
    initialColorMode: 'light',
    useSystemColorMode: true,
  },
  styles: {
    global: {
      body: {
        fontFamily: 'Roboto, sans-serif',
        minHeight: '100vh',
        bg: 'gray.100', // Cambiar a tu color de fondo preferido
        color: 'gray.700', // Cambiar a tu color de texto preferido
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      },
    },
  },
  components: {
    App: {
      maxW: '600px',
      width: '100%',
      margin: '20px auto',
      p: '20px',
      bgColor: 'white',
      boxShadow: 'lg', // Cambiar a tu sombra preferida
      borderRadius: 'xl', // Cambiar a tu borde redondeado preferido
      textAlign: 'center',
      opacity: 0,
      transform: 'translateY(-20px)',
      animation: 'fadeInUp 0.5s ease forwards',
    },
    Header: {
      bgColor: 'teal.500', // Cambiar a tu color de fondo preferido
      color: 'white',
      p: '20px',
      borderRadius: 'xl', // Cambiar a tu borde redondeado preferido
    },
    h1: {
      m: 0,
      fontSize: '2xl', // Cambiar a tu tamaño de fuente preferido
      color: 'white',
      letterSpacing: '2px',
    },
    ul: {
      listStyleType: 'none',
      padding: 0,
      margin: 0,
    },
    li: {
      bgColor: 'white',
      my: '15px',
      p: '20px',
      borderRadius: 'lg', // Cambiar a tu borde redondeado preferido
      boxShadow: 'md', // Cambiar a tu sombra preferida
      transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
      _hover: {
        transform: 'scale(1.05)',
        boxShadow: 'xl', // Cambiar a tu sombra preferida en hover
        bgColor: 'gray.200', // Cambiar a tu color de fondo preferido en hover
      },
    },
    button: {
      bgColor: 'teal.400', // Cambiar a tu color de fondo preferido
      color: 'white',
      border: 'none',
      p: '12px 20px',
      fontSize: 'md', // Cambiar a tu tamaño de fuente preferido
      cursor: 'pointer',
      borderRadius: 'md', // Cambiar a tu borde redondeado preferido
      transition: 'background-color 0.3s ease, transform 0.3s ease',
      _hover: {
        bgColor: 'teal.300', // Cambiar a tu color de fondo preferido en hover
        transform: 'scale(1.1)',
      },
    },
    input: {
      m: '8px',
      p: '8px',
      fontSize: 'md', // Cambiar a tu tamaño de fuente preferido
      border: '1px solid',
      borderColor: 'gray.300', // Cambiar a tu color de borde preferido
      borderRadius: 'md', // Cambiar a tu borde redondeado preferido
      transition: 'border-color 0.3s ease',
      _focus: {
        borderColor: 'teal.400', // Cambiar a tu color de borde preferido al enfocar
      },
    },
    showDescriptionButton: {
      bgColor: 'gray.300', // Cambiar a tu color de fondo preferido
      color: 'white',
      border: 'none',
      p: '8px 12px',
      fontSize: 'sm', // Cambiar a tu tamaño de fuente preferido
      cursor: 'pointer',
      borderRadius: 'md', // Cambiar a tu borde redondeado preferido
      mt: '8px',
      transition: 'background-color 0.3s ease, transform 0.3s ease',
      _hover: {
        bgColor: 'gray.200', // Cambiar a tu color de fondo preferido en hover
        transform: 'scale(1.1)',
      },
    },
  },
  animations: {
    fadeInUp: {
      to: {
        opacity: 1,
        transform: 'translateY(0)',
      },
    },
  },
});

export default theme;
