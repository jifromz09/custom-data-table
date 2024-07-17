import { ReactElement } from "react";
import { Task } from "../models/DataTable.model";
import Button from "../shared/Button";

export interface ITableRowParam {
  task: Task,
  onDelete: (task: Task) => void,
  onUpdate: (task: Task) => void
}

const TableRow = ({ task, onDelete, onUpdate }: ITableRowParam): ReactElement => {
 
  const handleUpdate = (e: any, task: Task) => {
    e?.stopPropagation();
    onUpdate(task);
  };

  const handleDelete = (e: any, task: Task) => {
    e?.stopPropagation();
    onDelete(task);
  };

  return (
    <tr>
      <td>{task.id}</td>
      <td>{task.name}</td>
      <td>{task.done ? "Completed" : "To do"}</td>
      <td>{task.doneDate ? task.doneDate : ""}</td>
      <td>
        <div className="action-button-container">
          <Button styles={""} onClick={(e) => handleUpdate(e, task)}>
            {!task.done ? `Done` : `Undo`}
          </Button>
          <Button
            styles={""}
            onClick={(e) => handleDelete(e, task)}
          >{`Delete`}</Button>
        </div>
      </td>
    </tr>
  );
};

export default TableRow;
