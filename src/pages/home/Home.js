import React from 'react'
import { 
  Header,
  Content,
  Footer,
  Contact,
  Sidebar } from '../../component';
import styled from 'styled-components';
import { Grid } from '@mui/material';

const ContactWrapper = styled.div`

`

const WraperContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`

const Home = () => {
  return (
    <Grid container>
      <Grid item xs={12}>
        <Contact />
      </Grid>
      <Grid item xs={12}>
        <Header />
      </Grid>
      <Grid item xs={3} spacing={2}>
        <Sidebar />
      </Grid>
      <Grid item xs={9}>
        <Content />
      </Grid>
      <Grid item xs={12}>
        <Footer />
      </Grid>
    </Grid>
  )
}

export default Home
