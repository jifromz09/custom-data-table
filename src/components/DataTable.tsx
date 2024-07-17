import { ReactElement, useState, useEffect, useCallback } from "react";
import { Sorting, Task } from "./models/DataTable.model";
import {
  DEFAULT_FIRST_PAGE,
  DEFAULT_PAGE_SIZE,
  firstDataIndex,
  lastDataIndex,
} from "./Datatable.util";
import Pagination from "./table/Pagination";
import TableHeader from "../components/table/TableHeader";
import TableRow from "../components/table/TableRow";
import TaskDetailForm from "./TaskDetailForm";
import { useDispatch, useSelector } from "react-redux";
import { columns } from "../mock-data/MockData";
import {
  deleteTask,
  setCurrentPage,
  sortTasks,
  updateTaskStatus,
} from "../data/taskSlice";

const DataTable = (): ReactElement => {

  const initialTasks = useSelector((state: any) => state.tasks.tasks);
  const currentPage = useSelector((state: any) => state.tasks.currentPage);
  const sortConfig = useSelector((state: any) => state.tasks.sortConfig);

  const dispatch = useDispatch();

  // Set first and last index for per page display
  const firstIndex = firstDataIndex(currentPage);
  const lastIndex = lastDataIndex(firstIndex);

  const initialData =
    currentPage === DEFAULT_FIRST_PAGE
      ? initialTasks.slice(0, DEFAULT_PAGE_SIZE)
      : initialTasks.slice(firstIndex, lastIndex);

  const [tasks, setTask] = useState<Task[]>([...initialData]);

  const handlePageChange = useCallback(
    (pageNumber: number) => {
      dispatch(setCurrentPage(pageNumber));
    },
    [dispatch]
  );

  const handleSort = (key: string): void => {
   
    if (initialTasks.length === 1 || !key || key === "id") return;
    
    // Initialize new sorting config
    const newSortConfig = {
      key,
      direction:
        sortConfig &&
        sortConfig.key === key &&
        sortConfig.direction === Sorting.ASC
          ? Sorting.DESC
          : Sorting.ASC,
    };

    dispatch(sortTasks(newSortConfig));
  };

  const onUpdate = (task: Task) => {
    dispatch(updateTaskStatus(task));
  };

  const onDelete = (task: Task) => {
    dispatch(deleteTask(task?.id));
    if (currentPage > DEFAULT_FIRST_PAGE && tasks.length === 1) {
      dispatch(setCurrentPage(currentPage - 1));
    }
  };

  useEffect(() => {
    if (JSON.stringify(tasks) !== JSON.stringify(initialData)) {
      setTask([...initialData]);
    }
  }, [tasks, initialTasks, initialData, currentPage]);

  return (
    <div className="container">
      <TaskDetailForm />
      {tasks.length ? (
        <div>
          <table>
            <TableHeader columns={columns} onSort={handleSort} />
            <tbody>
              {tasks.map((task: Task) => (
                <TableRow
                  key={task.id} // assuming each row has a unique id
                  task={task}
                  onUpdate={onUpdate}
                  onDelete={onDelete}
                />
              ))}
            </tbody>
          </table>
          <Pagination
            pageSize={DEFAULT_PAGE_SIZE}
            totalItems={initialTasks.length}
            onPageChange={handlePageChange}
          />
        </div>
      ) : (
        <div className="no-task">{`No task found!`}</div>
      )}
    </div>
  );
};

export default DataTable;