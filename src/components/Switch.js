import React, { useEffect, useState } from "react";

function Switch({ onTrigger }) {

  const [isPressed, setIsPressed] = useState(false);


  function switchHandler() {
    if (isPressed) {
    //   localStorage.setItem("switch", "off");
      setIsPressed(false);
      onTrigger(false);
    } else {
    //   localStorage.setItem("switch", "on");
      setIsPressed(true);
      onTrigger(true);
    }
  }

    useEffect(() => {
      const getSwitchStatus = localStorage.getItem("switch")
      if(getSwitchStatus === 'on'){
        setIsPressed(true);
      }else{
        setIsPressed(false);
      }
  }, []);

  return (
    <div>
      <button style={{backgroundColor:"whitesmoke", borderRadius:"20px", padding:"1rem", fontSize:"20px"}} onClick={switchHandler}>{isPressed ? "off" : "on"}</button>
    </div>
  );
}

export default Switch;
