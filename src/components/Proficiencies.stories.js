import React from 'react'
import Proficiencies from './Proficiencies'

export default {
  title: 'Components/ProficiencyList',
  component: Proficiencies,
}

const Template = (args) => <Proficiencies {...args} />

export const ProficiencyList = Template.bind({})
ProficiencyList.args = {
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
    {
      proficiency: {
        name: 'Namestring',
        index: 'Indexstring3',
      },
      value: 1,
    },
  ],
}
