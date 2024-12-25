import React from 'react';
import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

const Wraper = styled.div`
`

const Layout = () => {
  return (
    <Wraper>
      <Outlet />
    </Wraper>
  );
};

export default Layout;