import React, { useState, useEffect } from 'react'
import styled from 'styled-components/macro'
import PropTypes from 'prop-types'
import LoadingAnimation from './LoadingAnimation'
import OneMonsterItem from '../components/OneMonsterItem'
import Fuse from 'fuse.js'
import star from '../components/images/star.svg'

AllMonsters.propTypes = {
  loading: PropTypes.bool,
  monsterDetail: PropTypes.array,
}

export default function AllMonsters({
  loading,
  monsterDetails,
  useTitle,
  toggleFavourite,
}) {
  useTitle(0)
  const [favourites, setFavourites] = useState(false)
  const [filteredMonsters, setFilteredMonsters] = useState([])
  const [searchResults, setSearchResults] = useState('')
  const locallyLoadedMonsterNames = JSON.parse(
    localStorage.getItem('monsternames')
  )

  useEffect(() => {
    if (!favourites) {
      setFilteredMonsters(monsterDetails)
    } else {
      setFilteredMonsters(
        monsterDetails.filter((monster) => monster.favourite === true)
      )
    }
  }, [favourites, monsterDetails])

  const fuse = new Fuse(filteredMonsters, {
    keys: ['name', 'type', 'challenge_rating', 'alignment'],
  })
  const results = searchResults ? fuse.search(searchResults) : filteredMonsters

  if (
    monsterDetails.length === 0 ||
    monsterDetails.length !== locallyLoadedMonsterNames.length
  ) {
    return <LoadingAnimation monsterDetails={monsterDetails} />
  } else {
    return (
      <>
        <Header>
          <Headline>Monsters of DnD</Headline>
          <ControlsContainer>
            <Favourite
              src={star}
              alt={'show only favourites'}
              onClick={() => toggleFavouritesFilter(favourites, setFavourites)}
              activeFavourites={favourites}
            />
            <Input
              type="text"
              value={searchResults}
              onChange={handleInput}
              placeholder={'Search for Monster'}
            />
          </ControlsContainer>
        </Header>
        <Main>
          {favourites && results.length === 0 ? (
            <p>You have no Favourites marked yet</p>
          ) : (
            results.map((monster) => (
              <OneMonsterItem
                key={monster.index}
                monster={monster}
                toggleFavourite={toggleFavourite}
              />
            ))
          )}
        </Main>
      </>
    )
  }
  function handleInput({ currentTarget = {} }) {
    const { value } = currentTarget
    setSearchResults(value)
  }
  function toggleFavouritesFilter(favourites, setFavourites) {
    !favourites ? setFavourites(true) : setFavourites(false)
  }
}
const activeStyle = {
  false: 'lightgrey',
  true: 'lightblue',
}
const Header = styled.header`
  margin: 0;
  position: fixed;
  top: 0px;
  border-bottom: 1px solid #d0d0cd;
  padding-bottom: 10px;
  width: 100%;
  background: white;
`
const Main = styled.main`
  margin-top: 140px;
`
const Headline = styled.h1`
  color: black;
  font-size: 150%;
  text-align: center;
  border-bottom: 3px solid var(--highlightcolor);
  font-family: serif;
  padding-bottom: 13px;
`
const ControlsContainer = styled.section`
  display: flex;
  padding: 5px;
  margin: 0;
`
const Input = styled.input`
  width: 80%;
  line-height: 26px;
  margin-left: 5%;
  display: inline-block;
  text-align: center;
  font-size: 18px;
`
const Favourite = styled.img`
  max-height: 45px;
  max-width: 45px;
  border-radius: 6px;
  background-color: ${({ activeFavourites }) => activeStyle[activeFavourites]};
  padding: 10px;
  border: 2px solid var(--highlightcolor);
  transition-property: background-color;
  transition-duration: 0.1s;
  &:hover {
    cursor: pointer;
    background-color: white;
  }
`
