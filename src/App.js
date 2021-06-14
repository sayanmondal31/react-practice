import React, { useState } from "react";
import UserDetailsView from "./components/UserDetailsView";
import UserEntry from "./components/UserEntry";

function App() {
  const [userDetails, setUserDetails] = useState([]);

  //✏️ create event handler which takes new userDetail as object
  //✏️ and add to userDetails
  function addUserHandler(newUserDetail) {
    setUserDetails((prevDetails) => {
      return [...prevDetails, newUserDetail];
    });
  }

  return (
    <div>
      <h2 style={{color:"purple"}}>User details entry With <span style={{color:"purple"}} >useRef()</span></h2>
      <UserEntry onAddUser={addUserHandler} />
      {userDetails.map((user) => {
        return <UserDetailsView email={user.email} age={user.age} />;
      })}
    </div>
  );
}

export default App;
