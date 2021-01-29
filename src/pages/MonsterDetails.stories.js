import React from 'react'
import MonsterDetails from './MonsterDetails'
import { useTitle } from '../Hooks/useTitle'

export default {
  title: 'Pages/MonsterDetails',
  component: MonsterDetails,
}

const Template = (args) => <MonsterDetails {...args} />

export const LongText = Template.bind({})
LongText.args = {
  useTitle: useTitle,
  monster: {
    name: 'Monstername',
    type: 'type',
    challenge_rating: 11,
    size: 'Size',
    alignment: 'Alignment',
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
    proficiencies: [
      {
        proficiency: {
          name: 'Namestring',
          index: 'indexstring1',
        },
        value: 3,
      },
      {
        proficiency: {
          name: 'Namestring',
          index: 'Indexstring2',
        },
        value: 2,
      },
    ],
    special_abilities: [
      {
        name: 'Ability-name',
        desc:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
      },
      {
        name: 'Ability-name',
        desc:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
      },
    ],
    actions: [
      {
        name: 'Action-name',
        desc:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
      },
      {
        name: 'Action-name',
        desc:
          'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
      },
    ],
  },
}
export const ShortText = Template.bind({})
ShortText.args = {
  useTitle: useTitle,
  monster: {
    name: 'Monstername',
    type: 'type',
    challenge_rating: 11,
    size: 'Size',
    alignment: 'Alignment',
    strength: 10,
    dexterity: 10,
    constitution: 10,
    intelligence: 10,
    wisdom: 10,
    charisma: 10,
    proficiencies: [
      {
        proficiency: {
          name: 'Namestring',
          index: 'indexstring1',
        },
        value: 3,
      },
      {
        proficiency: {
          name: 'Namestring',
          index: 'Indexstring2',
        },
        value: 2,
      },
    ],
    special_abilities: [
      {
        name: 'Ability-name',
        desc:
          'Lorem ipsum dolor sit amet,  nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
      },
      {
        name: 'Ability-name',
        desc:
          'Lorem  consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
      },
    ],
    actions: [
      {
        name: 'Action-name',
        desc:
          'Lorem ipsum dolor diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam',
      },
      {
        name: 'Action-name',
        desc: 'Lorem ipsum dolor sit amet, consetetur',
      },
    ],
  },
}
