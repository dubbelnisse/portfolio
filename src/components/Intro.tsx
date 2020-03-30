import React from 'react'
import styled from 'styled-components'
import SocialLinks from './SocialLinks'

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

  &:hover {
    animation: wave 500ms ease-in-out;
    transform: rotateZ(0);
  }

  @keyframes wave {
    0% {
      transform: rotateZ(0);
    }
    25% {
      transform: rotateZ(12deg);
    }
    75% {
      transform: rotateZ(-12deg);
    }
    100% {
      transform: rotateZ(0);
    }
  }
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
    text-align: center;
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
        <Wave src="/images/wave.png" alt="wave-emjoi" />
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
          <SocialLinks />
        </div>
        <MeWrapper>
          <Me src="/images/me.jpg" alt="Nils Nilsson" />
        </MeWrapper>
      </Content>
    </>
  )
}

export default Intro
