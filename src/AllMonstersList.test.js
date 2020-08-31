import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'

import AllMonstersList from './AllMonstersList'

describe('AllMonstersList', () => {
  const headline = 'Monsters of DnD'
  const monsterListItems = 'Aboleth'

  it('displays the headline, followed by the first listitem which is aboleth', () => {
    const { getByText } = render(
      <AllMonstersList headline={headline} listitems={monsterListItems} />
    )

    expect(getByText(headline)).toBeInTheDocument()
    expect(monsterListItems).toMatchSnapshot()
  })
  it('renders correctly', () => {
    const list = renderer.create(
      <AllMonstersList headline={headline} listitem={monsterListItems} />
    )
    expect(list).toMatchSnapshot()
  })
})
