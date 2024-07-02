import DataTable from "./components/DataTable";
import { DEFAULT_PAGE_SIZE } from "./components/Datatable.util";
import { columns, taskData } from "./mock-data/MockData";

function App() {
  return (
    <div className="App">
      <DataTable
        pageSize={DEFAULT_PAGE_SIZE}
        columns={columns}
        data={taskData}
      />
    </div>
  );
}

export default App;
