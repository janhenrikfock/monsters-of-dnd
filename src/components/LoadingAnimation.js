import React from 'react'
import styled from 'styled-components/macro'
import loadingspinner from './images/loadingspinner.gif'

export default function LoadingAnimation() {
  return (
    <LoaderContainer>
      <Image src={loadingspinner} alt="loading" />
    </LoaderContainer>
  )
}

const LoaderContainer = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;
`
const Image = styled.img`
  top: 30%;
  left: 20%;
  z-index: 100;
  position: absolute;
`
