import React from 'react'
import styled from "styled-components";
import logo from "../../../assets/img/logo.png"


const ImgStyle = styled.img`
  width: 203px;
  height: 70px
`

const Wraper = styled.div`

`

const Logo = () => {
  return (
    <Wraper>
      <ImgStyle src={logo} />
    </Wraper>
  )
}

export default Logo
