import React from 'react';
    import ReactDOM from 'react-dom/client';
    import { BrowserRouter } from 'react-router-dom';
    import App from '@/App';
    import '@/index.css';
    import { Toaster } from '@/components/ui/toaster';
    import ScrollToTop from '@/components/layout/ScrollToTop';

    ReactDOM.createRoot(document.getElementById('root')).render(
      <React.StrictMode>
        <BrowserRouter>
          <ScrollToTop />
          <App />
          <Toaster />
        </BrowserRouter>
      </React.StrictMode>
    );