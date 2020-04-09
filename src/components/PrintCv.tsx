import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  max-width: 600px;
  font-size: 25px;
  color: rgb(41, 41, 41);
  padding: 70px 0;

  @media print {
    display: none;
  }
`

const Button = styled.button`
  background: rgb(250, 250, 250);
  border: 1px solid rgb(41, 41, 41);
  cursor: pointer;
  padding: 20px;
  transition: all 0.1s ease-in;

  &:focus {
    outline: none;
  }

  &:hover {
    background: rgb(41, 41, 41);
    color: rgb(250, 250, 250);
  }
`

const print = () => {
  window.print()
}

const PrintCv = () => {
  return (
    <Wrapper>
      <p>Need a traditional CV?</p>
      <Button onClick={print}>DOWNLOAD PDF</Button>
    </Wrapper>
  )
}

export default PrintCv
