import { IHandlePageChangeParam, IHandleRowSelect, IHandleSortParam, ISortedDataParam, SortConfig, Sorting, Task } from "./DataTable.model";

export const DEFAULT_FIRST_PAGE = 1;
export const DEFAULT_PAGE_SIZE = 5;

// Sorting function
export const sortedData = ({
    data, sortConfig
}: ISortedDataParam): Task[] => {

    const sortedData = [...data].sort((a, b) => { 
        
        if (!sortConfig || !sortConfig?.key) return 0;
        const key = sortConfig.key;

        if(key === 'doneDate' && !key) return 0;

        const keyA = a[key as keyof Task] < b[key as keyof Task];
        const keyB = a[key as keyof Task] < b[key as keyof Task];

        if (keyA < keyB) return sortConfig.direction === Sorting.ASC ? -1 : 1;
        if (keyA > keyB) return sortConfig.direction === Sorting.ASC ? 1 : -1;

        return 0;
    });

    return sortedData;

}

export const handleSort = ({ key, setSortConfig, sortConfig }: IHandleSortParam): void => {
    const newSortConfig = {
        key,
        direction: sortConfig && sortConfig.key === key && sortConfig.direction === Sorting.ASC ? Sorting.DESC : Sorting.ASC
    };
    setSortConfig(newSortConfig);
};

export const handlePageChange = ({ pageNumber, setCurrentPage }: IHandlePageChangeParam): void => {
    setCurrentPage(pageNumber);
};

export const handleRowSelect = ({ rowId, isSelected, selectedRows, setSelectedRows }: IHandleRowSelect) => {
    if (isSelected) {
        setSelectedRows([...selectedRows, rowId]);
    } else {
        setSelectedRows(selectedRows.filter(id => id !== rowId));
    }
}; 