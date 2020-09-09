import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

export default function OneMonsterItem({ monster }) {
  return (
    <Link to={'/monster/' + monster.index}>
      <ContainerStyled>
        <MonsterNameStyled>{monster.name}</MonsterNameStyled>
        <ContainerTypeCR>
          <ParagraphType>{monster.type}</ParagraphType>
          <ParagraphCR>{monster.challenge_rating}</ParagraphCR>
        </ContainerTypeCR>
      </ContainerStyled>
    </Link>
  )
}
const ContainerStyled = styled.div`
  width: 70%;
  border-radius: 12px;
  margin: 10px 15%;
`
const MonsterNameStyled = styled.h2`
  font-size: 80%;
  font-weight: 1000;
  text-align: left;
  margin: 0;
  vertical-align: text-bottom;
  border-bottom: 2px solid #f50808;
  border-left: 2px solid #f50808;
  line-height: min-content;
`
const ContainerTypeCR = styled.div`
  display: flex;
`
const ParagraphType = styled.p`
  font-size: 80%;
  flex: 1 1;
  margin: 0;
  text-align: left;
`
const ParagraphCR = styled.p`
  font-size: 80%;
  flex: 1 1;
  margin: 0;
  text-align: right;
`
