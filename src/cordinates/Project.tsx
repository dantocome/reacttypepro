import React from 'react'
import "./pro.css"
import GENDER from '../constants/gender'


 
const Project = () => {
    interface IEmployee{
        id:number,
        firstName:string,
        lastName:string,
        gender:GENDER,
     }

  const employees:IEmployee[] = [
    {
      id:1,
      firstName: "Daniel",
      lastName: "Egele",
      gender: GENDER.Male,
    },
    {
        id:2,
        firstName: "Doris",
        lastName: "Amarachi",
        gender: GENDER.Female,
      },
      {
        id:3,
        firstName: "Charles",
        lastName: "Benedicth",
        gender: GENDER.Male,
      },
  ];




  return (

    <div>
      <h2>Stringcode Staff</h2>
      <table>
        <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
        </tr>
        {employees.map((employee, index)=>
        <tr>
            <td>{employee.id}</td>
            <td>{employee.firstName}</td>
            <td>{employee.lastName}</td>
            <td>{employee.gender}</td>
        </tr>
        
        )}
      </table>
          
    </div>
  
    
  )
}

export default Project