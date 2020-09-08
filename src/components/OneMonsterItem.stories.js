import React from 'react'

import OneMonsterItem from './OneMonsterItem'

export default {
  title: 'Example/Singlemonster',
  component: OneMonsterItem,
}

const Template = (args) => <OneMonsterItem {...args} />

export const OneMonsterItem = Template.bind()
OneMonsterItem.args = {
  name: 'Monstername',
  type: 'type',
  challenge_rating: '00',
}
