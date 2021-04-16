import { render } from '@testing-library/react'
import { MemoryRouter as Router } from 'react-router-dom'
import React, { useEffect } from 'react'
import MonsterDetails from './MonsterDetails'
import { useTitle } from '../Hooks/useTitle'

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
        proficiency: {
          name: 'Savingthrow or proficiency',
          index: 'saving-throw-string',
          url: 'url/as/a/string',
        },
        value: 0,
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
        damage: {
          damage_type: {
            index: 'acid',
            name: 'Acid',
            url: 'urlAsString',
          },
          damage_dice: '2d8',
        },
      },
    ],
  }
  window.scrollTo(0, 0)
  it.only('Displays the monstername as headline', () => {
    const { getByText } = render(
      <Router>
        <MonsterDetails monster={monster} useTitle={useTitle} />
      </Router>
    )
    expect(getByText(monster.name)).toBeInTheDocument()
  })
})
