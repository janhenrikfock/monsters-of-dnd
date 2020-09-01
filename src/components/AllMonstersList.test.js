import React from 'react'
import { render } from '@testing-library/react'
import renderer from 'react-test-renderer'

import AllMonstersList from './AllMonstersList'

describe('AllMonstersList', () => {
  const headline = 'Monsters of DnD'
  const monsterListItem = 'Aboleth'

  it('displays the headline, followed by the first listitem which is aboleth', () => {
    const { getByText } = render(
      <AllMonstersList headline={headline} listitems={monsterListItem} />
    )

    expect(getByText(headline)).toBeInTheDocument()
    expect(monsterListItem).toMatchSnapshot()
  })
  it('renders correctly', () => {
    const list = renderer.create(
      <AllMonstersList headline={headline} listitem={monsterListItem} />
    )
    expect(list).toMatchSnapshot()
  })
})
