import React from 'react'
import { render } from '@testing-library/react'

import LoadingAnimation from './LoadingAnimation'

describe('LoadingAnimation', () => {
  it('displays loadingspinner gif', () => {
    const { getByAltText } = render(<LoadingAnimation alt="loading" />)

    expect(getByAltText('loading')).toBeInTheDocument()
  })
})
