import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

export default function AllMonstersList() {
  const [monsterList, setMonsterList] = useState([])

  useEffect(() => {
    fetch(`https://www.dnd5eapi.co/api/monsters`)
      .then((res) => res.json())
      .then((data) => setMonsterList(data.results))
      .catch((err) => console.log(err))
  })
  return (
    <>
      <Headline>Monsters of DnD</Headline>
      {monsterList.map((monster, index) => (
        <ListItem key={index}>{monster.name}</ListItem>
      ))}
    </>
  )
}
const Headline = styled.h1`
  text-align: center;
  border-bottom: 10px;
  border-bottom-style: solid;
  border-bottom-color: var(--highlightred);
`
const ListItem = styled.h3`
  width: 70%;
  margin-left: 15%;
`
