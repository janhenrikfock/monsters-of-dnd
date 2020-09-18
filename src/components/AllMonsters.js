import React, { useState } from 'react'
import styled from 'styled-components/macro'
import LoadingAnimation from './LoadingAnimation'
import OneMonsterItem from './OneMonsterItem'
import Fuse from 'fuse.js'

export default function AllMonsters({ loading, monsterDetails }) {
  console.log(monsterDetails)
  const [searchResults, setSearchResults] = useState('')

  const fuse = new Fuse(monsterDetails, {
    keys: ['name', 'type', 'challenge_rating'],
  })
  const results = fuse.search('elemental')
  console.log(results)

  if (loading) {
    return <LoadingAnimation />
  } else {
    return (
      <>
        <Headline>Monsters of DnD</Headline>
        <form>
          <label>Search</label>
          <input
            type="text"
            value={searchResults}
            // onChange={handleSearch}
          ></input>
        </form>

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
