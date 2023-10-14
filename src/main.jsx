import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { HeroesApp } from './HeroesApp.jsx';
import { ChakraProvider } from '@chakra-ui/react';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ChakraProvider>
      <HeroesApp />
    </ChakraProvider>
  </React.StrictMode>
);
