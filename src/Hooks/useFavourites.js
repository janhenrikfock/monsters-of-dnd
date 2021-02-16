import saveLocally from '../components/lib/saveLocally'
import { useState } from 'react'

export default function useFavourites(monsterDetails = []) {
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

    setFavourites([...prev, favouriteMonster, ...following])
    saveLocally('monsterdetails', [...prev, favouriteMonster, ...following])
  }

  return { favourites, addFavourite }
}
