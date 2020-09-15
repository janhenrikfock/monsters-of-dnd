import React from 'react'
import MonsterDetailsHead from './MonsterDetailsHead'
import MonsterDetailsStat from './MonsterDetailsStats'

export default function MonsterDetails({ monster }) {
  return (
    <>
      <MonsterDetailsHead
        name={monster.name}
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
