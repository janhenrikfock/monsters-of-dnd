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
        <Route path={'/monster/' + monster.index}>
          <MonsterDetails monster={monster} />
        </Route>
      ))}
    </Switch>
  )
}
export default App
