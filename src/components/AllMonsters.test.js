import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'

import AllMonsters from './AllMonsters'

describe('AllMonsters', () => {
  const headline = 'Monsters of DnD'
  const monsterListItem = 'Aboleth'

  it('displays the headline, followed by the first listitem which is aboleth', () => {
    render(<AllMonsters headline={headline} listitems={monsterListItem} />)

    expect(headline).toMatchSnapshot()
    expect(monsterListItem).toMatchSnapshot()
  })
  it('renders correctly', () => {
    const list = renderer.create(
      <AllMonsters headline={headline} listitem={monsterListItem} />
    )
    expect(list).toMatchSnapshot()
  })
})
