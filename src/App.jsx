import { Outlet } from "react-router-dom";
import "./App.css";

function App() {
  return (
    <div className="flex flex-col justify-center items-center h-screen bg-gray-900 text-white">
      <main className="flex flex-col justify-center items-center">
        <Outlet />
      </main>
    </div>
  );
}

export default App;
