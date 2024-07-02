import { ReactElement } from "react";
import { Task } from "./DataTable.model";

const TableRow = ({ row }: { row: Task }): ReactElement => {
  const handleClick = (e: any, row: Task) => {
    e?.stopPropagation();
  };

  return (
    <tr onClick={(e: any) => handleClick(e, row)}>
      <td>{row.id}</td>
      <td>{row.name}</td>
      <td>{row.doneDate ? row.doneDate.toLocaleDateString() : ""}</td>
      <td>{row.done ? "Completed" : "To do"}</td>
    </tr>
  );
};

export default TableRow;
