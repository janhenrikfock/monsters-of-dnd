import PropTypes from 'prop-types'
import React from 'react'
import styled from 'styled-components/macro'
import uuidv4 from 'uuid/v4'

ActionsAbilities.propTypes = {
  headline: PropTypes.string,
  dataArray: PropTypes.array,
}

export default function ActionsAbilities({ headline, dataArray }) {
  if (!dataArray) {
    return null
  }
  return (
    <>
      <ComponentHeadline>{headline}</ComponentHeadline>
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

const Name = styled.h3`
  font-size: 100%;
  padding: 5px;
  font-family: serif;
  color: black;
  font-weight: bold;
  margin: 0;
`
const ComponentHeadline = styled.h2`
  border-top: 1px solid #a5a5a3;
`
const Desc = styled.p`
  padding: 10px;
  line-height: 24px;
`
