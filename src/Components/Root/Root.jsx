import React, { use } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';
import Spinner from '../Spinner/Spinner';
import Footer from '../Footer/Footer';

const Root = () => {
  const {user,loading} = use(AuthContext)
  if (loading) {
    return <Spinner></Spinner>
  }
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Root;