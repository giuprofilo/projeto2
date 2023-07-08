import "./App.css";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import NavBar from "./components/NavBar";
import EditPage from "./pages/EditPage";
import CreatePost from "./pages/CreatePost";
import AllPosts from "./pages/AllPosts";

function App() {
  return (
    <div className=" bg-background-2 min-h-screen font-mono px-7 pb-14">
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/places/:id" element={<EditPage />} />
        <Route path="/create" element={<CreatePost />} />
        <Route path="/all" element={<AllPosts />} />
      </Routes>
    </div>
  );
}

export default App;
