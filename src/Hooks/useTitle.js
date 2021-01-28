import { useEffect } from 'react'

export function useTitle(monster) {
  useEffect(() => {
    if (monster) {
      document.title = monster.name
    } else {
      document.title = 'Monsters of DnD'
    }
  })
}
