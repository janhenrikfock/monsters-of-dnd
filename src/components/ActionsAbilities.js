import React from 'react'
import uuidv4 from 'uuid/v4'
import styled from 'styled-components/macro'

export default function ActionsAbilities({ headline, dataArray }) {
  return (
    <>
      <Headline>{headline}</Headline>
      {dataArray?.map((object) => (
        <Container key={uuidv4()}>
          <Name>{object.name}</Name>
          <Desc>{object.desc}</Desc>
        </Container>
      ))}
    </>
  )
}
const Container = styled.div`
  padding: 3px;
`
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
