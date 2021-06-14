import React, {  useEffect, useState } from "react";

function UserInput() {
  const [nameInput, setNameInput] = useState("");
  const [addressInput, setAddressInput] = useState("");
  const [emailInput, setEmailInput] = useState("");
  const [passwordInput, setPasswordInput] = useState("");
  const [formIsValid, setFormIsValid] = useState(false)

  useEffect(()=>{
    // var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
    setFormIsValid(
        nameInput.trim().length >3 & emailInput.includes("@") & passwordInput.trim().length >6
    )
  },[nameInput,emailInput,passwordInput])
  

  function nameChangeHandler(event) {
    setNameInput(event.target.value);
  }
  function addressChangeHandler(event) {
    setAddressInput(event.target.value);
  }
  function emailChangeHandler(event) {
    setEmailInput(event.target.value);
  }
  function passwordChangeHandler(event) {
    setPasswordInput(event.target.value);
  }

  function submitHandler(event){
      event.preventDefault()

      const userDetail = {
          name: nameInput,
          address:addressInput,
          email:emailInput,
          password: passwordInput
      }

      console.log(userDetail)
  }

  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="text">Name</label>
          <input
            required
            type="text"
            value={nameInput}
            onChange={nameChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="text">Address</label>
          <input type="textArea" value={addressInput}  onChange={addressChangeHandler} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input required type="email" value={emailInput}  onChange={emailChangeHandler} />
        </div>
        <div>
          <label htmlFor="text">Password</label>
          <input required type="password" value={passwordInput} onChange={passwordChangeHandler} />
        </div>
        <button type="submit" disabled={!formIsValid}>submit</button>
      </form>
    </div>
  );
}

export default UserInput;
