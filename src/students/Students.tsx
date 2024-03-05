import React from 'react'
import { GENDER } from '../Segments/consts/k'

interface StudentsProps{
    id:number,
    firstName:string,
    LastName:string,
    gender:GENDER,
}

interface Istyle{
    color:string,
    backgroundColor:string,
    width:number,
}

const Pstyle:Istyle = {color: "red", backgroundColor: "whitesmoke", width:200}

const Students = ({id, firstName, LastName, gender}:StudentsProps) => {

  return (
    <div style={Pstyle} >
      <p >ID: {id}<br></br>
      Full Name: {firstName} {LastName}<br></br>
      Gender: {gender}</p>
    </div>
  )
}

export default Students
