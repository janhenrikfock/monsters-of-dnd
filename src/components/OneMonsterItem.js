import React from 'react'
import styled from 'styled-components'

export default function OneMonsterItem({ monster, index }) {
  return (
    <ContainerStyled>
      <MonsterNameStyled>{monster.name}</MonsterNameStyled>
      <ContainerTypeCR>
        <ParagraphType>Type</ParagraphType>
        <ParagraphCR>1/8</ParagraphCR>
      </ContainerTypeCR>
    </ContainerStyled>
  )
}
const ContainerStyled = styled.div`
  width: 70%;
  margin-left: 15%;
`
const MonsterNameStyled = styled.h2`
  font-size: 100%;
  text-align: left;
  padding: 10px;
  margin: 0;
  vertical-align: bottom;
  border-bottom: 4px solid var(--highlightred);
  border-left: 4px solid var(--highlightred);
`
const ContainerTypeCR = styled.div`
  display: flex;
  padding: 0;
`
const ParagraphType = styled.p`
  flex: 1 1;
  padding: 10px;
  margin: 0;
  text-align: left;
`
const ParagraphCR = styled.p`
  flex: 1 1;
  padding: 10px;
  margin: 0;
  text-align: right;
`
