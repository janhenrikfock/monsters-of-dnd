import { useState, useEffect } from 'react'
import saveLocally from '../components/lib/saveLocally'

export default function useFavourites(monsterDetails) {
  const [favourites, setFavourites] = useState([])

  function addFavourite(monsterIndex) {
    const indexMarkedObject = monsterDetails.findIndex(
      (monster) => monster.index === monsterIndex
    )
    const prev = monsterDetails.slice(0, indexMarkedObject)
    const following = monsterDetails.slice(indexMarkedObject + 1, -1)
    const markedObject = monsterDetails.find((monster) => {
      return monster.index === monsterIndex
    })
    const favouriteMonster = {
      ...markedObject,
      favourite: true,
    }
    console.log(favouriteMonster)
    setFavourites([...prev, favouriteMonster, ...following])
  }
  useEffect(() => {
    saveLocally('monsterdetails', favourites)
  }, [favourites])

  return { addFavourite }
}
