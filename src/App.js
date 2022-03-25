import { lazy } from "react";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Homepage from "./pages/homepage";

const TodosPage = lazy(() => import("./pages/todos"));

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Homepage />} />
        <Route path="todos" element={<TodosPage />} />
      </Route>
    </Routes>
  );
}

export default App;
