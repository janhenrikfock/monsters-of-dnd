import React from 'react'

import OneMonsterItem from './OneMonsterItem'

export default {
  title: 'Components/Singlemonster',
  component: OneMonsterItem,
}

const Template = (args) => <OneMonsterItem {...args} />

export const OneMonster = Template.bind({})
OneMonster.args = {
  monster: {
    name: 'Monstername',
    type: 'type',
    challenge_rating: '00',
  },
}
