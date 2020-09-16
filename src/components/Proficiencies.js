import React from 'react'
import styled from 'styled-components'

export default function Proficiencies({ proficiencies }) {
  return (
    <>
      <Headline>Proficiencies and Skills</Headline>
      {proficiencies.map((proficiency) => (
        <div key={proficiency.index}>
          <ListItemProficency>
            {proficiency.name} +{proficiency.value}
          </ListItemProficency>
        </div>
      ))}
    </>
  )
}
const Headline = styled.h2`
  margin: 5px;
  font-size: 100%;
  font-family: serif;
  color: black;
`

const ListItemProficency = styled.p`
  line-height: 24px;
  padding-left: 15px;
`
