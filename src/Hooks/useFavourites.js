import { useState } from 'react'

export default function useFavourites(monsterDetails) {
  const [favourites, setFavourites] = useState([])

  function addFavourite(index) {
    const previous = monsterDetails.slice(0, index)
    const marked = monsterDetails.splice(index, 1)
    const following = monsterDetails.slice(index + 1, -1)

    const newFavourite = {
      ...marked,
      favourite: true,
    }
    setFavourites([...previous, newFavourite, ...following])
  }

  return { favourites, addFavourite }
}
