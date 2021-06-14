import React, { useRef } from "react";
import "./UserEntry.css";

function UserEntry({ onAddUser }) {
  const emailInputRef = useRef();
  const ageInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    // extract value from useRef
    const enteredEmail = emailInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    //creating object from new user
    const newUserInput = {
      id: Math.random().toLocaleString(), //creating id 
      email: enteredEmail,
      age: enteredAge,
    };

    // sending object to app
    onAddUser(newUserInput);

    // reseting value of email and age
    emailInputRef.current.value = "";
    ageInputRef.current.value = "";
  }

  return (
    <form onSubmit={submitHandler} className="form-main">
      <div className="form-main-field">
        <div>
          <label>Email</label>
          <input ref={emailInputRef} id="email" type="email" />
        </div>
        <div>
          <label>Age</label>
          <input ref={ageInputRef} id="age" type="number" />
        </div>
      </div>
      <button type="submit">add</button>
    </form>
  );
}

export default UserEntry;
