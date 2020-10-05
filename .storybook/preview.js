import { INITIAL_VIEWPORTS } from '@storybook/addon-viewport'
import React from 'react'
import GlobalStyles from '../src/GlobalStyles'
import { MemoryRouter } from 'react-router-dom'
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  viewport: {
    viewports: INITIAL_VIEWPORTS,
  },
}
export const decorators = [
  (Story) => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
  (StartPage) => <MemoryRouter>{StartPage()}</MemoryRouter>,
]
