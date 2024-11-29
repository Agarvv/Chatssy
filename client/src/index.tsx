import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'; 
import { Provider } from 'react-redux';  
import { apiStatusStore } from './store/apiStatus/apiStatusStore'; 

const queryClient = new QueryClient(); 

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={apiStatusStore}> 
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();