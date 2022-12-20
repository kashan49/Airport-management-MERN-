import axios from "axios";
import React, { useEffect, useState } from "react";
function List1() {
  const [datax, setDatax] = useState([]);
  useEffect(() => {
   
    (async () => {
      await axios.get('http://localhost:5010/departureTable').then(res => res.data).then(data => setDatax(data))
    })()
  }, [])

  console.log(datax)

  return (
    <div className="Baggage">
      <table className="arr-dep" >
        <tr>
          <th>#Id</th>
          <th>Departure</th>
          <th>Carrier</th>
          <th>Flight</th>
          <th>Gate</th>
          <th>Terminal</th>
          <th>Time</th>
          <th>Status</th>
        </tr>
      </table>
      {
        datax.map((item) => {

          return (
            <table className="arr-dep" >

              <tr>
                <td>{item.id}</td>
                <td>{item.departure}</td>
                <td>{item.carrier}</td>
                <td>{item.flight}</td>
                <td>{item.gate}</td>
                <td>{item.terminal}</td>
                <td>{item.time}</td>
                <td>{item.status}</td>
              </tr>
            </table>
          )
        })
      }

    </div>
  )
}
export default List1;