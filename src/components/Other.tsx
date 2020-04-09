import React from 'react'
import styled from 'styled-components'

const Wrapper = styled.div`
  display: none;
  font-size: 10pt;
  margin-bottom: 10mm;

  @media print {
    display: block;
  }
`

const H2 = styled.h2`
  margin: 30px 0;
  font-size: 14pt;
`

const Columns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`

const H3 = styled.h2`
  font-size: 12pt;
  margin-top: 0;
`

const Other = () => {
  return (
    <Wrapper>
      <H2>Other</H2>
      <Columns>
        <div>
          <H3>Drivers license</H3>
          <p>Yes! Swedish B-license</p>
        </div>
        <div>
          <H3>Language</H3>
          <p>Swedish, native language</p>
          <p>English, fluent</p>
        </div>
      </Columns>
    </Wrapper>
  )
}

export default Other
