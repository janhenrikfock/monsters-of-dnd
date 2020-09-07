import React from 'react'
import { render } from '@testing-library/react'

import OneMonsterItem from './OneMonsterItem'

describe('OneMonsterItem', () => {
  const monster = {
    name: 'monster 1',
    type: 'type',
    challenge_rating: 'numberstring',
  }

  it('displays monsterinformation', () => {
    const { getByText } = render(<OneMonsterItem monster={monster} />)

    expect(getByText(monster.name)).toBeInTheDocument()
  })
})
