export type Task = {
    id: number,
    name: string,
    done: boolean,
    doneDate?: Date | null
};

export type Column = {
    label: string,
    accessor: string
}

export type DataTableParams = {
    initialSortBy?: any
    pageSize: number,
    columns: Column[],
    data: Task[]
};

export type SortConfig = {
    key?: string,
    direction?: string
}

// Pagination & Sorting
export enum Sorting {
    ASC = "asc",
    DESC = "desc"
}

export interface IHandleSortParam {
    key: string,
    setSortConfig: (sortConfig: SortConfig) => void,
    sortConfig: SortConfig,
    tasks: Task[],
    firstIndex: number,
    lastIndex: number,
    setTask: (tasks: Task[]) => void
}

export interface IHandlePageChangeParam {
    pageNumber: number,
    setCurrentPage: (pageNumber: number) => void
}

export interface IHandleRowSelect {
    rowId: number,
    isSelected: boolean,
    setSelectedRows: (selectedRows: number[]) => void,
    selectedRows: number[]
}

export interface ISortedDataParam {
    tasks: Task[],
    sortConfig?: SortConfig
}
