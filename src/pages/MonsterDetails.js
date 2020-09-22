import React, { useEffect } from 'react'
import DetailsHead from '../components/DetailsHead'
import DetailsStats from '../components/DetailsStats'
import Proficiencies from '../components/Proficiencies'
import ActionsAbilities from '../components/ActionsAbilities'

export default function MonsterDetails({ monster }) {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <>
      <DetailsHead
        name={monster.name}
        type={monster.type}
        cr={monster.challenge_rating}
        size={monster.size}
        alignment={monster.alignment}
      />
      <DetailsStats
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
