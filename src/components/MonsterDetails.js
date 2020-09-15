import React from 'react'
import styled from 'styled-components'
import GeneralData from './GeneralData'
import MonsterDetailsStat from './MonsterDetailsStats'

export default function MonsterDetails({ monster }) {
  return (
    <>
      <Headline>{monster.name}</Headline>
      <GeneralData
        type={monster.type}
        cr={monster.challenge_rating}
        size={monster.size}
        alignment={monster.alignment}
      />
      <MonsterDetailsStat
        strength={monster.strength}
        dexterity={monster.dexterity}
        constitution={monster.constitution}
        intelligence={monster.intelligence}
        wisdom={monster.wisdom}
        charisma={monster.charisma}
      />
    </>
  )
}

const Headline = styled.h1`
  font-size: 150%;
  text-align: center;
  border-bottom: 8px solid #f50808;
  width: 100%;
  min-height: 50px;
`
