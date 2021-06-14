import React, { useEffect, useState } from "react";
import Switch from "./Switch";

function Room() {
  const [trigger1, setTrigger1] = useState(false);
  const [trigger2, setTrigger2] = useState(false);
  const [trigger3, setTrigger3] = useState(false);

  function triggerHandler1(isPressed) {
    if (isPressed) {
      localStorage.setItem("trigger1", "1");
      setTrigger1(true);
    } else {
      localStorage.setItem("trigger1", "0");
      setTrigger1(false);
    }
  }

  function triggerHandler2(isPressed) {
    if (isPressed) {
      localStorage.setItem("trigger2", "1");
      setTrigger2(true);
    } else {
      localStorage.setItem("trigger2", "0");
      setTrigger2(false);
    }
  }

  function triggerHandler3(isPressed) {
    if (isPressed) {
      localStorage.setItem("trigger3", "1");
      setTrigger3(true);
    } else {
      localStorage.setItem("trigger3", "0");
      setTrigger3(false);
    }
  }

  useEffect(() => {
      console.log("room ✨");
    const trigger1 = localStorage.getItem("trigger1");
    const trigger2 = localStorage.getItem("trigger2");
    const trigger3 = localStorage.getItem("trigger3");
    if ((trigger1 === "1") & (trigger2 === "1") & (trigger3 === "1")) {
      setTrigger1(true);
      setTrigger2(true);
      setTrigger3(true);
    } else {
      setTrigger1(false);
      setTrigger2(false);
      setTrigger3(false);
    }
  }, []);

  return (
    <div style={{ display: "flex" }}>
        {console.log("calling room")}
      <Switch id="1" onTrigger={triggerHandler1} />
      <Switch id="2" onTrigger={triggerHandler2} />
      <Switch id="3" onTrigger={triggerHandler3} />
      {trigger1 & trigger2 & trigger3  ? (
        <div style={{ display: "flex", fontSize: "50px" }}>💡</div>
      ) : <div style={{ display: "flex", fontSize: "50px" }}>🪔</div>}
    </div>
  );
}

export default Room;
