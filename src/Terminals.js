import React from "react";
import { useState } from "react";
import axios from 'axios';
function Terminals() {
  // TERMINAL 1
  const [arrivalA, setarrA] = useState("A1");
  const [arrivalAE, setarrAE] = useState("E");
  const handleAChange1 = (event) => {
    event.preventDefault();
    setarrA(event.target.value);
  };
  const handleAChange2 = (event) => {
    event.preventDefault();
    setarrAE(event.target.value);
  };
  let data1 = {
    gate: arrivalA,
    enable: arrivalAE
  }
  let handleSubmit1 = async (e) => {
    e.preventDefault();
    await axios.patch(' http://localhost:5010/A1', data1).then(res => res.msg).then(alert("Gate Edited successfuly"))
  }

  // Terminal 1 end------------------------------------------------------------------------------------


  const [arrivalB, setarrB] = useState("B1");
  const [arrivalBE, setarrBE] = useState("e");

  let data2 = {
    gate: arrivalB,
    enable: arrivalBE
  }
  const handleAChange4 = (event) => {
    event.preventDefault();
    setarrBE(event.target.value);
  };
  let handleSubmit2 = async (e) => {
    e.preventDefault();
    console.log("im running");
    e.preventDefault();
    await axios.patch(' http://localhost:5010/B1', data2).then(res => res.msg).then(alert("Gate Edited successfuly"))
  }

  const handleAChange3 = (event) => {
    event.preventDefault();
    setarrB(event.target.value);
  };
  // Terminal 2 end------------------------------------------------------------------------------------
  const [arrivalC, setarrC] = useState("C1");
  const [arrivalCE, setarrCE] = useState("en");

  let data3 = {
    gate: arrivalC,
    enable: arrivalCE
  }
  const handleAChange6 = (event) => {
    event.preventDefault();
    setarrCE(event.target.value);
  };
  let handleSubmit3 = async (e) => {
    e.preventDefault();
    console.log("im running");
    e.preventDefault();
    await axios.patch(' http://localhost:5010/C1', data3).then(res => res.msg).then(alert("Gate Edited successfuly"))
  }

  const handleAChange5 = (event) => {
    event.preventDefault();
    setarrC(event.target.value);
  };

  return (



    <div className="mainterminal">

      <form onSubmit={handleSubmit1} className="formt" >
        <label className="term">Terminal 1: </label>
        <select className="drop2" value={arrivalA} onChange={handleAChange1} >
          <option value="A1">A1</option>
          <option value="A2">A2</option>
          <option value="A3">A3</option>
        </select>
        <label className="term" > Position: </label>
        <select className="drop2" value={arrivalAE} onChange={handleAChange2} >
          <option value="E">Enable</option>
          <option value="D">Disable</option>
        </select>
        <button className="term-btn" type="submit">submit</button>
      </form>


      <form onSubmit={handleSubmit2} className="formt">
        <label className="term">Terminal 1: </label>
        <select className="drop2" value={arrivalB} onChange={handleAChange3} >
          <option value="B1">B1</option>
          <option value="B2">B2</option>
          <option value="B3">B3</option>
        </select>
        <label className="term" > Position: </label>
        <select className="drop2" value={arrivalBE} onChange={handleAChange4} >
          <option value="e">Enable</option>
          <option value="d">Disable</option>
        </select>
        <button className="term-btn" type="submit">submit</button>
      </form>



      <form onSubmit={handleSubmit3} className="formt" >
        <label className="term">Terminal 1: </label>
        <select className="drop2" value={arrivalC} onChange={handleAChange5} >
          <option value="C1">C1</option>
          <option value="C2">C2</option>
          <option value="C3">C3</option>
        </select>
        <label className="term" > Position: </label>
        <select className="drop2" value={arrivalCE} onChange={handleAChange6} >
          <option value="en">Enable</option>
          <option value="dis">Disable</option>
        </select>
        <button className="term-btn" type="submit">submit</button>
      </form>

    </div>



  )
}
export default Terminals;