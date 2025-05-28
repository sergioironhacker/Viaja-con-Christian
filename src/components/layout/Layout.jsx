import React from 'react';
    import Navbar from '@/components/layout/Navbar';
    import Footer from '@/components/layout/Footer';

    const Layout = ({ children }) => {
      return (
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow container mx-auto px-4 pt-10 pb-8 md:pt-12">
            {children}
          </main>
          <Footer />
        </div>
      );
    };

    export default Layout;