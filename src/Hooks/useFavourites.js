import { useState } from 'react'

export default function useFavourites(monsterDetails) {
  const [favourites, setFavourites] = useState([])

  function addFavourite(monsterIndex) {
    const indexMarkedObject = monsterDetails.findIndex(
      (x) => x.index === monsterIndex
    )
    const prev = monsterDetails.slice(0, indexMarkedObject)
    const markedObject = monsterDetails.slice(
      indexMarkedObject,
      indexMarkedObject + 1
    )
    const following = monsterDetails.slice(indexMarkedObject + 1, -1)

    const favouriteMonster = {
      ...markedObject,
      favourite: true,
    }
    setFavourites([...prev, favouriteMonster, ...following])
  }

  return { favourites, addFavourite }
}
