import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import saveLocally from './lib/saveLocally'
import OneMonsterItem from './OneMonsterItem'

export default function AllMonstersList() {
  const [monsterList, setMonsterList] = useState([])
  const [monsterDetails, setMonsterDetails] = useState([])

  useEffect(() => {
    const locallyLoadedMonsterNames = JSON.parse(
      localStorage.getItem('monsternames')
    )

    if (!locallyLoadedMonsterNames || locallyLoadedMonsterNames.length === 0) {
      fetch(`https://www.dnd5eapi.co/api/monsters`)
        .then((res) => res.json())
        .then((data) => {
          setMonsterList(data.results)
          saveLocally('monsternames', data.results)
        })
        .catch((err) => console.log(err))
    } else {
      setMonsterList(locallyLoadedMonsterNames)
    }
  }, [])

  fetch(`https://www.dnd5eapi.co/api/monsters/efreeti`)
    .then((res) => res.json())
    .then((data) => {
      console.log(data)
      setMonsterDetails(data.results)
      saveLocally('monsternames', { data })
    })
    .catch((err) => console.log(err))

  return (
    <>
      <HeadlineStyled>Monsters of DnD</HeadlineStyled>
      {monsterList.map((monster, index) => (
        <OneMonsterItem key={index} monster={monster}></OneMonsterItem>
      ))}
    </>
  )
}

const HeadlineStyled = styled.h1`
  text-align: center;
  border-bottom: 8px solid var(--highlightred);
`
