import { ReactElement, useState, useEffect, useCallback } from "react";
import {
  DataTableParams,
  IHandleSortParam,
  SortConfig,
  Sorting,
  Task,
} from "./DataTable.model";
import {
  DEFAULT_FIRST_PAGE,
  DEFAULT_PAGE_SIZE,
  onSort,
  sortedData,
} from "./Datatable.util";
import Pagination from "./Pagination";
import TableHeader from "./TableHeader";
import TableRow from "./TableRow";

const DataTable = ({
  data,
  columns,
  pageSize,
}: DataTableParams): ReactElement => {
  const initialData = data.slice(0, DEFAULT_PAGE_SIZE);

  const [tasks, setTask] = useState<Task[]>(initialData);
  const [currentPage, setCurrentPage] = useState<number>(DEFAULT_FIRST_PAGE);
  const [sortConfig, setSortConfig] = useState<SortConfig>({
    key: "name",
    direction: Sorting.ASC,
  });
  const [firstIndex, setFirstIndex] = useState<number>(
    (currentPage - 1) * DEFAULT_PAGE_SIZE
  );
  const [lastIndex, setLastIndex] = useState<number>(
    firstIndex + DEFAULT_PAGE_SIZE
  );

  const handlePageChange = useCallback((pageNumber: number) => {
 
    if (pageNumber == currentPage) return;

    const FirstIn = (pageNumber - 1) * DEFAULT_PAGE_SIZE;
    const lastIn = (pageNumber - 1) * DEFAULT_PAGE_SIZE + DEFAULT_PAGE_SIZE;
    const newTasks = data as Task[];

    setCurrentPage(pageNumber);
    setFirstIndex(firstIndex);
    setLastIndex(lastIn);

    const currentData = sortedData({
      tasks: newTasks,
      sortConfig: sortConfig,
    }).slice(FirstIn, lastIn);

    setTask(currentData);

  }, [currentPage]);

  const handleSort = (key: string): void => {

    if (tasks.length == 1) return;

    onSort({
      key,
      tasks,
      sortConfig,
      firstIndex,
      lastIndex,
      setSortConfig,
      setTask,
    } as IHandleSortParam);
  };

  useEffect(() => {
    setSortConfig({
      key: "name",
      direction: Sorting.ASC,
    });
  }, [data]);

  return (
    <div className="container">
      <table>
        <TableHeader columns={columns} onSort={handleSort} />
        <tbody>
          {tasks.map((row: Task) => (
            <TableRow
              key={row.id} // assuming each row has a unique id
              row={row}        
            />
          ))}
        </tbody>
      </table>
      <Pagination
        pageSize={pageSize}
        totalItems={data.length}
        onPageChange={handlePageChange}
      />
    </div>
  );
};

export default DataTable;
