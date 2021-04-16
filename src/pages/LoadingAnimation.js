import React from 'react'
import styled from 'styled-components/macro'
import loadingbars from '../components/images/loadingbars.gif'

export default function LoadingAnimation({ monsterDetails }) {
  const locallyLoadedMonsterNames = JSON.parse(
    localStorage.getItem('monsternames')
  )
  return (
    <LoaderContainer>
      <Image src={loadingbars} alt="loading" />
      <Progressbar
        min="0"
        value={monsterDetails.length}
        max={locallyLoadedMonsterNames ? locallyLoadedMonsterNames.length : '0'}
      ></Progressbar>
    </LoaderContainer>
  )
}
const LoaderContainer = styled.div`
  height: 100%;
  width: 100%;
  max-width: 750px;
`
const Image = styled.img`
  position: absolute;
  height: 80px;
  width: 100px;
  top: 35%;
  margin-left: 50%;
  left: -50px;
`
const Progressbar = styled.progress`
  position: absolute;
  top: 50%;
  width: 220px;
  margin-left: 50%;
  left: -110px;
`
