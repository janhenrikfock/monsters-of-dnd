import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import saveLocally from './lib/saveLocally'
import OneMonsterItem from './OneMonsterItem'

export default function AllMonstersList() {
  const [monsterList, setMonsterList] = useState([])
  const [monsterDetails, setMonsterDetails] = useState([])

  useEffect(() => {
    const loadedArray = JSON.parse(localStorage.getItem('monsternames'))

    if (!loadedArray || loadedArray.length === 0) {
      fetch(`https://www.dnd5eapi.co/api/monsters`)
        .then((res) => res.json())
        .then((data) => {
          setMonsterList(data.results)
          saveLocally('monsternames', data.results)
        })
        .catch((err) => console.log(err))
    } else {
      setMonsterList(loadedArray)
    }
  }, [])}

  useEffect(() => {
    const locallyLoadedMonsterDetails = JSON.parse(
      localStorage.getItem('monsterdetail')
    )

    if (
      !locallyLoadedMonsterDetails ||
      locallyLoadedMonsterDetails.length === 0
    ) {
      monsterList.map((monster) => {
        fetch('https://www.dnd5eapi.co' + monster.url)
          .then((res) => res.json())
          .then((data) => {
            setMonsterDetails(monsterDetails, ...data.results)
            saveLocally('monsterdetail', setMonsterDetails)
          })
          .catch((err) => console.log(err))
      },[])
    
  

  return (
    <>
      <HeadlineStyled>Monsters of DnD</HeadlineStyled>
      {monsterList.map((monster) => (
        <OneMonsterItem monster={monster}></OneMonsterItem>
      ))}
    </>
  )
}
  

const HeadlineStyled = styled.h1`
  text-align: center;
  border-bottom: 8px solid var(--highlightred);
`
