import "./App.css";
import AppEmptyTasks from "@/components/empty-state/empty-tasks";

function App() {
  return (
    <div className="bg-white w-screen-400 min-h-screen-min max-h-screen-max p-4 relative">
      <AppEmptyTasks />
    </div>
  );
}

export default App;
