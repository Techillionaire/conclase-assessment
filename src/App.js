import JobCard from "./components/cards/JobCard";
import Navbar from "./components/navbar";
import SearchBar from "./components/Search";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Homepage from "./pages/homepage";
import TodosPage from "./pages/todos";

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
