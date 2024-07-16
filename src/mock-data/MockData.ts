import { Task } from "../components/models/DataTable.model";

export const taskData: Task[] = [
  {
    id: 1,
    name: "Wash clothes",
    done: true,
    doneDate: "",
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
    doneDate: "",
  },
  {
    id: 5,
    name: "Dental checkup",
    done: true,
    doneDate: "",
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
  { label: "Status", accessor: "done" },
  { label: "Actions", accessor: null }
];
