import React from 'react'

import OneMonsterItem from './OneMonsterItem'

export default {
  title: 'Components/Singlemonster',
  component: OneMonsterItem,
}

const Template = (args) => <OneMonsterItem {...args} />

export const LawfulEvil = Template.bind({})
LawfulEvil.args = {
  monster: {
    name: 'Monstername',
    type: 'type',
    challenge_rating: '00',
    alignment: 'lawful evil',
  },
}
export const LawfulNeutral = Template.bind({})
LawfulNeutral.args = {
  monster: {
    name: 'Monstername',
    type: 'type',
    challenge_rating: '00',
    alignment: 'lawful neutral',
  },
}
export const LawfulGood = Template.bind({})
LawfulGood.args = {
  monster: {
    name: 'Monstername',
    type: 'type',
    challenge_rating: '00',
    alignment: 'lawful good',
  },
}
export const NeutralGood = Template.bind({})
NeutralGood.args = {
  monster: {
    name: 'Monstername',
    type: 'type',
    challenge_rating: '00',
    alignment: 'neutral good',
  },
}
export const Neutral = Template.bind({})
Neutral.args = {
  monster: {
    name: 'Monstername',
    type: 'type',
    challenge_rating: '00',
    alignment: 'neutral',
  },
}
export const NeutralEvil = Template.bind({})
NeutralEvil.args = {
  monster: {
    name: 'Monstername',
    type: 'type',
    challenge_rating: '00',
    alignment: 'neutral evil',
  },
}
export const ChaoticGood = Template.bind({})
ChaoticGood.args = {
  monster: {
    name: 'Monstername',
    type: 'type',
    challenge_rating: '00',
    alignment: 'chaotic good',
  },
}
export const ChaoticNeutral = Template.bind({})
ChaoticNeutral.args = {
  monster: {
    name: 'Monstername',
    type: 'type',
    challenge_rating: '00',
    alignment: 'chaotic neutral',
  },
}
export const ChaoticEvil = Template.bind({})
ChaoticEvil.args = {
  monster: {
    name: 'Monstername',
    type: 'type',
    challenge_rating: '00',
    alignment: 'chaotic evil',
  },
}
export const NoAlignment = Template.bind({})
NoAlignment.args = {
  monster: {
    name: 'Monstername',
    type: 'type',
    challenge_rating: '00',
    alignment: 'any non-good alignment',
  },
}
