import React from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import calculateModifier from './lib/calculateModifier'

DetailsStats.propTypes = {
  strength: PropTypes.number,
  dexterity: PropTypes.number,
  constitution: PropTypes.number,
  intelligence: PropTypes.number,
  wisdom: PropTypes.number,
  charisma: PropTypes.number,
}

export default function DetailsStats({
  strength,
  dexterity,
  constitution,
  intelligence,
  wisdom,
  charisma,
}) {
  return (
    <AllStats>
      <OneStatContainer>
        <StatName>Str.</StatName>
        <Stat>{strength}</Stat>
        <Modifier>{calculateModifier(strength)}</Modifier>
      </OneStatContainer>
      <OneStatContainer>
        <StatName>Dex.</StatName>
        <Stat>{dexterity}</Stat>
        <Modifier>{calculateModifier(dexterity)}</Modifier>
      </OneStatContainer>
      <OneStatContainer>
        <StatName>Con.</StatName>
        <Stat>{constitution}</Stat>
        <Modifier>{calculateModifier(constitution)}</Modifier>
      </OneStatContainer>
      <OneStatContainer>
        <StatName>Int.</StatName>
        <Stat>{intelligence}</Stat>
        <Modifier>{calculateModifier(intelligence)}</Modifier>
      </OneStatContainer>
      <OneStatContainer>
        <StatName>Wis.</StatName>
        <Stat>{wisdom}</Stat>
        <Modifier>{calculateModifier(wisdom)}</Modifier>
      </OneStatContainer>
      <OneStatContainer>
        <StatName>Cha.</StatName>
        <Stat>{charisma}</Stat>
        <Modifier>{calculateModifier(charisma)}</Modifier>
      </OneStatContainer>
    </AllStats>
  )
}
const AllStats = styled.div`
  display: flex;
  flex: 1 1 auto;
  justify-content: space-evenly;
  margin-top: 20px;
  border-top: 1px solid #a5a5a3;
`
const OneStatContainer = styled.div`
  min-width: 52px;
  display: flex;
  flex-direction: column;
  padding: 8px;
`
const StatName = styled.p`
  color: black;
  font-size: 16px;
  text-align: center;
  border-bottom: 2px solid var(--highlightcolor);
`
const Stat = styled.p`
  margin: 0;
  font-size: 30px;
  display: inline-block;
  text-align: center;
`
const Modifier = styled.p`
  font-size: 20px;
  margin: 0;
  text-align: center;
`
