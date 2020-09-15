import React from 'react'
import { render } from '@testing-library/react'
import MonsterDetailsHead from './MonsterDetailsHead'

describe('MonsterDetailsHead', () => {
  const monster = {
    type: 'type',
    name: 'Name',
    challenge_rating: 10,
    size: 'size',
    alignment: 'alignment',
  }

  it.only('displays name, type, size and cr as headline', () => {
    const { getByText } = render(
      <MonsterDetailsHead
        name={monster.name}
        type={monster.type}
        cr={monster.challenge_rating}
        size={monster.size}
        alignment={monster.alignment}
      />
    )

    expect(getByText(monster.name)).toBeInTheDocument()
    expect(getByText(monster.size + ' ' + monster.type)).toBeInTheDocument()
    expect(
      getByText('CR: ' + monster.challenge_rating.toString())
    ).toBeInTheDocument()
    expect(getByText('Alignment: ' + monster.alignment)).toBeInTheDocument()
  })
})
