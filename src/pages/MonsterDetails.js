import React, { useRef } from 'react'
import { useReactToPrint } from 'react-to-print'
import styled from 'styled-components/macro'
import DetailsHead from '../components/DetailsHead'
import DetailsStats from '../components/DetailsStats'
import Proficiencies from '../components/Proficiencies'
import ActionsAbilities from '../components/ActionsAbilities'

export default function MonsterDetails({ monster }) {
  window.scrollTo(0, 0)

  const componentRef = useRef()
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  })

  return (
    <div ref={componentRef}>
      <DetailsHead
        name={monster.name}
        type={monster.type}
        cr={monster.challenge_rating}
        size={monster.size}
        alignment={monster.alignment}
      />
      <CreatePDF onClick={handlePrint}>PDF</CreatePDF>
      <DetailsStats
        strength={monster.strength}
        dexterity={monster.dexterity}
        constitution={monster.constitution}
        intelligence={monster.intelligence}
        wisdom={monster.wisdom}
        charisma={monster.charisma}
      />
      <Proficiencies proficiencies={monster.proficiencies} />
      <ActionsAbilities
        headline="Special Abilities"
        dataArray={monster.special_abilities}
      />
      <ActionsAbilities headline={'Actions'} dataArray={monster.actions} />
    </div>
  )
}

const CreatePDF = styled.button`
  margin-top: 15px;
  background: crimson;
  color: white;
  margin-left: 42%;
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
`
