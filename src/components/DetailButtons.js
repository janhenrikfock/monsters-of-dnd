import React from 'react'
import styled from 'styled-components/macro'
import { NavLink } from 'react-router-dom'
import PropTypes from 'prop-types'
import homelogo from './images/home.png'

DetailButtons.propTypes = {
  handlePrint: PropTypes.func,
}

export default function DetailButtons({ handlePrint }) {
  return (
    <AllButtons>
      <NavLink to={'/'}>
        <BackButton src={homelogo} alt="back to home" />
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
  @media print {
    display: none;
  }
`
const PDFButton = styled.button`
  margin: 0;
  font-weight: bold;
  display: inline-block;
  background: crimson;
  color: white;
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
  cursor: pointer;
`
const BackButton = styled.img`
  padding: 7px;
  display: inline-block;
  background: lightgreen;
  color: white;
  border: none;
  border-radius: 50%;
  width: 45px;
  height: 45px;
`
