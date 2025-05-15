import React from 'react';
import Header from './Header';
import Footer from './Footer';

type LayoutProps = {
  children: React.ReactNode;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
};

const Layout: React.FC<LayoutProps> = ({ children, isDarkMode, toggleDarkMode }) => {
  return (
    <div className={`${isDarkMode ? 'dark' : ''} min-h-screen flex flex-col`}>
      <div className="flex-grow bg-white dark:from-dark-950 dark:to-dark-900 transition-colors duration-300">
        <Header isDarkMode={isDarkMode} toggleDarkMode={toggleDarkMode} />
        <main>
          {children}
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Layout;