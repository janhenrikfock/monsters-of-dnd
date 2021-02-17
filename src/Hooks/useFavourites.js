import saveLocally from '../components/lib/saveLocally'
import { useState } from 'react'

export default function useFavourites(monsterDetails = []) {
  const [favourites, setFavourites] = useState([])

  function toggleFavourite(monsterIndex) {
    const indexMarkedObject = monsterDetails.findIndex(
      (monster) => monster.index === monsterIndex
    )
    const prev = monsterDetails.slice(0, indexMarkedObject)
    const following = monsterDetails.slice(indexMarkedObject + 1)
    const markedObject = monsterDetails.find((monster) => {
      return monster.index === monsterIndex
    })
    if (!markedObject.favourite) {
      const favouriteMonster = {
        ...markedObject,
        favourite: true,
      }
      console.log(favouriteMonster)
      setFavourites([...prev, favouriteMonster, ...following])
      saveLocally('monsterdetails', [...prev, favouriteMonster, ...following])
    } else {
      delete markedObject['favourite']
      console.log(markedObject)
      setFavourites([...prev, markedObject, ...following])
      saveLocally('monsterdetails', [...prev, markedObject, ...following])
    }
  }

  return { favourites, toggleFavourite }
}
