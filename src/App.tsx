import React from 'react';
import './App.css';
import { Task } from './components/DataTable.model';
import DataTable from './components/DataTable';
import { DEFAULT_PAGE_SIZE } from './components/Datatable.util';

function App() {

  const data: Task[] = [
    {
      id: 1, name: "Wash clothes", done: true, doneDate: (new Date("06/25/2024"))
    },
    {
      id: 2, name: "Sweep floor", done: false, doneDate: null
    },
    {
      id: 3, name: "Trim grass", done: false, doneDate: null
    },
    {
      id: 4, name: "Go to grocery", done: true, doneDate: (new Date("06/15/2024"))
    },
    {
      id: 5, name: "Dental checkup", done: true, doneDate: (new Date("06/18/2024"))
    },
    {
      id: 6, name: "Process documents", done: false, doneDate: null
    }
  ];

  const columns = ["Task Id", "Name", "Date done", "Status", "Action"];

  return (
    <div className="App">
      <DataTable pageSize={DEFAULT_PAGE_SIZE} columns={columns} data={data} />
    </div>
  );
}

export default App;
