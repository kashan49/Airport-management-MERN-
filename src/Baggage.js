import axios from "axios";
import React, { useEffect, useState } from "react";
function Baggage() {
  const [datax, setDatax] = useState([]);
  useEffect(() => {
    (async () => {
      await axios.get('http://localhost:5010/getbelt').then(res => res.data).then(data => setDatax(data))
    })()
  }, [])

  console.log(datax)
  return (
    <div className="Baggage" >
      <table className="arr-dep" >
        <tr>
          <th>#Id</th>
          <th>From</th>
          <th>To</th>
          <th>Flight</th>
          <th>Departure</th>
          <th>Arrival</th>
          <th>Belt</th>
        </tr>
      </table>

      {
        datax.map((salm) => {
          return (
            <table className="arr-dep" >
              <tr>
                <td>{salm.id}</td>
                <td>{salm.from}</td>
                <td>{salm.to}</td>
                <td>{salm.flight}</td>
                <td>{salm.departure}</td>
                <td>{salm.arrival}</td>
                <td>{salm.belt}</td>

              </tr>
            </table>
          )
        })
      }

    </div>
  )
}
export default Baggage;