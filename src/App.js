import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import saveLocally from './components/lib/saveLocally'
import { useTitle } from './Hooks/useTitle'
import AllMonsters from './pages/AllMonsters'
import MonsterDetails from './pages/MonsterDetails'
import useFavourites from './Hooks/useFavourites'

export default function App() {
  localStorage.clear()
  const [monsterDetails, setMonsterDetails] = useState([])
  const [loading, setLoading] = useState(false)
  const { favourites, addFavourite } = useFavourites(monsterDetails)

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
      setLoading(true)
      fetch(`https://www.dnd5eapi.co/api/monsters`)
        .then((res) => res.json())
        .then((data) => {
          console.log(data)
          saveLocally('monsternames', data.results)
          data.results.forEach((monster) => {
            fetch(`https://www.dnd5eapi.co${monster.url}`)
              .then((res) => res.json())
              .then((data) => {
                setMonsterDetails((monsterDetails) => [...monsterDetails, data])
              })
              .then(setLoading(false))
          })
        })
        .catch((err) => console.log(err))
    }
  }, [])

  // useEffect(() => {
  //   setMonsterDetails(JSON.parse(localStorage.getItem('monsterdetails')))
  // }, [fetchedMonsters])

  if (monsterDetails.length !== 0) {
    saveLocally('monsterdetails', monsterDetails)
  } else if (localStorage.getItem('monsterdetails')) {
    setMonsterDetails(JSON.parse(localStorage.getItem('monsterdetails')))
  }
  return (
    <Switch>
      <Route exact path="/">
        <AllMonsters
          loading={loading}
          monsterDetails={monsterDetails}
          setMonsterDetails={setMonsterDetails}
          useTitle={useTitle}
          favourites={favourites}
          addFavourite={addFavourite}
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
