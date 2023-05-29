import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import { List } from "./pages/list/List";
import { Docter } from "./pages/docter/Docter";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Docters" element={<List />} />
        <Route path="/Docters/:id" element={<Docter />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
