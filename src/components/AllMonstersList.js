import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import saveLocally from './lib/saveLocally'
import loadLocally from './lib/saveLocally'

export default function AllMonstersList() {
  const [monsterList, setMonsterList] = useState([])

  useEffect(() => {
    fetch(`https://www.dnd5eapi.co/api/monsters`)
      .then((res) => res.json())
      .then((data) => setMonsterList(data.results))
      .catch((err) => console.log(err))
  }, [])

  saveLocally(monsterList)
  const loadedArray = JSON.parse(localStorage.getItem('monsternames'))

  return (
    <>
      <HeadlineStyled>Monsters of DnD</HeadlineStyled>
      {loadedArray.map((monster, index) => (
        <MonsterEntryStyled key={index}>{monster.name}</MonsterEntryStyled>
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
