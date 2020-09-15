import React from 'react'
import styled from 'styled-components'

export default function GeneralData({ type, cr, size, alignment }) {
  return (
    <Container>
      <SingleInfo>{type}</SingleInfo>
      <SingleInfo>CR: {cr}</SingleInfo>
      <SingleInfo>{size}</SingleInfo>
      <SingleInfo>{alignment}</SingleInfo>
    </Container>
  )
}
const Container = styled.div`
  border-top: 2px solid #a5a5a3;
  border-bottom: 2px solid #a5a5a3;
  padding: 3px;
  display: grid;
  grid-template-rows: auto auto;
  grid-template-columns: auto auto;
  justify-content: center;
`

const SingleInfo = styled.p`
  font-size: 16px;
  text-transform: capitalize;
`
