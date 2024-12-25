import React from 'react'
import styled from "styled-components";
import { 
    TextField,
    Button
  } from '@mui/material'
  import SearchIcon from '@mui/icons-material/Search';

const Wraper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  width: 530px;
`

const Input = styled(TextField)`
  width: 100%;
`

const WraperSearchIcon = styled.div`
  position: absolute;
  right: 0;
  background: var(--primary-color);
  padding: 3px 26px;
  border: 1px solid #ccc;
  cursor: pointer;
`



const Search = () => {
  return (
    <Wraper>
      <Input 
      size="small" 
      placeholder='Tìm Kiếm Sản Phẩm ...' />
      <WraperSearchIcon>
        <SearchIcon />
      </WraperSearchIcon>
    </Wraper>
  )
}

export default Search
