import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import ActionsAbilities from '../components/ActionsAbilities'
import DetailButtons from '../components/DetailButtons'
import DetailsHead from '../components/DetailsHead'
import DetailsStats from '../components/DetailsStats'
import Proficiencies from '../components/Proficiencies'

export default function MonsterDetails({ monster }) {
  window.scrollTo(0, 0)

  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  return (
    <div ref={componentRef}>
      <DetailsHead {...monster} />
      <DetailButtons handlePrint={handlePrint} />
      <DetailsStats {...monster} />
      <Proficiencies proficiencies={monster.proficiencies} />
      <ActionsAbilities
        headline="Special Abilities"
        dataArray={monster.special_abilities}
      />
      <ActionsAbilities headline={'Actions'} dataArray={monster.actions} />
    </div>
  )
}
