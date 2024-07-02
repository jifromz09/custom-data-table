import {
  IHandleSortParam,
  ISortedDataParam,
  Sorting,
  Task,
} from "./DataTable.model";

export const DEFAULT_FIRST_PAGE = 1;
export const DEFAULT_PAGE_SIZE = 3;

// Sorting function
export const sortedData = ({ tasks, sortConfig }: ISortedDataParam): Task[] => {
 
  let data = [...tasks].sort((a, b) => {
    if (!sortConfig || !sortConfig?.key) return 0;

    const key = sortConfig.key;

    const keyA = a[key as keyof Task] > b[key as keyof Task];
    const keyB = a[key as keyof Task] < b[key as keyof Task];

    if (keyA < keyB) return sortConfig.direction === Sorting.ASC ? -1 : 1;
    if (keyA > keyB) return sortConfig.direction === Sorting.ASC ? 1 : -1;

    return 0;
  });
  return data;
};

export const onSort = ({
  key,
  tasks,
  sortConfig,
  firstIndex,
  lastIndex,
  setSortConfig,
  setTask,
}: IHandleSortParam): void => {
  const newSortConfig = {
    key,
    direction:
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === Sorting.ASC
        ? Sorting.DESC
        : Sorting.ASC,
  };
  setSortConfig(newSortConfig);
  const currentData = sortedData({ tasks, sortConfig: newSortConfig }).slice(
    firstIndex,
    lastIndex
  );
  setTask(currentData);
};

export const firstDataIndex = (currentPage: number): number => {
  return  (currentPage - 1) * DEFAULT_PAGE_SIZE;
}

export const lastDataIndex = (firstIndex: number): number => {
  return  firstIndex + DEFAULT_PAGE_SIZE;
}