import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'

export default function DetailButtons({ handlePrint }) {
  return (
    <AllButtons>
      <NavLink to={'/'}>
        <BackButton>Home</BackButton>
      </NavLink>
      <PDFButton onClick={handlePrint}>PDF</PDFButton>
    </AllButtons>
  )
}

const AllButtons = styled.div`
  margin-top: 10px;
  display: flex;
  flex: 1 1 auto;
  justify-content: space-evenly;
`
const PDFButton = styled.button`
  margin: 0;
  display: inline-block;
  background: crimson;
  color: white;
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
`
const BackButton = styled.button`
  display: inline-block;
  background: blue;
  color: white;
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
`
