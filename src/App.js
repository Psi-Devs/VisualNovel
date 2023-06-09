import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/home/Home";
import { LoginPage } from "./pages/loginPage/Loginpage";
import { Novel } from "./pages/novel/Novel";
import { Creator } from "./pages/CreatorPage/Creatorpage";
import { Registerpage } from "./pages/loginPage/Registerpage";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Novel" element={<Novel />} />
        <Route path="/Novel/:id" element={<Novel />} />
        <Route path="/Creator" element={<Creator />} />
        <Route path="/Register" element={<Registerpage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
//
