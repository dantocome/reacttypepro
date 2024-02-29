import React from 'react'
import GENDER from '../../constants/gender'
import { STATUS } from '../consts/k'


function Homepage() {
    interface IStaff{
        id:number,
        firstName:string,
        lastName:string,
        gender:GENDER,
        status:STATUS,
        
    }
    


    const employees:IStaff[] = [
        {
        
            id: 1,
            firstName: "Egele",
            lastName: "Daniel",
            gender:GENDER.Male,
            status:STATUS.Single,
    },
    {
        
        id: 2,
        firstName: "Mercy",
        lastName: "Ojo",
        gender:GENDER.Female,
        status:STATUS.Married,
},
{
        
    id: 3,
    firstName: "Glory",
    lastName: "Juda",
    gender:GENDER.Female,
    status:STATUS.Single,
},
]
 
    interface IHome{
        color:string,

    }
    const styleh2:IHome = {color: "red"}
  return (
    <>
    <div>
      <h2 style = {styleh2}>STRINGCODE NIGERIA LIMITED</h2>
      
    
    <table>
        <tr>
            <th>Id</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Status</th>
        </tr>
        
    {employees.map((employee, index)=>
       <tr>
        <td>{employee.id}</td>
        <td>{employee.firstName}</td>
        <td>{employee.lastName}</td>
        <td>{employee.gender}</td>
        <td>{employee.status}</td>
       </tr>
        )}
        
        </table>
        </div>
        </>
  )

}

export default Homepage
