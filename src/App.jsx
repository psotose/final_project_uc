import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Navbar from "../src/components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Main from "./components/Main/Main";
import Character from "./components/Character/Character";
import Footer from "./components/Footer/Footer";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/final_project_usach" exact element={<Home />} />
          <Route path="/characters" exact element={<Main />} />
          <Route path="/Character/:id" element={<Character />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
