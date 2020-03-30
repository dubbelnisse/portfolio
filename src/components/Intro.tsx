import React from 'react'
import styled from 'styled-components'

const Content = styled.div`
  display: grid;
  grid-template-columns: 1fr 300px;
  grid-column-gap: 20px;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`

const WaveWrapper = styled.div`
  padding: 30px 0;
`

const Wave = styled.img`
  max-width: 50px;
`

const Greetings = styled.h1`
  font-size: 70px;
  color: rgb(41, 41, 41);
  margin-top: 0;
`

const About = styled.p`
  font-size: 25px;
  color: rgb(41, 41, 41);
`

const MeWrapper = styled.div`
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
  }
`

const Me = styled.img`
  border-radius: 50%;
  max-width: 300px;
`

const GrayText = styled.span`
  color: rgb(199, 199, 199);
`

const Intro = () => {
  return (
    <>
      <WaveWrapper>
        <Wave src="/images/wave.png" alt="wave" />
      </WaveWrapper>
      <Content>
        <div>
          <Greetings>
            Hey<GrayText>,</GrayText>
          </Greetings>
          <About>
            My name is <strong>Nils</strong> and I'm a{' '}
            <strong>developer</strong> based in{' '}
            <strong>Stockholm, Sweden</strong>.
          </About>
        </div>
        <MeWrapper>
          <Me src="/images/me.jpg" alt="Nils Nilsson" />
        </MeWrapper>
      </Content>
    </>
  )
}

export default Intro
