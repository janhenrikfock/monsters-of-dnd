import React from 'react'
import { render } from '@testing-library/react'
import ActionsAbilities from './ActionsAbilities'

describe('ActionsAbilities', () => {
  const dataArray = [
    {
      name: 'Name1',
      desc: 'Describing text',
    },
    {
      name: 'Name2',
      desc: 'Describing text 1',
    },
    {
      name: 'Name3',
      desc: 'Describing text 3',
    },
  ]
  it('display name and description of object', () => {
    const { getByText } = render(<ActionsAbilities dataArray={dataArray} />)
    expect(getByText('Name1'))
    expect(getByText('Describing text'))
  })
})
