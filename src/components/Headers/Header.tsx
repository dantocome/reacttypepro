import React from 'react'
import "./Header.css"
import GENDER from '../../constants/gender';




function Header() {
    interface IEmployee{
        id: number;
        firstName:string;
        lastName:string;
        gender:GENDER;
    }

    const employees:IEmployee[] = [
        {
            id: 1,
            firstName: "Daniel",
            lastName:"Egele",
            gender: GENDER.Male,
    
    
    },
    {
        id: 2,
        firstName: "Doris",
        lastName:"Amarachi",
        gender: GENDER.Female,


},
{
    id: 3,
    firstName: "Emmanuel",
    lastName:"Abubakar",
    gender: GENDER.Male,


},
{
    id: 4,
    firstName: "Emma",
    lastName:"Ella",
    gender: GENDER.Female,


},
 ];
 

 }

  return (
    <div className="header">
        <div className="mai">
        <div className="sub">
      <h2>stringcode Limited</h2>
      <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit.
         Nam dolores, quo mollitia repellendus modi tempora!
         </p>
         </div>
         <div className="table">
         <table className="table table-striped-columns">
            <tr className='info'>
                    <th>Id</th>
                    <th>First Name</th>
                    <th>Last Name</th>
                    <th>Gender</th>
                    
            </tr>
            {employees.map((employee, index) =>
            <tr>
                <td>{employee.id}</td>
                <td>{employee.firstName}</td>
                <td>{employee.lastName}</td>
                <td>{employee.gender}</td>
                
            </tr>
            )}
            
         </table>
         </div>
         </div>
    </div>
  )
}

export default Header
