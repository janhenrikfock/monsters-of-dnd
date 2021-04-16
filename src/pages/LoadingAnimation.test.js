import React, { useEffect } from 'react'
import { render } from '@testing-library/react'
import LoadingAnimation from './LoadingAnimation'

describe('LoadingAnimation', () => {
  const monsterDetails = [
    { index: 'monstername1' },
    { index: 'monstername2' },
    { index: 'monstername3' },
  ]

  it('displays loadingspinner gif', () => {
    const { getByAltText } = render(
      <LoadingAnimation monsterDetails={monsterDetails} />
    )

    expect(getByAltText('loading')).toBeInTheDocument()
  })
})
