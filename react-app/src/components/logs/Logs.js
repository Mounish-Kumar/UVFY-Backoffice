import React, { Component } from "react";

class Logs extends Component {
  state = {};
  render() {
    return (
      <div className="logs">
        <h1>UVFY Logs</h1>
        <div className="search">
          <label>
            <div>From Date</div>
            <input type="date" />
          </label>
          <label>
            <div>To Date</div>
            <input type="date" />
          </label>
          <button>Fetch Logs</button>
          {/* <button>Generate Report</button> */}
        </div>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Start Time</th>
              <th>End Time</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td></td>
              <td></td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Logs;
