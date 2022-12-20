import React from "react";
import { useNavigate } from 'react-router-dom';
function Airline() {
  const nav = useNavigate();
  function handleClick() {
    nav("/Arr")
  }
  function handleClick1() {
    nav("/Baggage")
  }
  function handleClick2() {
    nav("/Edit")
  }
  function handleClick3() {
    nav("/Editd")
  }


  return (
    <div className="Passenger">
      <h2>Airline Employ</h2>
      <button onClick={handleClick} className="third">Flight Details</button>
      <button onClick={handleClick1} className="third">Baggage Details</button>
      <button onClick={handleClick2} className="third">Enable/Disable Arrival</button>
      <button onClick={handleClick3} className="third">Enable/Disable Departure</button>
    </div>
  )
}
export default Airline;