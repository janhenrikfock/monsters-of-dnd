import React from 'react'

import DetailsStats from './DetailsStats'

export default {
  title: 'Components/Statblock ',
  component: DetailsStats,
}

const Template = (args) => <DetailsStats {...args} />

export const StatBlock = Template.bind({})
StatBlock.args = {
  strength: 10,
  dexterity: 16,
  constitution: 8,
  intelligence: 17,
  wisdom: 6,
  charisma: 12,
}
