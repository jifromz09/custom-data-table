import React, { ReactElement } from 'react';
import { IHandleRowSelect, Task } from './DataTable.model';

export interface ITableRowParam {
  row: Task,
  onSelect: ({ rowId, isSelected, selectedRows, setSelectedRows }: IHandleRowSelect) => void,
  isSelected: boolean,
  selectedRows: number[],
  setSelectedRows: (rowIds: number[]) => void
}

const TableRow = ({ row, onSelect, selectedRows, isSelected, setSelectedRows }: ITableRowParam): ReactElement => {

  const handleOnSelect = (e: any, row: Task) => {

    e?.stopPropagation();

    onSelect({
      rowId: row.id,
      isSelected: !isSelected,
      selectedRows: selectedRows,
      setSelectedRows: (selectedRows) => setSelectedRows(selectedRows)
    } as IHandleRowSelect);
  }

  return (
    <tr onClick={(e: any) => handleOnSelect(e, row)}>
      <td>{row.id}</td>
      <td>{row.name}</td>
      <td>{row.doneDate ? row.doneDate.toLocaleDateString() : ""}</td>
      <td>{row.done ? "Done" : "To do"}</td>
    </tr>
  )
}

export default TableRow;