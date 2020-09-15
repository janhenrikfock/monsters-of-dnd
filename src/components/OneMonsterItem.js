import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'

export default function OneMonsterItem({ monster }) {
  return (
    <NavLink to={'/monster/' + monster.index}>
      <ContainerStyled>
        <MonsterNameStyled>{monster.name}</MonsterNameStyled>
        <ContainerTypeCR>
          <ParagraphType>{monster.type}</ParagraphType>
          <ParagraphCR>{monster.challenge_rating}</ParagraphCR>
        </ContainerTypeCR>
      </ContainerStyled>
    </NavLink>
  )
}
const ContainerStyled = styled.div`
  width: 80%;
  border-radius: 10px;
  margin: 10px 10%;
  padding: 10px;
  display: inline-block;
  text-decoration: none;
  box-shadow: 0 2px 6px black;
  color: var(--textblack);
  background: linear-gradient(
    170deg,
    rgba(255, 255, 255, 1) 0%,
    rgba(234, 235, 238, 1) 100%
  );
`
const MonsterNameStyled = styled.h2`
  font-size: 80%;
  font-weight: 1000;
  text-align: left;
  margin: 0 0 7px 0;
  vertical-align: text-bottom;
  text-decoration: underline 2px #f50808;
  line-height: min-content;
  padding-left: 2px;
`
const ContainerTypeCR = styled.div`
  display: flex;
`
const ParagraphType = styled.p`
  text-transform: capitalize;
  font-size: 80%;
  flex: 1 1;
  margin: 0;
  padding-left: 2px;
  text-align: left;
  border-left: 2px solid #ffffff;
`
const ParagraphCR = styled.p`
  font-size: 80%;
  flex: 1 1;
  margin: 0;
  text-align: right;
  text-decoration: none;
`
