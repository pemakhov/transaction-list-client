import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import PropTypes from 'prop-types';
import './Layout.scss';

function Layout({ children }) {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  );
}

Layout.propTypes = {
  children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]).isRequired,
};

export default Layout;
