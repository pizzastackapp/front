import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { App } from '@app/App';
import { ApolloProvider } from '@apollo/client';
import { apolloClient } from '@app/core/apollo-client';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <ApolloProvider client={apolloClient}>
    <ToastContainer />
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </ApolloProvider>
);
