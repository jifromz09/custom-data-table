import { ReactElement } from "react";
import { Column } from "./DataTable.model";

export interface ITableHeaderParam {
  columns: Column[];
  onSort: (key: string) => void;
}

const TableHeader = ({ columns, onSort }: ITableHeaderParam): ReactElement => {
  const handleOnclick = (e: any, column: Column) => {
    e.preventDefault();
    onSort(column.accessor);
  };

  return (
    <thead>
      <tr>
        {columns.map(({ label, accessor }, index) => (
          <th
            key={accessor}
            onClick={(e) => handleOnclick(e, columns[index])}
          >{`${label}`}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
