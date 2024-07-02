import { Task } from "../components/DataTable.model";

export const taskData: Task[] = [
  {
    id: 1,
    name: "Wash clothes",
    done: true,
    doneDate: new Date("06/25/2024"),
  },
  {
    id: 2,
    name: "Sweep floor",
    done: false,
    doneDate: null,
  },
  {
    id: 3,
    name: "Trim grass",
    done: false,
    doneDate: null,
  },
  {
    id: 4,
    name: "Go to grocery",
    done: true,
    doneDate: new Date("06/15/2024"),
  },
  {
    id: 5,
    name: "Dental checkup",
    done: true,
    doneDate: new Date("06/18/2024"),
  },
  {
    id: 6,
    name: "Process documents",
    done: false,
    doneDate: null,
  },
  {
    id: 7,
    name: "Go to church",
    done: false,
    doneDate: null,
  },
];

export const columns = [
  { label: "Task Id", accessor: "id" },
  { label: "Name", accessor: "name" },
  { label: "Date completed", accessor: "doneDate" },
  { label: "Status", accessor: "done" }
];
