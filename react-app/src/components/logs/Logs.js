import React, { Component } from "react";
import "./Logs.scss";

class Logs extends Component {
  state = {
    logs: [
      { onTime: "06/11/2020 10:00:00", offTime: "06/11/2020 10:05:00" },
      { onTime: "07/11/2020 10:00:00", offTime: "07/11/2020 10:05:00" },
      { onTime: "08/11/2020 10:00:00", offTime: "08/11/2020 10:05:00" },
      { onTime: "09/11/2020 10:00:00", offTime: "09/11/2020 10:05:00" },
      { onTime: "10/11/2020 10:00:00", offTime: "10/11/2020 10:05:00" },
      { onTime: "11/11/2020 10:00:00", offTime: "11/11/2020 10:05:00" },
    ],
  };
  render() {
    const { logs } = this.state;
    return (
      <div className="logs">
        <h1>UVFY Logs</h1>
        <div className="search">
          <div className="form-field">
            <div className="label">From Date</div>
            <input type="date" />
          </div>
          <div className="form-field">
            <div className="label">To Date</div>
            <input type="date" />
          </div>
          <button>Fetch Logs</button>
          <button className="secondary disabled">Download Report</button>
        </div>
        <table>
          <thead>
            <tr>
              <th>S.No.</th>
              <th>On Time</th>
              <th>Off Time</th>
            </tr>
          </thead>
          <tbody>
            {logs &&
              logs.map((log, index) => (
                <tr key={log}>
                  <td>{index + 1}</td>
                  <td>{log.onTime}</td>
                  <td>{log.offTime}</td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    );
  }
}

export default Logs;
