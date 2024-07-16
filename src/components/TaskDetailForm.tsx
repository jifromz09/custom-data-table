import { ReactElement, useEffect, useRef, useState } from "react";
import Button from "./shared/Button";
import { addTask } from "../data/taskSlice";
import { useDispatch, useSelector } from "react-redux";
import RefInput from "./shared/Input";
import { Task } from "./models/DataTable.model";

const TaskDetailForm = (): ReactElement => {
  const initialTasks = useSelector((state: any) => state.tasks.tasks);

  const dispatch = useDispatch();
  const inputRef = useRef<HTMLInputElement>(null);
  const [task, setTask] = useState<Task>({
    name: "",
    id: null,
    done: false,
    doneDate: null,
  });

  const handleButtonClick = (e: any): void => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    const id = !initialTasks.length
      ? 1
      : initialTasks[initialTasks.length - 1].id + 1;

    dispatch(addTask({ ...task, done: false, id: id }));
    setTask({ ...task, name: e.target.value });
  };

  const handleChange = (e: any): void => {
    setTask({ ...task, name: e.target.value });
  };

  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }
  }, []);

  return (
    <div className="form-container">
      <form onSubmit={handleButtonClick}>
        <RefInput
          name={"name"}
          onChange={handleChange}
          value={task.name}
          placeholder={""}
          label={"Task name"}
          type="text"
          ref={inputRef}
        />
        <Button type="submit" styles={"add-button"}>{`Add`}</Button>
      </form>
    </div>
  );
};

export default TaskDetailForm;
