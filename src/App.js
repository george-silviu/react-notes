import { useEffect, useState } from "react";

import Button from "@mui/material/Button";
import { DataGrid } from "@mui/x-data-grid";

import NewNoteModal from "./components/new-note-modal/new-note-modal.component";
import DeleteNoteModal from "./components/delete-note-modal/delete-note-modal.component";

import "./App.css";
import "animate.css";

// const apiUrl = process.env.REACT_APP_API_URL || "http://localhost:8080/api";

function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      note: "React",
      description: "React is a JavaScript library for building user interfaces",
    },
    {
      id: 2,
      note: "Node.js",
      description:
        "Node.js is an open-source, cross-platform, back-end JavaScript runtime environment that runs on the V8 engine and executes JavaScript code outside a web browser.",
    },
    {
      id: 3,
      note: "Express",
      description:
        "Express.js, or simply Express, is a back end web application framework for Node.js, released as free and open-source software under the MIT License.",
    },
    {
      id: 4,
      note: "MongoDB",
      description:
        "MongoDB is a source-available cross-platform document-oriented database program. Classified as a NoSQL database program, MongoDB uses JSON-like documents with optional schemas.",
    },
    {
      id: 5,
      note: "Mongoose",
      description:
        "Mongoose is an Object Data Modeling (ODM) library for MongoDB and Node.js. It manages relationships between data, provides schema validation, and is used to translate between objects in code and the representation of those objects in MongoDB.",
    },
    {
      id: 6,
      note: "Material-UI",
      description:
        "Material-UI is a simple and customizable component library to build faster, beautiful, and more accessible React applications. Follow your own design system, or start with Material Design.",
    },
    {
      id: 7,
      note: "Axios",
      description: "Promise based HTTP client for the browser and node.js",
    },
  ]);

  // useEffect(() => {
  //   console.log(apiUrl);
  //   fetch(`${apiUrl}/notes`).then((response) =>
  //     response
  //       .json()
  //       .then((data) => {
  //         setNotes(data);
  //         console.log(data);
  //       })
  //       .catch((error) => {
  //         console.log(error);
  //       })
  //   );
  // }, []);

  const columns = [
    { field: "id", headerName: "ID", flex: 0.1 },
    { field: "note", headerName: "Note", flex: 0.3 },
    { field: "description", headerName: "Description", flex: 1 },
  ];

  const additionalColumns = [
    {
      field: "actions",
      headerName: "Actions",
      flex: 0.2,
      renderCell: (params) => (
        <strong>
          <Button
            variant="contained"
            color="primary"
            style={{ marginRight: "10px" }}
          >
            Edit
          </Button>
          <Button variant="contained" color="error">
            Delete
          </Button>
        </strong>
      ),
    },
  ];

  return (
    <div className="App">
      <h1 className="header animate__animated animate__pulse animate__infinite">
        Simple notes app
      </h1>

      <h2 className="intro-message">Insert your knowledge here</h2>

      <div className="buttons-container">
        <NewNoteModal />

        <DeleteNoteModal />
      </div>

      <div className="data-grid">
        <DataGrid
          checkboxSelection={true}
          rows={notes}
          columns={columns.concat(additionalColumns)}
        />
      </div>
    </div>
  );
}

export default App;
