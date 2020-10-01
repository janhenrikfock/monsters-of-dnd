import React from 'react'
import styled from 'styled-components/macro'

export default function Proficiencies({ proficiencies }) {
  if (proficiencies?.length === 0) {
    return <></>
  } else {
    return (
      <>
        <ComponentHeadline>Proficiencies and Skills</ComponentHeadline>
        {proficiencies.map((proficiency) => (
          <div key={proficiency.proficiency.index}>
            <ListItemProficency>
              {proficiency.proficiency.name} + {proficiency.value}
            </ListItemProficency>
          </div>
        ))}
      </>
    )
  }
}

const ListItemProficency = styled.p`
  line-height: 24px;
  padding-left: 15px;
`
const ComponentHeadline = styled.h2`
  border-top: 1px solid #a5a5a3;
`
