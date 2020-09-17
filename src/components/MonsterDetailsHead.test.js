import React from 'react'
import { render } from '@testing-library/react'
import MonsterDetailsHead from './MonsterDetailsHead'

describe('MonsterDetailsHead', () => {
  const monster = {
    type: 'type',
    name: 'Name',
    size: 'size',
    alignment: 'alignment',
  }

  it('displays name, type, size and cr as headline', () => {
    const { getByText } = render(
      <MonsterDetailsHead
        name={monster.name}
        type={monster.type}
        size={monster.size}
        alignment={monster.alignment}
      />
    )

    expect(getByText(monster.name)).toBeInTheDocument()
    expect(
      getByText(monster.size + ' ' + monster.type + ', ' + monster.alignment)
    ).toBeInTheDocument()
  })
})
