import React from "react";
import { useState } from "react";
import axios from 'axios';
function Terminaldep() {
  // TERMINAL 1
  const [arrivalA, setarrA] = useState("a1");
  const [arrivalAE, setarrAE] = useState("ea");
  const handleAChange1 = (event) => {
    event.preventDefault();
    setarrA(event.target.value);
  };
  const handleAChange2 = (event) => {
    event.preventDefault();
    setarrAE(event.target.value);
  };
  let data4 = {
    gate: arrivalA,
    enable: arrivalAE
  }
  let handleSubmit1 = async (e) => {
    e.preventDefault();
    await axios.patch(' http://localhost:5010/a1', data4).then(res => res.msg).then(alert("Gate Edited successfuly"))
  }


  // Terminal 1 end------------------------------------------------------------------------------------


  const [arrivalB, setarrB] = useState("b1");
  const [arrivalBE, setarrBE] = useState("eaa");

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
    await axios.patch(' http://localhost:5010/b1', data2).then(res => res.msg).then(alert("Gate Edited successfuly"))
  }

  const handleAChange3 = (event) => {
    event.preventDefault();
    setarrB(event.target.value);
  };
  //  // Terminal 2 end------------------------------------------------------------------------------------
  const [arrivalC, setarrC] = useState("c1");
  const [arrivalCE, setarrCE] = useState("eaaa");

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
    await axios.patch(' http://localhost:5010/c1', data3).then(res => res.msg).then(alert("Gate Edited successfuly"))
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
          <option value="a1">A1</option>
          <option value="a2">A2</option>
          <option value="a3">A3</option>
        </select>
        <label className="term" > Position: </label>
        <select className="drop2" value={arrivalAE} onChange={handleAChange2} >
          <option value="ea">Enable</option>
          <option value="da">Disable</option>
        </select>
        <button className="term-btn" type="submit">submit</button>
      </form>


      <form onSubmit={handleSubmit2} className="formt">
        <label className="term">Terminal 1: </label>
        <select className="drop2" value={arrivalB} onChange={handleAChange3} >
          <option value="b1">B1</option>
          <option value="b2">B2</option>
          <option value="b3">B3</option>
        </select>
        <label className="term" > Position: </label>
        <select className="drop2" value={arrivalBE} onChange={handleAChange4} >
          <option value="eaa">Enable</option>
          <option value="daa">Disable</option>
        </select>
        <button className="term-btn" type="submit">submit</button>
      </form>



      <form onSubmit={handleSubmit3} className="formt">
        <label className="term">Terminal 1: </label>
        <select className="drop2" value={arrivalC} onChange={handleAChange5} >
          <option value="c1">C1</option>
          <option value="c2">C2</option>
          <option value="c3">C3</option>
        </select>
        <label className="term" > Position: </label>
        <select className="drop2" value={arrivalCE} onChange={handleAChange6} >
          <option value="eaaa">Enable</option>
          <option value="daaa">Disable</option>
        </select>
        <button className="term-btn" type="submit">submit</button>
      </form>

    </div>



  )
}
export default Terminaldep;