export type Task = {
    id: number,
    name: string,
    done: boolean,
    doneDate?: string
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
 
export interface ISortedDataParam {
    tasks: Task[],
    sortConfig?: SortConfig
}