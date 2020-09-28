import React from 'react'
import styled from 'styled-components/macro'

export default function DetailsHead({ name, type, size, alignment }) {
  return (
    <>
      <Headline>{name}</Headline>
      <SingleInfo>
        {size} {type}, {alignment}
      </SingleInfo>
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

const SingleInfo = styled.p`
  font-size: 16px;
  text-transform: capitalize;
  text-align: center;
  padding: 3px;
`
