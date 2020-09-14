import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'

import OneMonsterItem from './OneMonsterItem'

describe('OneMonsterItem', () => {
  const monster = {
    name: 'monster 1',
    type: 'type',
    challenge_rating: 'numberstring',
  }

  it('displays monsterinformation', () => {
    const { getByText } = render(
      <Router>
        <OneMonsterItem monster={monster} />
      </Router>
    )

    expect(getByText(monster.name)).toBeInTheDocument()
  })
})
