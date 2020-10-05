import React from 'react'

import DetailsHead from './DetailsHead'

export default {
  title: 'Components/Head ',
  component: DetailsHead,
}

const Template = (args) => <DetailsHead {...args} />

export const DetailHead = Template.bind({})
DetailHead.args = {
  name: 'Monstername',
  alignement: 'alignment',
  type: 'type',
}
