import React from 'react'
import styled from 'styled-components'

export default function MonsterDetails({ monster }) {
  return (
    <>
      <MonsterHead>
        <Headline>{monster.name}</Headline>
      </MonsterHead>
    </>
  )
}
const MonsterHead = styled.div`
  width: 100%;
  min-height: 50px;
  background: #f50808;
`
const Headline = styled.h1`
  color: white;
  font-size: 25px;
  padding: 0%;
`
