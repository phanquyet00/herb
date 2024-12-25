import React from 'react'
import { 
  Button,
  Typography, 
} from '@mui/material'
import styled from "styled-components";
import Logo from './logo/Logo';
import Search from './search/Search';
import Location from './location/Location';
import Account from "./account/Account";
import Cart from "./cart/Cart";

const WraperHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  height: 100px;
  padding: 15px 15px;
`

const ButtonNav = styled(Button)`
`;

const Header = () => {
  return (
    <div>
      <WraperHeader>
        <Logo />
        <Search />
        <Location />
        <Account />
        <Cart />
      </WraperHeader>
    </div>
  )
}

export default Header