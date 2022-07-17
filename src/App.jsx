import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "../src/Components/Navbar/Navbar";
import Main from "./Components/Pages/Main/Main";
import Character from "./Components/Pages/CharactersDetails/CharactersDetails";
import Footer from "./Components/Footer/Footer";
function App() {
	return (
		<div className="App">
			<Router>
				<Navbar />
				<Routes>
					<Route path="/" exact element={<Main />} />
					<Route path="/Character" element={<Character />} />
				</Routes>
				<Footer />
			</Router>
		</div>
	);
}

export default App;
