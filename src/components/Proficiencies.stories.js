import React from 'react'

import Proficiencies from './Proficiencies'

export default {
  title: 'Detailspage/ProficiencyList ',
  component: Proficiencies,
}

const Template = (args) => <Proficiencies {...args} />

export const ProficiencyList = Template.bind({})
ProficiencyList.args = {
  proficiencies: [
    {
      name: 'Namestring',
      value: 6,
    },
    {
      name: 'Namestring',
      value: 2,
    },
    {
      name: 'Namestring',
      value: 1,
    },
  ],
}
