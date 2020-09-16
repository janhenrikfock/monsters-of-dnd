import React from 'react'
import { render } from '@testing-library/react'
import Proficiencies from './Proficiencies'

describe('Proficiencies', () => {
  const proficiencies = [
    {
      name: 'Namestring',
      value: 6,
    },
    {
      name: 'Namestring',
      value: 2,
    },
    {
      name: 'Namestring',
      value: 1,
    },
  ]
  it('displays name and value as a li in a ul', () => {
    const { getByText } = render(<Proficiencies proficiency={proficiencies} />)
    expect(getByText())
  })
})
