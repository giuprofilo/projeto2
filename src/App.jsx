import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import EditPage from "./pages/EditPage";

function App() {
  return (
    <div className="bg-background min-h-screen font-mono px-7 pb-14">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/places/:id" element={<EditPage />} />
      </Routes>
    </div>
  );
}

export default App;
