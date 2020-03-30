import React from 'react'
import styled from 'styled-components'
import { format } from 'date-fns'

const Wrapper = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 10px 0;
`

const Heart = styled.img`
  max-width: 20px;
  margin: 0 5px;
`

const Footer = () => {
  return (
    <Wrapper>
      <span>Nils Nilsson</span>
      <Heart src="/images/heart.png" alt="heart-emjoi" />
      <span>{format(new Date(), 'yyyy')}</span>
    </Wrapper>
  )
}

export default Footer
