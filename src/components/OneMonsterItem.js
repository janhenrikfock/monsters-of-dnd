import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import listlogo from './images/list.png'

export default function OneMonsterItem({ monster }) {
  return (
    <ComponentContainer>
      <Container>
        <MonsterNameStyled>{monster.name}</MonsterNameStyled>
        <ContainerTypeCR>
          <ParagraphType>{monster.type}</ParagraphType>
          <ParagraphCR>CR: {monster.challenge_rating}</ParagraphCR>
        </ContainerTypeCR>
      </Container>
      <NavLink to={'/monster/' + monster.index}>
        <DetailLink src={listlogo} alt="view details" />
      </NavLink>
    </ComponentContainer>
  )
}
const ComponentContainer = styled.div`
  display: flex;
  padding: 2px;
  align-items: center;
`

const Container = styled.div`
  width: 100%;
  margin: 4px 0;
  padding: 10px;
  display: inline-block;
  text-decoration: none;
  color: var(--textblack);
  border-bottom: 1px solid #d0d0cd;
`
const MonsterNameStyled = styled.h2`
  color: #262626;
  font-size: 100%;
  text-align: left;
  margin: 0 0 7px 0;
  vertical-align: text-bottom;
  font-family: serif;
  line-height: min-content;
  padding-left: 2px;
`
const ContainerTypeCR = styled.div`
  display: flex;
`
const ParagraphType = styled.p`
  text-transform: capitalize;
  font-size: 15px;
  flex: 1 1;
  margin: 0;
  padding-left: 2px;
  text-align: left;
  border-left: 2px solid #ffffff;
`
const ParagraphCR = styled.p`
  font-size: 15px;
  flex: 1 1;
  margin: 0;
  text-align: right;
  text-decoration: none;
`
const DetailLink = styled.img`
  max-height: 50px;
  max-width: 50px;
  /* background: lightgrey; */
  border: 2px solid var(--highlightcolor);
  border-radius: 6px;
  padding: 10px;
  margin: 5px 10px;
  color: white;
`
