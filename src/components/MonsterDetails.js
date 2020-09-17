import React, { useEffect } from 'react'
import MonsterDetailsHead from './MonsterDetailsHead'
import MonsterDetailsStat from './MonsterDetailsStats'
import Proficiencies from './Proficiencies'
import ActionsAbilities from './ActionsAbilities'

export default function MonsterDetails({ monster }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

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
      <Proficiencies proficiencies={monster.proficiencies} />
      <ActionsAbilities
        headline="Special Abilities"
        dataArray={monster.special_abilities}
      />
      <ActionsAbilities headline={'Actions'} dataArray={monster.actions} />
    </>
  )
}
