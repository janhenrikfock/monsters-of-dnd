import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'

import MonsterList from './MonsterList'

describe('MonsterList', () => {
  const headline = 'This is an headline'
  const monsterListItem = 'This is one monstername in the list'

  it('displays the hedline, followed by all the monsters', () => {
    const { getByText } = render(
      <MonsterList headline={headline} listitem={monsterListItem} />
    )

    expect(getByText(headline)).toBeInTheDocument()
    expect(getByText(monsterListItem)).toBeInTheDocument()
  })
  it('renders correctly', () => {
    const list = renderer.create(
      <MonsterList headline={headline} listitem={monsterListItem} />
    )
    expect(list).toMatchSnapshot()
  })
})
