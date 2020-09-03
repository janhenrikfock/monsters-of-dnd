import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import saveLocally from './lib/saveLocally'
import OneMonsterItem from './OneMonsterItem'

export default function AllMonstersList() {
  const [monsterList, setMonsterList] = useState([])
  const [monsterDetails, setMonsterDetails] = useState([])

  useEffect(() => {
    localStorage.clear()
    console.clear()
    const locallyLoadedMonsterNames = JSON.parse(
      localStorage.getItem('monsternames')
    )

    if (!locallyLoadedMonsterNames || locallyLoadedMonsterNames.length === 0) {
      fetch(`https://www.dnd5eapi.co/api/monsters`)
        .then((res) => res.json())
        .then((data) => {
          setMonsterList(data.results)
          saveLocally('monsternames', data.results)
          data.results.forEach((monster) => {
            fetch(`https://www.dnd5eapi.co${monster.url}`)
              .then((res) => res.json())
              .then((data) => {
                setMonsterDetails(data)
                console.log(data.index)
              })
          })
        })
        .catch((err) => console.log(err))
    } else {
      setMonsterList(locallyLoadedMonsterNames)
    }
  }, [])

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
