import React, { useState } from 'react'
import styled from 'styled-components/macro'
import LoadingAnimation from './LoadingAnimation'
import OneMonsterItem from '../components/OneMonsterItem'
import Fuse from 'fuse.js'

export default function AllMonsters({ loading, monsterDetails }) {
  const [searchResults, setSearchResults] = useState('')

  const fuse = new Fuse(monsterDetails, {
    keys: ['name', 'type', 'challenge_rating'],
  })
  const results = searchResults ? fuse.search(searchResults) : monsterDetails

  if (loading) {
    return <LoadingAnimation />
  } else {
    return (
      <>
        <Header>
          <Headline>Monsters of DnD</Headline>
          <Input
            type="text"
            value={searchResults}
            onChange={handleInput}
            placeholder={'Search for Monster'}
          />
        </Header>
        <Main>
          {results.map((monster) => (
            <OneMonsterItem key={monster.index} monster={monster} />
          ))}
        </Main>
      </>
    )
  }
  function handleInput({ currentTarget = {} }) {
    const { value } = currentTarget
    setSearchResults(value)
  }
}
const Header = styled.header`
  position: fixed;
  top: 0px;
  border-bottom: 1px solid #d0d0cd;
  padding-bottom: 10px;
  width: 100%;
  background: white;
`
const Main = styled.main`
  margin-top: 120px;
`
const Headline = styled.h1`
  color: black;
  font-size: 150%;
  text-align: center;
  border-bottom: 3px solid var(--highlightcolor);
  font-family: serif;
  padding-bottom: 13px;
`
const Input = styled.input`
  width: 80%;
  line-height: 26px;
  margin-left: 10%;
  display: block;
  text-align: center;
  font-size: 18px;
`
