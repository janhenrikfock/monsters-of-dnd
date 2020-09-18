import React, { useEffect, useState } from 'react'
import { Route, Switch } from 'react-router-dom'
import saveLocally from './components/lib/saveLocally'
import AllMonsters from './components/AllMonsters'
import MonsterDetails from './components/MonsterDetails'

function App() {
  const [monsterDetails, setMonsterDetails] = useState([])
  const [loading, setLoading] = useState(false)

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
              .then(setLoading(false))
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

  return (
    <Switch>
      <Route exact path="/">
        <AllMonsters loading={loading} monsterDetails={monsterDetails} />
      </Route>
      {monsterDetails.map((monster) => (
        <Route key={monster.index} path={'/monster/' + monster.index}>
          <MonsterDetails key={monster.index} monster={monster} />
        </Route>
      ))}
    </Switch>
  )
}
export default App
