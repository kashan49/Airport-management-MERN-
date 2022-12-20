import React from 'react';
import { useState } from 'react'
import axios from 'axios';

export default function Edit() {
  const [arrival, setarrival] = useState("");
  const [carrier, setcarrier] = useState("");
  const [flight, setflight] = useState("");
  const [terminal, setterminal] = useState("");
  const [time, settime] = useState("");
  const [timen, settimen] = useState("");
  const [status, setstatus] = useState("");
  const [statusn, setstatusn] = useState("");
  const [hours, sethours] = useState("n");
  const [hours1, sethours1] = useState("n");
  const [hours2, sethours2] = useState("n");
  const [gate, setgate] = useState("");
  const [dell, setdelete] = useState("");
  const [id, setid] = useState("");

  function tergate(e) {
    setterminal(e.target.value);
    if (e.target.value === "1") {
      let arr = ["A1", "A2", "A3"];
      let randomValue = arr[Math.floor(Math.random() * arr.length)];
      setgate(randomValue);
    }
    if (e.target.value === "2") {
      let arr = ["B1", "B2", "B3"];
      let randomValue = arr[Math.floor(Math.random() * arr.length)];
      setgate(randomValue);
    }
    if (e.target.value === "3") {
      let arr = ["C1", "C2", "C3"];
      let randomValue = arr[Math.floor(Math.random() * arr.length)];
      setgate(randomValue);
    }

  }

  let data = {
    arr: arrival,
    carr: carrier,
    flight: flight,
    term: terminal,
    time: time,
    status: status,
    hour: hours,
    gate: gate
  }
  const Add = async (e) => {
    e.preventDefault();
    console.log(data)
    await axios.post("http://localhost:5010/adddata", data).then(res => res.msg).then(alert("Data Added successfuly"))
  }

  const handleChange1 = (event) => {

    sethours(event.target.value);

  };
  const handleChange2 = (event) => {

    sethours1(event.target.value);

  };
  const handleChange3 = (event) => {

    sethours2(event.target.value);

  };

  let del = {
    id: dell,
    hour: hours1,
  }
  const Delete = async (e) => {
    e.preventDefault();
    console.log(del)
    await axios.post("http://localhost:5010/deldata", del).then(res => res.msg).then(alert("Data Deleted successfuly"))
  }

  let update = {
    hour: hours2,
    time: timen,
    status: statusn,
    id: id
  }
  const Update = async (e) => {
    e.preventDefault();
    console.log(del)
    await axios.post("http://localhost:5010/update", update).then(res => {
      let data = res.data;
      console.log(res.data)
      if (data === "record inserted") {
        alert("Data Updated");
      }
      else {
        alert("Wrong Id");
      }
    })
  }

  return (

    <div className='ADD_DEL'>
      {/* ADD/ */}
      <form onSubmit={Add} className="add-del" data-aos="zoom-out-right">
        <h1>ADD Data of Arrival</h1>
        <input type="text" onChange={(e) => setarrival(e.target.value)} name="arrival" placeholder="Arrival" required />
        <input type="text" onChange={(e) => setcarrier(e.target.value)} name="carrier" placeholder="Carrier" required />
        <input type="text" onChange={(e) => setflight(e.target.value)} name="flight" placeholder="Flight" required />
        <input type="number" onChange={tergate} name="terminal" placeholder="Terminal" required />
        {/* <input type="text"  onChange={(e) => setgate(e.target.value)} name="gate"  placeholder="gate" required /> */}

        <input type="time" onChange={(e) => settime(e.target.value)} name="time" placeholder="Time" required />
        <input type="text" onChange={(e) => setstatus(e.target.value)} name="status" placeholder="Status" required />
        <select className="drop" value={hours} onChange={handleChange1} >
          <option value="n">1 HOUR</option>
          <option value="t">2 HOUR</option>
          <option value="f">4 HOUR</option>
        </select>
        <button type='submit' className="ar-btn">Add</button>
      </form>


      {/* Update */}

      <form className='del' onSubmit={Update} data-aos="zoom-out-left">
        <h1>Update Data of Arrival</h1>
        <input type="number" name="id" onChange={(e) => setid(e.target.value)} placeholder="Enter Id of flight" required />
        <select className="drop" value={hours2} onChange={handleChange3} >
          <option value="n">1 HOUR</option>
          <option value="t">2 HOUR</option>
          <option value="f">4 HOUR</option>
        </select>
        <label> <strong>Time:</strong></label>
        <input type="time" onChange={(e) => settimen(e.target.value)} name="time" placeholder="Time" required />
        <input type="text" onChange={(e) => setstatusn(e.target.value)} name="status" placeholder="Status" />
        <button type='submit' className="ar-btn">Update</button>
      </form>

      {/* DElete */}
      <form className='del' onSubmit={Delete} data-aos="zoom-out-left">
        <h1>Delete Data of Arrival</h1>
        <input type="number" name="delete" onChange={(e) => setdelete(e.target.value)} placeholder="Enter Id of flight" required />
        <select className="drop" value={hours1} onChange={handleChange2} >
          <option value="n">1 HOUR</option>
          <option value="t">2 HOUR</option>
          <option value="f">4 HOUR</option>
        </select>
        <button type='submit' className="ar-btn">Delete</button>
      </form>





    </div>
  )
}
