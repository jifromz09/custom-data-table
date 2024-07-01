import React, { ReactElement, useState, useEffect } from 'react';
import { DataTableParams, SortConfig, Sorting, Task } from './DataTable.model';
import { DEFAULT_FIRST_PAGE, handlePageChange, handleRowSelect, handleSort, sortedData } from './Datatable.util';
import Pagination from './Pagination';
import TableHeader from './TableHeader';
import TableRow from './TableRow';

const DataTable = ({ data, columns, pageSize = 10, initialSortBy = null }: DataTableParams): ReactElement => {

    const [tasks, setStask] = useState<Task[]>(data);
    const [currentPage, setCurrentPage] = useState<number>(DEFAULT_FIRST_PAGE);
    const [sortConfig, setSortConfig] = useState<SortConfig>({
        key: "name",
        direction: Sorting.ASC
    });
    const [selectedRows, setSelectedRows] = useState<number[]>([]);

    useEffect(() => {
        setCurrentPage(DEFAULT_FIRST_PAGE);
        setSortConfig({
            key: "name",
            direction: Sorting.ASC
        });
    }, [data])

    const sortedData = (): Task[] => {

        return [...tasks].sort((a, b) => {

            if (!sortConfig || !sortConfig?.key) return 0;
            const key = sortConfig.key;

            if (key === 'doneDate' && !key) return 0;

            const keyA = a[key as keyof Task] < b[key as keyof Task];
            const keyB = a[key as keyof Task] < b[key as keyof Task];

            if (keyA < keyB) return sortConfig.direction === Sorting.ASC ? -1 : 1;
            if (keyA > keyB) return sortConfig.direction === Sorting.ASC ? 1 : -1;

            return 0;
        });
    }

    // Pagination
    const lastIndex = currentPage * pageSize;
    const firstIndex = lastIndex - pageSize;
    const currentData = sortedData().slice(firstIndex, lastIndex);

    const handleSort = (key: string): void => {
        const newSortConfig = {
            key,
            direction: sortConfig && sortConfig.key === key && sortConfig.direction === Sorting.ASC ? Sorting.DESC : Sorting.ASC
        };
        setSortConfig(newSortConfig);
    };

    return (
        <div>
            <table>
                <TableHeader columns={columns} sortConfig={sortConfig} onSort={handleSort} />
                <tbody>
                    {currentData.map((row: Task) => (
                        <TableRow
                            key={row.id} // assuming each row has a unique id
                            row={row}
                            onSelect={handleRowSelect}
                            isSelected={selectedRows.includes(row.id)}
                            selectedRows={selectedRows}
                            setSelectedRows={setSelectedRows}
                        />
                    ))}
                </tbody>
            </table>
            <Pagination
                currentPage={currentPage}
                pageSize={pageSize}
                totalItems={sortedData.length}
                onPageChange={() => handlePageChange({
                    pageNumber: currentPage,
                    setCurrentPage: setCurrentPage
                })}
            />
        </div>
    );
}

export default DataTable;        