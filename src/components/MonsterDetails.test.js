import React from 'react'
import { render } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'
import MonsterDetails from './MonsterDetails'

describe('MonsterDetails', () => {
const monster = {
  index: 'monstername',
  name: 'Monstername',
  size: 'sizestring',
  type: 'type',

  subtype: '',
  alignement: 'alignment',
  armor_class: 10,
  hit_points: 135,
  hit_dice: '00d00',
  speed: {
    walk: '00 ft.',
    swim: '00 ft.',
    fly: '00 ft',
  },
  strength: 10,
  dexterity: 10,
  constitution: 10,
  intelligence: 10,
  wisdom: 10,
  charisma: 10,
  proficiencies: [
    {
      index: 'saving-throw-string',
      name: 'Savingthrow or proficiency',
      value: 0,
      url: 'url/as/a/string',
    },
    {
      index: 'saving-throw-string',
      name: 'Savingthrow or proficiency',
      value: 0,
      url: 'url/as/a/string',
    },
  ],
  damage_vulnerabilities: [],
  damage_resistances: [],
  damage_immunities: [],
  condition_immunities: [],
  senses: {
    darkvision: '60ft',
    passive_perception: 20,
  },
  languages: 'languages',
  challenge_rating: 10,
  special_abilities: [
    {
      name: 'amphibious',
      desc: 'description',
    },
    {
      name: 'amphibious',
      desc: 'description',
    },
  ],
  actions: [
    {
      name: 'amphibious',
      desc: 'description',
      attack_bonus: 9,
      damage: {{
          damage_type: {
              index: 'acid',
              name: 'Acid',
              url: 'urlAsString'
          },
          damage_dice: '2d8',
      },

      },

    },

  ],
}
})
