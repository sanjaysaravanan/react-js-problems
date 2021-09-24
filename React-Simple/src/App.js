import React, { useState } from "react";
import "./App.css";

function App() {
  const data = [
    {
      name: "Sanjay",
      subject: "Maths",
      marks: 95,
    },
    {
      name: "Sanjay",
      subject: "English",
      marks: 85,
    },
    {
      name: "Sam",
      subject: "Maths",
      marks: 90,
    },
    {
      name: "Sam",
      subject: "English",
      marks: 92,
    },
    {
      name: "Saravanan",
      subject: "Maths",
      marks: 88,
    },
    {
      name: "Saravanan",
      subject: "English",
      marks: 95,
    },
  ];

  const [tableData, setTableData] = useState(data);

  const [state, setState] = useState({
    subject: "All",
  });

  const handleSubject = (name) => {
    setState({ subject: name });
    if (name === "All") setTableData(data);
    else setTableData(data.filter((item) => item.subject === name));
  };

  const handleSearch = (event) => {
    const value = event.target.value.toLowerCase();
    const currentData =
      state.subject === "All"
        ? data
        : data.filter((item) => item.subject === state.subject);
    setTableData(
      currentData.filter((item) => item.name.toLowerCase().includes(value))
    );
  };

  return (
    <div style={{ margin: "50px" }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <input
          type="text"
          placeholder="Search for a name..."
          onChange={(e) => handleSearch(e)}
          style={{ height: "40px" }}
        />
        <div style={{ display: "flex" }}>
          <div
            style={{
              backgroundColor: state.subject === "All" ? "blue" : "white",
              color: state.subject === "All" ? "white" : "black",
              border: "1px solid",
              margin: "10px",
              cursor: "pointer",
              padding: "10px",
            }}
            onClick={() => handleSubject("All")}
          >
            All
          </div>
          <div
            style={{
              backgroundColor: state.subject === "Maths" ? "blue" : "white",
              color: state.subject === "Maths" ? "white" : "black",
              border: "1px solid",
              margin: "10px",
              cursor: "pointer",
              padding: "10px",
            }}
            onClick={() => handleSubject("Maths")}
          >
            Maths
          </div>
          <div
            style={{
              backgroundColor: state.subject === "English" ? "blue" : "white",
              color: state.subject === "English" ? "white" : "black",
              border: "1px solid",
              margin: "10px",
              cursor: "pointer",
              padding: "10px",
            }}
            onClick={() => handleSubject("English")}
          >
            English
          </div>
        </div>
      </div>
      <div style={{ marginTop: "50px" }}>
        <table>
          <tr>
            <th>Name</th>
            <th>Subject</th>
            <th>Marks</th>
          </tr>
          {tableData.map((item) => (
            <tr>
              <td>{item.name}</td>
              <td>{item.subject}</td>
              <td>{item.marks}</td>
            </tr>
          ))}
        </table>
      </div>
    </div>
  );
}

export default App;
