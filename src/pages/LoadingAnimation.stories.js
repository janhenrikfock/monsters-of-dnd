import React from 'react'
import LoadingAnimation from './LoadingAnimation'

export default {
  title: 'Pages/LoadingGif',
  component: LoadingAnimation,
}

const Template = (args) => <LoadingAnimation {...args} />

export const LoadingGif = Template.bind({})
