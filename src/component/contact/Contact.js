import React from 'react'
import styled from 'styled-components';

const WraperTitle = styled.div`
  background: var(--primary-color);
  display: flex;
  justify-content: center;
  height: 30px
`

const Title =styled.div`
  display: flex;
  align-items: center;
  min-width: 1200px;
  max-width: 1400px;
  padding: 0 15px;
  color: var(--white-color);
  font-size: 14px;
  line-height: 1.45;
  font-weight: 400
`

const Contact = () => {
  return (
    <WraperTitle>
      <Title>Hotline: 1900.2037 - CSKH: 02.8888.10037 (24/24) | Liên hệ đại lý: 0948.196.196
      </Title>
    </WraperTitle>
  )
}

export default Contact
