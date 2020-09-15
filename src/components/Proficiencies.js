import React from 'react'
import styled from 'styled-components'

export default function Proficiencies({ proficiencies }) {
  return (
    <>
      <Headline>Proficiencies and Skills</Headline>
      {proficiencies.map((proficiency) => (
        <ProficiencyList key={proficiency.index}>
          <ListItemProficency>
            {proficiency.name} +{proficiency.value}
          </ListItemProficency>
        </ProficiencyList>
      ))}
    </>
  )
}
const Headline = styled.h2`
  margin: 5px;
  font-size: 100%;
  font-family: serif;
  color: black;
  text-decoration: underline 2px solid crimson;
`
const ProficiencyList = styled.ul`
  margin: 2px;
`
const ListItemProficency = styled.li`
  font-size: 15px;
`
