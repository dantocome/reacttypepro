import React, { ChangeEvent, useState } from 'react'
import { GENDER } from '../Segments/consts/k'

interface Employee{
    firstName:string,
    lastName:string,
    jobtitle:string,

}

const EmployeeInfo = () => {
    const[employee, setEmployee] = useState<Employee>({
        firstName: "",
        lastName: "",
        jobtitle: "",

    });
    const handleFirstNameChange = (e: ChangeEvent<HTMLInputElement | HTMLAreaElement>
        )=>{
        setEmployee((prevEmployee)=> ({
            ...prevEmployee,
            firstName: e.target.value,
        }));
    }
    const handlelastNameChange = (
        e: ChangeEvent <HTMLInputElement | HTMLAreaElement>
    ) =>{
        setEmployee((prevEmployee) => ({
            ...prevEmployee,
            lastName: e.target.value,
        }));
    }
    const handlejobtitleChange = (
        e: ChangeEvent <HTMLInputElement | HTMLAreaElement>
    ) =>{
        setEmployee((prevEmployee) => ({
            ...prevEmployee,
            jobtitle: e.target.value,
        }));
    }
  return (
    <>
    <div>
      EmployeeInfo
    </div>
    <label htmlFor="">First Name</label>
    <input type="text" id ="firstName" name = "firstName" onChange={handleFirstNameChange} value={employee.firstName}
    />
    <br />
    <label htmlFor="">last Name</label>
    <input type="text" id ="lastName"name = "lastName"onChange={handlelastNameChange}value={employee.lastName}
    />
    <br />
    <label htmlFor="">Job title</label>
    <input type="text" id ="jobtitle" name = "jobtitle" onChange={handlejobtitleChange} value={employee.jobtitle}
    />
    <br />
    <h2>Display Employee Information</h2>
    <p>First Name: {employee.firstName}</p>
    <p>Last Name: {employee.lastName}</p>
    <p>Job title: {employee.jobtitle}</p>

    
    </>
    
  );
};

export default EmployeeInfo
