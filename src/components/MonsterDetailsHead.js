import React from 'react'
import styled from 'styled-components'

export default function MonsterDetailsHead({
  name,
  type,
  cr,
  size,
  alignment,
}) {
  return (
    <>
      <Headline>{name}</Headline>
      <FormattingContainer>
        <SingleInfo>
          {size} {type}
        </SingleInfo>
        <SingleInfo>Alignment: {alignment}</SingleInfo>
        <SingleInfo>CR: {cr}</SingleInfo>
      </FormattingContainer>
    </>
  )
}

const Headline = styled.h1`
  color: black;
  font-family: serif;
  font-size: 35px;
  line-height: 35px;
  text-align: center;
  width: 100%;
  margin-bottom: 5px;
`
const FormattingContainer = styled.div`
  border-bottom: 3px solid crimson;
  display: flex;
  width: 100%;
  justify-content: space-between;
`
const SingleInfo = styled.p`
  font-size: 16px;
  text-transform: capitalize;
  text-align: center;
  padding: 3px;
`
