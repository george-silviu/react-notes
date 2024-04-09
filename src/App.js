import "./App.css";
import "animate.css";

import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";

function App() {
  const rows = [
    { id: 1, note: "Buy vegetables", description: "" },
    { id: 2, note: "Do laundry", description: "Urgent" },
    { id: 3, note: "Call mom", description: "" },
  ];

  const columns = [
    { field: "id", headerName: "ID", flex: 0.1 },
    { field: "note", headerName: "Note", flex: 0.3 },
    { field: "description", headerName: "Description", flex: 1 },
  ];

  return (
    <div className="App">
      <h1 className="header animate__animated animate__pulse animate__infinite">
        Simple notes app
      </h1>

      <h2 className="intro-message">Insert your knowledge here</h2>

      <div className="buttons-container">
        <Button
          style={{ marginRight: "10px" }}
          variant="contained"
          color="success"
        >
          Add note
        </Button>

        <Button variant="contained" color="error">
          Remove note
        </Button>
      </div>

      <div className="data-grid">
        <DataGrid checkboxSelection={true} rows={rows} columns={columns} />
      </div>
    </div>
  );
}

export default App;
