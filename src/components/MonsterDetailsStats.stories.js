import React from 'react'

import MonsterDetailsStats from './MonsterDetailsStats'

export default {
  title: 'Detailspage/Statblock ',
  component: MonsterDetailsStats,
}

const Template = (args) => <MonsterDetailsStats {...args} />

export const StatBlock = Template.bind({})
StatBlock.args = {
  strength: 10,
  dexterity: 16,
  constitution: 8,
  intelligence: 17,
  wisdom: 6,
  charisma: 12,
}
