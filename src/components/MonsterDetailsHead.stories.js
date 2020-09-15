import React from 'react'

import MonsterDetailsHead from './MonsterDetailsHead'

export default {
  title: 'Details/Head ',
  component: MonsterDetailsHead,
}

const Template = (args) => <MonsterDetailsHead {...args} />

export const DetailHead = Template.bind({})
DetailHead.args = {
  name: 'Monstername',
  alignement: 'alignment',
  challenge_rating: 10,
  type: 'type',
}
