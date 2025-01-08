import {React, useState} from 'react';

export default function App() {

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [position, setPosition] = useState("");

  const updateFirstName = (event) => {
    setFirstName(event.target.value);
  }

  const updateLastName = (event) => {
    setLastName(event.target.value);
  }

  const updateEmail = (event) => {
    setEmail(event.target.value);
  }

  const updatePosition = (event) => {
    setPosition(event.target.value);
  }

  const saveButton = (event) => {
    console.log("saved data")
  }

  return (
    <>
    <label>First Name</label>
      <input type="text" name="firstName" value={firstName} onChange={updateFirstName}></input> <br></br>
    <label>Last Name</label>  
    <input type="text" name="lastName" value={lastName} onChange={updateLastName}></input> <br></br>
    <label>Email</label>
    <input type="text" name="emai" value={email} onChange={updateEmail}></input> <br></br>

   <input type="radio" name="position" value="student" onChange={updatePosition} checked={position === "student"}></input>
   <label>Student</label> <br></br>
   <input type="radio" name="position" value="educator" onChange={updatePosition} checked={position === "educator"}></input>
   <label>Educator</label> <br></br>
   <input type="radio" name="position" value="developer" onChange={updatePosition} checked={position === "developer"}></input>
   <label>Developer</label> <br></br>

   <button type="button" onClick={saveButton}>Submit</button>
    </>
  )
}