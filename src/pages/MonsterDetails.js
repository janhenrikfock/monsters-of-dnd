import React, { useRef } from 'react'
import styled from 'styled-components/macro'
import { useReactToPrint } from 'react-to-print'
import ActionsAbilities from '../components/ActionsAbilities'
import DetailButtons from '../components/DetailButtons'
import DetailsHead from '../components/DetailsHead'
import DetailsStats from '../components/DetailsStats'
import Proficiencies from '../components/Proficiencies'

export default function MonsterDetails({ monster, useTitle }) {
  window.scrollTo(0, 0)
  useTitle(monster)

  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  return (
    <DetailsContainer ref={componentRef}>
      <DetailsHead {...monster} />
      <DetailButtons handlePrint={handlePrint} />
      <DetailsStats {...monster} />
      <Proficiencies proficiencies={monster.proficiencies} />
      <ActionsAbilities
        headline="Special Abilities"
        dataArray={monster.special_abilities}
      />
      <ActionsAbilities headline={'Actions'} dataArray={monster.actions} />
      <SourceInfo>
        The information provided on this page is provided by
        http://www.dnd5eapi.co/
      </SourceInfo>
    </DetailsContainer>
  )
}
const DetailsContainer = styled.div`
  @media print {
    padding: 40px;
  }
`
const SourceInfo = styled.p`
  font-style: italic;
  display: none;
  @media print {
    display: block;
  }
`
