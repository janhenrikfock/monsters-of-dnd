import React from 'react'

import MonsterDetailsHead from './MonsterDetailsHead'

export default {
  title: 'Detailspage/Head ',
  component: MonsterDetailsHead,
}

const Template = (args) => <MonsterDetailsHead {...args} />

export const DetailHead = Template.bind({})
DetailHead.args = {
  name: 'Monstername',
  alignement: 'alignment',
  type: 'type',
}
