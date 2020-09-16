import React from 'react'
import styled from 'styled-components'

export default function ActionsAbilities({ headline, dataArray }) {
  return (
    <>
      <Headline>{headline}</Headline>
      {dataArray.map((object) => (
        <>
          <Name>{object.name}</Name>
          <Desc>{object.desc}</Desc>
        </>
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
const Name = styled.p`
  padding: 5px;
  font-family: serif;
  color: black;
  font-weight: bold;
`
const Desc = styled.p`
  padding: 10px;
  line-height: 24px;
`
