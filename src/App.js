import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import { List } from "./pages/list/List";
import { Novel } from "./pages/docter/Novel";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Novel" element={<List />} />
        <Route path="/Novel/:id" element={<Novel />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
