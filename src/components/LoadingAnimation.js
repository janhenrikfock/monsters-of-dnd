import React from 'react'
import styled from 'styled-components/macro'

export default function LoadingAnimation() {
  return (
    <LoaderContainer>
      <Loading>Loading...</Loading>
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
  left: 40%;
  z-index: 100;
  position: absolute;
`
const Loading = styled.p`
  font-size: 40px;
  top: 30%;
  left: 20%;
  z-index: 100;
  position: absolute;
`
