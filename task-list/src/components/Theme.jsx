import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: 'Roboto, sans-serif',
        backgroundColor: '#f5f5f5',
        color: '#333',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
      },
    },
  },
  components: {
    App: {
      maxW: '600px',
      width: '100%',
      margin: '20px auto',
      padding: '20px',
      bgColor: 'white',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      borderRadius: '10px',
      textAlign: 'center',
      opacity: 0,
      transform: 'translateY(-20px)',
      animation: 'fadeInUp 0.5s ease forwards',
    },
    Header: {
      bgColor: '#aeb6bf',
      color: 'white',
      padding: '20px',
      borderRadius: '10px 10px 0 0',
    },
    h1: {
      margin: 0,
      fontSize: '36px',
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
      margin: '15px 0',
      padding: '20px',
      borderRadius: '12px',
      boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
      transition: 'transform 0.3s ease, box-shadow 0.3s ease, background-color 0.3s ease',
      _hover: {
        transform: 'scale(1.05)',
        boxShadow: '0 8px 16px rgba(0, 0, 0, 0.2)',
        bgColor: '#f0f0f0',
      },
    },
    button: {
      bgColor: '#95a5a6',
      color: 'white',
      border: 'none',
      padding: '12px 20px',
      fontSize: '16px',
      cursor: 'pointer',
      borderRadius: '6px',
      transition: 'background-color 0.3s ease, transform 0.3s ease',
      _hover: {
        bgColor: '#7f8c8d',
        transform: 'scale(1.1)',
      },
    },
    input: {
      margin: '8px',
      padding: '8px',
      fontSize: '16px',
      border: '1px solid #ccc',
      borderRadius: '4px',
      transition: 'border-color 0.3s ease',
      _focus: {
        borderColor: '#aeb6bf',
      },
    },
    showDescriptionButton: {
      bgColor: '#bdc3c7',
      color: 'white',
      border: 'none',
      padding: '8px 12px',
      fontSize: '14px',
      cursor: 'pointer',
      borderRadius: '6px',
      marginTop: '8px',
      transition: 'background-color 0.3s ease, transform 0.3s ease',
      _hover: {
        bgColor: '#a5adad',
        transform: 'scale(1.1)',
      },
    },
    // Otros estilos y componentes según sea necesario
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
