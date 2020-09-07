import React, { useEffect, useState } from 'react'
import styled from 'styled-components/macro'
import saveLocally from './lib/saveLocally'
import OneMonsterItem from './OneMonsterItem'
import LoadingAnimation from './LoadingAnimation'

export default function AllMonsters() {
  const [monsterDetails, setMonsterDetails] = useState([])

  const [loading, setLoading] = useState(false)

  useEffect(() => {
    const locallyLoadedMonsterNames = JSON.parse(
      localStorage.getItem('monsternames')
    )

    if (!locallyLoadedMonsterNames || locallyLoadedMonsterNames.length === 0) {
      setLoading(true)
      fetch(`https://www.dnd5eapi.co/api/monsters`)
        .then((res) => res.json())
        .then((data) => {
          saveLocally('monsternames', data.results)
          data.results.forEach((monster) => {
            fetch(`https://www.dnd5eapi.co${monster.url}`)
              .then((res) => res.json())
              .then((data) => {
                setMonsterDetails((monsterDetails) => [...monsterDetails, data])
              })
          })
        })
        .then(setLoading(false))
        .catch((err) => console.log(err))
    }
  }, [])

  if (monsterDetails.length !== 0) {
    saveLocally('monsterdetails', monsterDetails)
  } else if (localStorage.getItem('monsterdetails')) {
    setMonsterDetails(JSON.parse(localStorage.getItem('monsterdetails')))
  }

  if (loading) {
    return <LoadingAnimation />
  } else {
    return (
      <>
        <HeadlineStyled>Monsters of DnD</HeadlineStyled>
        {monsterDetails.map((monster, index) => (
          <OneMonsterItem key={index} monster={monster}></OneMonsterItem>
        ))}
      </>
    )
  }
}

const HeadlineStyled = styled.h1`
  font-size: 150%;
  text-align: center;
  border-bottom: 8px solid #f50808;
`
