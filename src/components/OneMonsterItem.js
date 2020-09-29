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
          <ContainerTags>
            <TypeTag>{monster.type}</TypeTag>
            <AlignmentTag alignmentColors={monster.alignment}>
              {monster.alignment}
            </AlignmentTag>
          </ContainerTags>
          <ParagraphCR>CR: {monster.challenge_rating}</ParagraphCR>
        </ContainerTypeCR>
      </Container>
      <NavLink to={'/monster/' + monster.index}>
        <DetailLink src={listlogo} alt="view details" />
      </NavLink>
    </ComponentContainer>
  )
}
const tagColors = {
  unaligned: 'var(--unalignedcolor)',
  'lawful evil': 'var(--lawful-evilcolor)',
  'lawful good': 'var(--lawful-goodcolor)',
  'lawful neutral': 'var(--lawful-neutralcolor)',
  'neutral good': 'var(--neutral-goodcolor)',
  neutral: 'var(--neutralcolor)',
  'neutral evil': 'var(--neutral-evilcolor)',
  'chaotic good': 'var(--chaotic-goodcolor)',
  'chaotic neutral': 'var(--chaotic-neutralcolor)',
  'chaotic evil': 'var(--chaotic-evilcolor)',
}
const ComponentContainer = styled.div`
  display: flex;

  align-items: center;
`
const Container = styled.div`
  width: 100%;
  margin: 4px 0;
  padding: 10px;
  display: inline-block;
  color: var(--textblack);
  border-bottom: 1px solid var(--bordergrey);
`
const MonsterNameStyled = styled.h2`
  margin: 0 0 7px 0;
  padding: 3px;
  font-size: 20px;
  text-align: left;
  vertical-align: text-bottom;
  font-family: serif;
  line-height: min-content;
`
const ContainerTypeCR = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 3px;
  flex: 1 1 auto;
`
const ContainerTags = styled.div`
  display: flex;
`
const TypeTag = styled.p`
  margin: 2px;
  width: content-box;
  padding: 3px 8px;
  border-radius: 5px;
  text-transform: capitalize;
  font-size: 16px;
  text-align: left;
  border: 2px solid lightgreen;
`
const AlignmentTag = styled.p`
  margin: 2px;
  width: content-box;
  padding: 3px 8px;
  border: 2px solid ${({ alignmentColors }) => tagColors[alignmentColors]};
  border-radius: 5px;
  text-transform: capitalize;
  font-size: 16px;
  text-align: left;
`
const ParagraphCR = styled.p`
  font-size: 15px;
  margin: 0;
  text-align: right;
  text-decoration: none;
`
const DetailLink = styled.img`
  max-height: 50px;
  max-width: 50px;
  border-radius: 6px;
  padding: 10px;
  margin: 5px 10px;
  border: 2px solid var(--highlightyellow);
`
