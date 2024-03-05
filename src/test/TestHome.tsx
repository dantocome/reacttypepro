import React from 'react'
import { GENDER } from '../Segments/consts/k'

interface ICandidates{
    id: number,
    firstName:string,
    lastName:string,
    gender: GENDER,
}


const TestHome = ({id, firstName, lastName, gender}:ICandidates) => {
  return (
    <div>
      <p>ID: {id}</p>
      <p>first Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Gender: {gender}</p>
    </div>
  )
}

export default TestHome
