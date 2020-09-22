import React from 'react'
import { MemoryRouter as Router } from 'react-router-dom'
import renderer from 'react-test-renderer'
import { render } from '@testing-library/react'

import AllMonsters from './AllMonsters'

describe('AllMonsters', () => {
  const monsterDetails = [
    {
      name: 'Monstername',
      type: 'type',
      challenge_rating: '00',
      index: 'monstername',
    },
  ]

  it('shows headline Monsters of DnD', () => {
    const { getByText } = render(
      <Router>
        <AllMonsters monsterDetails={monsterDetails} />
      </Router>
    )
    expect(getByText('Monsters of DnD')).toBeInTheDocument()
  })

  it('renders OneMonsterItem correctly', () => {
    const list = renderer.create(
      <Router>
        <AllMonsters monsterDetails={monsterDetails} />
      </Router>
    )
    expect(list).toMatchSnapshot()
  })
})
