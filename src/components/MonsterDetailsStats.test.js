import React from 'react'
import { render } from '@testing-library/react'
import MonsterDetailsStats from './MonsterDetailsStats'

describe('MonsterDetailsStats', () => {
  const monster = {
    strength: 14,
    dexterity: 12,
    constitution: 9,
    intelligence: 15,
    wisdom: 8,
    charisma: 10,
  }

  it.only('displays stats in the component', () => {
    const { getByText } = render(
      <MonsterDetailsStats
        strength={monster.strength}
        dexterity={monster.dexterity}
        constitution={monster.constitution}
        intelligence={monster.intelligence}
        wisdom={monster.wisdom}
        charisma={monster.charisma}
      />
    )
    expect(getByText(monster.strength.toString())).toBeInTheDocument()
    expect(getByText(monster.dexterity.toString())).toBeInTheDocument()
    expect(getByText(monster.constitution.toString())).toBeInTheDocument()
    expect(getByText(monster.intelligence.toString())).toBeInTheDocument()
    expect(getByText(monster.wisdom.toString())).toBeInTheDocument()
    expect(getByText(monster.charisma.toString())).toBeInTheDocument()
  })
})
