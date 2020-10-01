import React from 'react'
import { render } from '@testing-library/react'
import Proficiencies from './Proficiencies'

describe('Proficiencies', () => {
  const proficiencies = [
    {
      proficiency: {
        name: 'Namestring',
        index: 'indexstring1',
      },
      value: 6,
    },
    {
      proficiency: {
        name: 'Namestring',
        index: 'Indexstring2',
      },
      value: 2,
    },
    {
      proficiency: {
        name: 'Namestring',
        index: 'Indexstring3',
      },
      value: 1,
    },
  ]
  it('displays name and value as a li in a ul', () => {
    const { getByText } = render(
      <Proficiencies proficiencies={proficiencies} />
    )
    expect(getByText('Namestring + 6'))
  })
})
