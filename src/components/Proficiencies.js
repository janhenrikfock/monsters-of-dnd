import React from 'react'
import styled from 'styled-components/macro'

export default function Proficiencies({ proficiencies }) {
  if (proficiencies?.length === 0) {
    return <></>
  } else {
    return (
      <>
        <h2>Proficiencies and Skills</h2>
        {proficiencies.map((proficiency) => (
          <div key={proficiency.index}>
            <ListItemProficency>
              {proficiency.name} + {proficiency.value}
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
