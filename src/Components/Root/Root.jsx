import React, { use } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router';
import { AuthContext } from '../../Context/AuthContext';

const Root = () => {
  const {user,loading} = use(AuthContext)
  if (loading) {
    return <span className="loading loading-spinner text-primary"></span>;
  }
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;