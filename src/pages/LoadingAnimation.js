import React from 'react'
import styled from 'styled-components/macro'
import loadingbars from '../components/images/loadingbars.gif'

export default function LoadingAnimation() {
  return (
    <LoaderContainer>
      <Image src={loadingbars} alt="loading" />
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
  height: 80px;
  width: 100px;
  top: 35%;
  margin-left: 50%;
  left: -50px;
  z-index: 100;
  position: absolute;
`
