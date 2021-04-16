import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import saveLocally from './components/lib/saveLocally'
import { useTitle } from './Hooks/useTitle'
import AllMonsters from './pages/AllMonsters'
import MonsterDetails from './pages/MonsterDetails'
import useFavourites from './Hooks/useFavourites'

export default function App() {
  const [monsterDetails, setMonsterDetails] = useState([])

  const favourites = useFavourites(monsterDetails)

  useEffect(() => {
    const locallyLoadedMonsterNames = JSON.parse(
      localStorage.getItem('monsternames')
    )
    const locallyLoadedMonsterDetails = JSON.parse(
      localStorage.getItem('monsterdetails')
    )
    if (
      !locallyLoadedMonsterNames ||
      locallyLoadedMonsterNames.length === 0 ||
      locallyLoadedMonsterNames.length !== locallyLoadedMonsterDetails.length
    ) {
      localStorage.clear()

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
        .catch((err) => console.log(err))
    }
  }, [])

  if (monsterDetails.length !== 0) {
    saveLocally('monsterdetails', monsterDetails)
  } else if (localStorage.getItem('monsterdetails')) {
    setMonsterDetails(JSON.parse(localStorage.getItem('monsterdetails')))
  }
  useEffect(() => {
    setMonsterDetails(favourites.favourites)
  }, [favourites.favourites])
  return (
    <Switch>
      <Route exact path="/">
        <AllMonsters
          {...favourites}
          monsterDetails={monsterDetails}
          setMonsterDetails={setMonsterDetails}
          useTitle={useTitle}
        />
      </Route>
      {monsterDetails.map((monster) => (
        <Route key={monster.index} path={'/monster/' + monster.index}>
          <MonsterDetails
            key={monster.index}
            monster={monster}
            useTitle={useTitle}
          />
        </Route>
      ))}
    </Switch>
  )
}
