import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";
import Details from "./Pages/Details";
import Favorite from "./Pages/Favorite";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<SearchBar />} />
        <Route path="/favorites" element={<Favorite />} />
        <Route path="/user/:id" element={<Details />} />
      </Routes>
    </div>
  );
}

export default App;
