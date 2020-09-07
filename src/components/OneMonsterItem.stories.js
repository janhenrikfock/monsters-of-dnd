import React from 'react'

import OneMonsterItem from './OneMonsterItem'

export default {
  title: 'Singlemonster',
  component: OneMonsterItem,
}

const monster = {
  name: 'Monstername',
  type: 'type',
  challenge_rating: '00',
}

const Template = (args) => <OneMonsterItem {...args} />

export const OneMonsterItem = Template.bind({})
OneMonsterItem.args = {
  name: 'Monstername',
  type: 'type',
  challenge_rating: '00',
}
