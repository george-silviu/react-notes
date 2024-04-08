import "./App.css";

import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";

function App() {
  const rows = [
    { id: 1, col1: "Hello", col2: "World" },
    { id: 2, col1: "DataGridPro", col2: "is Awesome" },
    { id: 3, col1: "MUI", col2: "is Amazing" },
  ];

  const columns = [
    { field: "col1", headerName: "Column 1", width: 150 },
    { field: "col2", headerName: "Column 2", width: 150 },
  ];

  return (
    <div className="App">
      <h1 className="header">Simple notes app</h1>

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
