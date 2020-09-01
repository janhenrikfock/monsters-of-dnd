import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'

export default function AllMonstersList() {
  const [monsterListStart, setMonsterListStart] = useState([])

  useEffect(() => {
    fetch(`https://www.dnd5eapi.co/api/monsters`)
      .then((res) => res.json())
      .then((data) => data.results.slice(0, 24))
      .then((data) => console.log(data))
      .then((data) => setMonsterListStart(data))
      .catch((err) => console.log(err))
  }, [])

  return (
    <>
      <HeadlineStyled>Monsters of DnD</HeadlineStyled>
      {monsterListStart.map((name, index) => (
        <MonsterEntryStyled key={index}>{name}</MonsterEntryStyled>
      ))}
    </>
  )
}
const HeadlineStyled = styled.h1`
  text-align: center;
  border-bottom: 8px solid var(--highlightred);
`
const MonsterEntryStyled = styled.h2`
  width: 70%;
  margin-left: 15%;
  font-size: 90%;
`
