import React from 'react'
import uuidv4 from 'uuid/v4'
import styled from 'styled-components/macro'

export default function ActionsAbilities({ headline, dataArray }) {
  if (!dataArray) {
    return <></>
  } else {
    return (
      <>
        <h2>{headline}</h2>
        {dataArray?.map((object) => (
          <Container key={uuidv4()}>
            <Name>{object.name}</Name>
            <Desc>{object.desc}</Desc>
          </Container>
        ))}
      </>
    )
  }
}
const Container = styled.div`
  padding: 3px;
`

const Name = styled.h3`
  font-size: 100%;
  padding: 5px;
  font-family: serif;
  color: black;
  font-weight: bold;
  margin: 0;
`
const Desc = styled.p`
  padding: 10px;
  line-height: 24px;
`
