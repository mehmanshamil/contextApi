import React, { useContext } from "react";
import { globalContext } from "../../../context/GlobalProvider";

const Button = () => {
  const { mode, setMode } = useContext(globalContext);


  return <button onClick={() => setMode(!mode)}>{mode? "light":"dark"}</button>;
};

export default Button;
