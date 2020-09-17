import React from 'react'
import styled from 'styled-components/macro'
import LoadingAnimation from './LoadingAnimation'
import OneMonsterItem from './OneMonsterItem'

export default function AllMonsters({ loading, monsterDetails }) {
  if (loading) {
    return <LoadingAnimation />
  } else {
    return (
      <>
        <Headline>Monsters of DnD</Headline>
        {monsterDetails.map((monster) => (
          <OneMonsterItem
            key={monster.index}
            monster={monster}
          ></OneMonsterItem>
        ))}
      </>
    )
  }
}


const Headline = styled.h1`
  color: black;
  font-size: 150%;
  text-align: center;
  border-bottom: 3px solid var(--highlightcolor);
  font-family: serif;
  padding-bottom: 13px;
`
