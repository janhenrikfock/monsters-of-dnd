import React, { useEffect, useState } from 'react'

export default function AllMonstersList() {
  const [monsterList, setMonsterList] = useState([])

  useEffect(() => {
    fetch(`https://www.dnd5eapi.co/api/monsters`)
      .then((res) => res.json())
      .then((data) => setMonsterList(data.results))
      .catch((err) => console.log(err))
  })
  return (
    <>
      <h1>Monsters of DnD</h1>
      {monsterList.map((monster, index) => (
        <h2 key={index}>{monster.name}</h2>
      ))}
    </>
  )
}
