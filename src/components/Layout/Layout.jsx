import React from 'react';
import { Spinner } from '../Spinner';
import { Navbar } from '../NavBar';

export const Layout = ({ loading, children }) => (
  <div
    style={{
      padding: '20px',
    }}
  >
    <Navbar />
    {children}
    <Spinner loading={loading} />
  </div>
);

export default Layout;
