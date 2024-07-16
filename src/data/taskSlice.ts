import { createSlice } from "@reduxjs/toolkit";
import { SortConfig, Sorting, Task } from "../components/models/DataTable.model";
import {
  DEFAULT_FIRST_PAGE,
  DEFAULT_PAGE_SIZE,
} from "../components/Datatable.util";

export interface TasksState {
  tasks: Task[];
  currentPage: number;
  itemsPerPage: number;
  sortConfig: SortConfig
}

const initialState: TasksState = {
  tasks: [],
  currentPage: DEFAULT_FIRST_PAGE,
  itemsPerPage: DEFAULT_PAGE_SIZE,
  sortConfig: {
    direction: Sorting.ASC,
    key: ""
  }
};

const taskSlice = createSlice({
  name: "tasks",
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
      const { payload } = action;
      state.tasks = [...state.tasks, payload];
    },
    deleteTask: (state, action) => {
      const { payload } = action;
      const newTaskState = state.tasks.filter(
        (task: Task) => task.id !== payload
      );
      state.tasks = [...newTaskState];
    },
    updateTaskStatus: (state, action) => {
      const { payload } = action;
      const newTaskState = [
        ...state.tasks.map((task: Task) => {
          if (task.id === payload.id) {
            task.done = !task.done;
            task.doneDate =
              task.doneDate == null ? new Date().toLocaleDateString() : null;
          }
          return task;
        }),
      ];

      state.tasks = [...newTaskState];
    },
    setCurrentPage: (state, action) => {
      state.currentPage = action.payload;
    },
    sortTasks: (state, action) => {
      const { payload } = action;
 
      let data = [...state.tasks].sort((a, b) => {
        if (!payload || !payload?.key) return 0;
    
        const key = payload.key;
    
        const keyA = a[key as keyof Task] > b[key as keyof Task];
        const keyB = a[key as keyof Task] < b[key as keyof Task];
 
        if (keyA < keyB) return payload.direction === Sorting.ASC ? -1 : 1;
        if (keyA > keyB) return payload.direction === Sorting.ASC ? 1 : -1;
    
        return 0;
      });
      state.sortConfig = {...payload};
      state.tasks = [...data];
    },
  },
});

export const { addTask, deleteTask, updateTaskStatus, setCurrentPage, sortTasks } =
  taskSlice.actions;

export default taskSlice.reducer;
