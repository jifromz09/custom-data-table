import React, { ReactElement } from 'react';
import { IHandleSortParam, SortConfig, Sorting } from './DataTable.model';

export interface ITableHeaderParam {
  columns: string[],
  sortConfig: SortConfig
  onSort: (key: string) => void
}

const TableHeader = ({ columns, sortConfig, onSort }: ITableHeaderParam): ReactElement => {

  const handleOnclick = (e: any, headerName: string) => {
    e.preventDefault();
    onSort(headerName);
  }

  return (
    <thead>
      <tr>{
        columns.map((col, index) =>
          <th key={index} onClick={e => handleOnclick(e, col)}>{`${col}`}</th>
        )}
      </tr></thead>
  )
}

export default TableHeader;