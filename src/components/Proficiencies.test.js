import React from 'react'
import { render } from '@testing-library/react'
import Proficiencies from './Proficiencies'

describe('Proficiencies', () => {
  const proficiencies = [
    {
      proficiency: {
        name: 'Namestring',
      },
      value: 6,
      index: 1,
    },
    {
      proficiency: {
        name: 'Namestring',
      },
      value: 2,
      index: 2,
    },
    {
      proficiency: {
        name: 'Namestring',
      },
      value: 1,
      index: 3,
    },
  ]
  it('displays name and value as a li in a ul', () => {
    const { getByText } = render(
      <Proficiencies proficiencies={proficiencies} />
    )
    expect(getByText('Namestring + 6'))
  })
})
